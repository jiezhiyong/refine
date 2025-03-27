import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useCan } from '@refinedev/core';
import { t } from 'i18next';
import { ChevronDown, ChevronRight, GripVertical, Pencil, Trash2 } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';

import { DynamicIcon } from '~/components/dynamic-icon';
import { Button } from '~/components/ui/button';
import { Card, CardHeader } from '~/components/ui/card';
import { Switch } from '~/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { cannotDisableMenus } from '~/config/resources';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { cn } from '~/lib/utils';

// 菜单项类型定义
export interface MenuTreeItem {
  id: string;
  title?: string | null;
  name: string;
  isActive?: boolean | null;
  children?: MenuTreeItem[];
  level?: number;
  order?: number | null | undefined;
  meta?: {
    parent?: string;
    label?: string;
    icon?: string;
  };
}

/**
 * 基础菜单项属性
 */
interface MenuItemProps {
  item: MenuTreeItem;
  onEdit: (menu: MenuTreeItem) => void;
  onDelete?: (menu: MenuTreeItem) => void;
  onToggle: (id: string) => void;
  expanded: boolean;
  dragHandle?: React.ReactNode;
  onToggleActive?: (menu: MenuTreeItem, isActive: boolean) => void;
}

// 菜单树组件属性
interface MenuTreeProps {
  items: MenuTreeItem[];
  onEditMenu: (menu: MenuTreeItem) => void;
  onDeleteMenu?: (menu: MenuTreeItem) => void;
  onReorder: (items: MenuTreeItem[]) => void;
  onToggleActive?: (menu: MenuTreeItem, isActive: boolean) => void;
}

/**
 * 菜单树组件
 */
export function MenuTree({ items, onEditMenu, onDeleteMenu, onReorder, onToggleActive }: MenuTreeProps) {
  const [draggedItem, setDraggedItem] = useState<MenuTreeItem | null>(null);

  // 获取第一个顶层菜单和其下的第一个子菜单
  const initialExpandedItems = useMemo(() => {
    const set = new Set<string>();

    // 获取第一个顶层菜单
    const topLevelItems = items.filter((item) => !item.meta?.parent);
    const firstTopLevelItem = topLevelItems[0];

    if (firstTopLevelItem) {
      set.add(firstTopLevelItem.id);

      // 获取第一个二级菜单
      const firstChildItem = firstTopLevelItem.children?.[0];
      if (firstChildItem) {
        set.add(firstChildItem.id);
      }
    }

    return set;
  }, [items]);

  const [expandedItems, setExpandedItems] = useState<Set<string>>(initialExpandedItems);

  // 用于检测拖拽
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // 切换展开/折叠状态
  const handleToggle = useCallback((id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  // 渲染菜单项
  const renderTopLevelMenus = useCallback(() => {
    // 只过滤出顶层菜单项
    const topLevelItems = items.filter((item) => !item.meta?.parent);
    const topLevelIds = topLevelItems.map((item) => item.id);

    // 处理顶层菜单的拖拽结束
    const handleTopLevelDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const activeIndex = topLevelItems.findIndex((item) => item.id === active.id);
        const overIndex = topLevelItems.findIndex((item) => item.id === over.id);

        if (activeIndex !== -1 && overIndex !== -1) {
          // 重新排序顶层菜单
          const newTopLevelItems = arrayMove(topLevelItems, activeIndex, overIndex);
          onReorder([...newTopLevelItems, ...items.filter((item) => item.meta?.parent)]);
        }
      }

      setDraggedItem(null);
    };

    // 处理拖拽开始
    const handleTopLevelDragStart = (event: DragStartEvent) => {
      const { active } = event;

      const draggedItem = topLevelItems.find((item) => item.id === active.id);
      if (draggedItem) {
        setDraggedItem(draggedItem);
      }
    };

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleTopLevelDragStart}
        onDragEnd={handleTopLevelDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={topLevelIds} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {topLevelItems.map((item) => (
              <TopLevelMenuItem
                key={item.id}
                item={item}
                onEdit={onEditMenu}
                onDelete={onDeleteMenu}
                onToggle={handleToggle}
                expanded={expandedItems.has(item.id)}
                onToggleActive={onToggleActive}
                expandedItems={expandedItems}
                onReorder={onReorder}
                allItems={items}
              />
            ))}
          </div>
        </SortableContext>

        <DragOverlay adjustScale={false} dropAnimation={null}>
          {draggedItem && (
            <MenuItem
              item={draggedItem}
              onEdit={onEditMenu}
              onDelete={onDeleteMenu}
              onToggle={handleToggle}
              expanded={false}
              dragHandle={
                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-grab">
                  <GripVertical className="h-4 w-4" />
                </Button>
              }
              onToggleActive={onToggleActive}
            />
          )}
        </DragOverlay>
      </DndContext>
    );
  }, [expandedItems, handleToggle, items, onDeleteMenu, onEditMenu, onReorder, onToggleActive, sensors, draggedItem]);

  return renderTopLevelMenus();
}

