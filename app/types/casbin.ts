export interface CasbinRule {
  subject: string;
  object: string;
  action: string;
}

export interface PolicyUpdateResult {
  success: boolean;
  error?: string;
}
