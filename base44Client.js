import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

export const db = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: appBaseUrl || undefined,
  requiresAuth: false,
});

export const base44 = db;
export default db;
