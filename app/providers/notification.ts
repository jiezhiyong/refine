import { NotificationProvider } from '@refinedev/core';
import { toast } from 'sonner';

let lastNotificationKey: string | undefined = undefined;

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, description, type }) => {
    console.log(message, description);

    lastNotificationKey = key;
    const id = key === lastNotificationKey ? key : undefined;

    // 成功通知
    if (type === 'success') {
      toast.success(message, { description, id });
    }

    // 失败通知
    else if (type === 'error') {
      toast.error(message, { description, id });
    }

    // 处理中通知
    else if (type === 'progress') {
      toast.loading(message, { description, id });
    }
  },
  close: (key) => {
    toast.dismiss(key);
    lastNotificationKey = undefined;
  },
};

export const useNotificationProvider = (): NotificationProvider => {
  return notificationProvider;
};