/**
 * 基础菜单项组件
 */
function MenuItem({ item, onEdit, onDelete, onToggle, expanded, dragHandle, onToggleActive }: MenuItemProps) {
  // 判断是否有子菜单
  const hasChildren = item.children && item.children.length > 0;

  const { data: editPermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.edit,
  });

  const { data: deletePermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.delete,
  });

  return (
    <Card className={cn('overflow-hidden border transition-all', !item.isActive && 'border-dashed opacity-70')}>
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {hasChildren && (
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onToggle(item.id)}>
                {expanded ? <ChevronDown className="h-4 w-4 text-green-500" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            )}
            {/* 菜单Icon，将字符串转换为显示lucide-react图标 */}
            <div className="ml-2 flex items-center gap-2">
              {item.meta?.icon && <DynamicIcon name={item.meta.icon} className="text-muted-foreground h-4 w-4" />}
              <span className="font-medium">
                {t(`menus.${item.name}`, item.title || '?')} - {item.name}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {onToggleActive && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Switch
                        id={`active-${item.id}`}
                        checked={item.isActive !== false}
                        onCheckedChange={(checked) => onToggleActive(item, checked)}
                        disabled={!editPermission?.can || cannotDisableMenus.includes(item.name)}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('buttons.activeToggle')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onEdit(item)}
                    disabled={!editPermission?.can}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('buttons.edit')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {onDelete && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onDelete(item)}
                      disabled={!deletePermission?.can || cannotDisableMenus.includes(item.name)}
                    >
                      <Trash2 className="text-destructive h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('buttons.delete')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <div className={cn(!editPermission?.can && 'pointer-events-none opacity-50')}>{dragHandle}</div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

// 顶层菜单项属性
interface TopLevelMenuItemProps extends MenuItemProps {
  expandedItems: Set<string>;
  onReorder: (menus: MenuTreeItem[]) => void;
  allItems: MenuTreeItem[];
}

/**
 * 顶层菜单项组件
 */
function TopLevelMenuItem({
  item,
  onEdit,
  onDelete,
  onToggle,
  expanded,
  onToggleActive,
  expandedItems,
  onReorder,
  allItems,
}: TopLevelMenuItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  // 样式设置
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  // 拖拽手柄
  const dragHandle = (
    <Button variant="ghost" size="icon" className="h-8 w-8 cursor-grab" {...attributes} {...listeners}>
      <GripVertical className="h-4 w-4" />
    </Button>
  );

  return (
    <div ref={setNodeRef} style={style} className={cn(isDragging && 'opacity-50')}>
      <MenuItem
        item={item}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
        expanded={expanded}
        dragHandle={dragHandle}
        onToggleActive={onToggleActive}
      />

      {/* 子菜单容器 */}
      {expanded && item.children && item.children.length > 0 && (
        <div className="mt-2 ml-7 space-y-2 border-l pl-4">
          <SubMenuContainer
            parentId={item.id}
            items={item.children}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
            expandedItems={expandedItems}
            onToggleActive={onToggleActive}
            onReorder={onReorder}
            allItems={allItems}
          />
        </div>
      )}
    </div>
  );
}

// 子菜单容器属性
interface SubMenuContainerProps extends Omit<MenuItemProps, 'item' | 'expanded'> {
  parentId: string;
  items: MenuTreeItem[];
  expandedItems: Set<string>;
  onReorder: (menus: MenuTreeItem[]) => void;
  allItems: MenuTreeItem[];
}

/**
 * 子菜单容器组件，为每个子菜单层级创建独立的DndContext
 */
function SubMenuContainer({
  parentId,
  items,
  onEdit,
  onDelete,
  onToggle,
  expandedItems,
  onToggleActive,
  onReorder,
  allItems,
}: SubMenuContainerProps) {
  const [draggedItem, setDraggedItem] = useState<MenuTreeItem | null>(null);

  // 用于检测拖拽
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // 获取子菜单ID列表
  const childrenIds = useMemo(() => items.map((item) => item.id), [items]);

  // 处理拖拽开始
  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event;

      const foundItem = items.find((item) => item.id === active.id);
      if (foundItem) {
        setDraggedItem(foundItem);
      }
    },
    [items]
  );

  // 处理拖拽结束
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        // 找到被拖拽项和目标项的索引
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        if (activeIndex !== -1 && overIndex !== -1) {
          // 重新排序子菜单
          const newItems = arrayMove(items, activeIndex, overIndex);

          // 更新完整的菜单数据
          const updatedAllItems = [...allItems];

          // 递归更新父菜单的子菜单
          const updateChildrenInMenuTree = (
            menuItems: MenuTreeItem[],
            parentId: string,
            newChildren: MenuTreeItem[]
          ) => {
            for (let i = 0; i < menuItems.length; i++) {
              if (menuItems[i].id === parentId) {
                // 找到父菜单，更新其子菜单
                menuItems[i] = { ...menuItems[i], children: [...newChildren] };
                return true;
              }

              // 递归检查子菜单
              if (menuItems[i].children) {
                if (updateChildrenInMenuTree(menuItems[i].children || [], parentId, newChildren)) {
                  return true;
                }
              }
            }

            return false;
          };

          // 更新菜单树中的子菜单顺序
          updateChildrenInMenuTree(updatedAllItems, parentId, newItems);

          // 更新菜单数据
          onReorder(updatedAllItems);
        }
      }

      setDraggedItem(null);
    },
    [items, allItems, onReorder, parentId]
  );

  // 渲染子菜单项，如果有更深层级的子菜单，则递归处理
  const renderSubMenuItem = useCallback(
    (subItem: MenuTreeItem) => {
      const hasChildren = subItem.children && subItem.children.length > 0;
      const isExpanded = expandedItems.has(subItem.id);

      return (
        <SortableSubMenuItem
          key={subItem.id}
          item={subItem}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
          expanded={isExpanded}
          onToggleActive={onToggleActive}
          expandedItems={expandedItems}
        >
          {hasChildren && isExpanded && (
            <div className="mt-2 ml-7 space-y-2 border-l pl-4">
              <SubMenuContainer
                parentId={subItem.id}
                items={subItem.children || []}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggle={onToggle}
                expandedItems={expandedItems}
                onToggleActive={onToggleActive}
                onReorder={onReorder}
                allItems={allItems}
              />
            </div>
          )}
        </SortableSubMenuItem>
      );
    },
    [expandedItems, onDelete, onEdit, onReorder, onToggle, onToggleActive, allItems]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={childrenIds} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">{items.map((item) => renderSubMenuItem(item))}</div>
      </SortableContext>

      <DragOverlay>
        {draggedItem && (
          <SortableSubMenuItem
            item={draggedItem}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
            expanded={expandedItems.has(draggedItem.id)}
            onToggleActive={onToggleActive}
            expandedItems={expandedItems}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}

// 可排序子菜单项属性
interface SortableSubMenuItemProps extends MenuItemProps {
  children?: React.ReactNode;
  expandedItems: Set<string>;
}

/**
 * 可排序子菜单项组件
 */
function SortableSubMenuItem({
  item,
  onEdit,
  onDelete,
  onToggle,
  expanded,
  onToggleActive,
  children,
}: SortableSubMenuItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  // 样式设置
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  // 拖拽手柄
  const dragHandle = (
    <Button variant="ghost" size="icon" className="h-8 w-8 cursor-grab" {...attributes} {...listeners}>
      <GripVertical className="h-4 w-4" />
    </Button>
  );

  return (
    <div ref={setNodeRef} style={style} className={cn(isDragging && 'opacity-50')}>
      <MenuItem
        item={item}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
        expanded={expanded}
        dragHandle={dragHandle}
        onToggleActive={onToggleActive}
      />
      {children}
    </div>
  );
}
