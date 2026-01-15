export function decodeJwt(token: string): any {
  const [, payload] = token.split(".");
  if (!payload) return null;

  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const json = atob(base64);
  return JSON.parse(json);
}
