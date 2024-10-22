export const BASE_URL = process.env.BRIDGE_URL ?? 'https://webhooksapi.salesparkapps.com';

export const AuthenticationModuleApiRoutes = {
  privateKeyAuth: '/token',
  basicAuth: '/auth/basic',
  publicKeyAuth: '/auth/public',
  authentication: '/authentication',
};
