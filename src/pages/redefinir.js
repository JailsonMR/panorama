import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Redefinir() {
  const { query } = useRouter();
  const [password,setPassword]=useState(''); const [msg,setMsg]=useState('');
  async function submit(e){ e.preventDefault();
    const r = await fetch('/api/auth/reset',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({token:query.token, password})});
    const d = await r.json(); setMsg(d.message || d.error);
  }
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Redefinir senha</h1>
      <form onSubmit={submit} className="card p-6 space-y-3">
        <input placeholder="Nova senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="bg-soft rounded px-3 py-2"/>
        <button className="bg-primary text-white rounded px-4 py-2">Redefinir</button>
        {msg && <div className="text-sm text-gray-700">{msg}</div>}
      </form>
    </div>
  );
}