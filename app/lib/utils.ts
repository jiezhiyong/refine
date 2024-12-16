import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并类名
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 延迟
 * @param time 毫秒
 * @returns
 */
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
