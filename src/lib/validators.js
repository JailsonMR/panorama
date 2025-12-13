export function required(v, name) {
  if (!v || (typeof v === 'string' && !v.trim())) throw new Error(`${name} é obrigatório`);
}
export function maxLen(v, len, name) {
  if ((v || '').length > len) throw new Error(`${name} deve ter no máximo ${len} caracteres`);
}
export function isWhatsApp(phone) {
  return /^\+?\d{10,15}$/.test(phone);
}
export function isPrice(p) {
  return /^\d+([.,]\d{1,2})?$/.test(String(p));
}