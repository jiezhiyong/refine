export type PermissionRule = {
  subject: string;
  object: string;
  action: string;
  effect: string | 'allow' | 'deny';
};
