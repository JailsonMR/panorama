import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const TOKEN_NAME = 'bb_token';
const isProd = process.env.NODE_ENV === 'production';

export function signJwt(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
}

export function verifyJwt(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export function setAuthCookie(res, token) {
  res.setHeader('Set-Cookie', `${TOKEN_NAME}=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax; ${isProd ? 'Secure;' : ''}`);
}

export function clearAuthCookie(res) {
  res.setHeader('Set-Cookie', `${TOKEN_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax; ${isProd ? 'Secure;' : ''}`);
}

export function getTokenFromReq(req) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/bb_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}