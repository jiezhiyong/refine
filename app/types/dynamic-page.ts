// 定义表格记录链接接口
export interface TTableRecordLinkItem {
  name: string;
  url: string;
}

// 定义表格字段接口
export interface TTableFieldItem {
  name: string;
  defaultHide?: boolean;
}

// 定义表单字段接口
type OptionsType = 'static' | 'database' | 'api';

// 定义表单字段类型
type TFormFieldType =
  | 'text' // value type => string
  | 'textarea' // value type => string
  | 'switch' // value type => boolean
  | 'slider' // value type => number
  | 'file' // value type => string
  | 'number' // value type => number
  | 'date' // value type => string
  | 'dateRange' // value type => { from: string; to: string }
  | 'dateMany' // value type => string[]
  | 'code' // value type => string
  | 'checkbox' // value type => boolean
  | 'select' // value type => { label: string; value: string | number }
  | 'radio' // value type => { label: string; value: string | number }
  | 'selectMany' // value type => { label: string; value: string | number }[]
  | 'checkboxMany'; // value type => { label: string; value: string | number }[]

// 定义表单字段接口
export interface TFormFieldItem {
  name: string;
  type: TFormFieldType;
  required?: boolean;
  readonly?: boolean;
  hide?: boolean;
  label?: string;
  description?: string;
  optionsType?: OptionsType;
  optionsStatic?: { label: string; value: string }[];
  optionsSql?: string;
  optionsMap?: {
    key?: string;
    label?: string;
    value?: string;
  };
  min?: number;
  max?: number;
  step?: number;
  start?: string;
  end?: string;
  language?: string;
}
