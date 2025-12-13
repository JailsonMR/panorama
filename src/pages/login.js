import { useState } from 'react';
import Link from 'next/link';
export default function Login() {
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('');
  async function submit(e){ e.preventDefault(); setErr('');
    const r = await fetch('/api/auth/login',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email,password})});
    if(r.ok) window.location.href='/dashboard'; else setErr((await r.json()).error||'Erro');
  }
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="card p-6 space-y-3">
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="bg-soft rounded px-3 py-2"/>
        <input placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="bg-soft rounded px-3 py-2"/>
        <button className="bg-primary text-white rounded px-4 py-2">Entrar</button>
        <div className="text-sm text-gray-600">
          <Link href="/cadastro">Criar conta</Link> • <Link href="/recuperar">Esqueci minha senha</Link>
        </div>
      </form>
    </div>
  );
}