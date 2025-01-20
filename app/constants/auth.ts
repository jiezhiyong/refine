// 认证提供商枚举
export enum EnumAuthProvider {
  userpass = 'userpass',
  tcshuke = 'tcshuke',
}

// 认证提供商类型
export type TAuthProvider = `${EnumAuthProvider}`;
