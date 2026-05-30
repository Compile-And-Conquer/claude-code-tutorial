export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string): string => `${BASE}${path}`;
