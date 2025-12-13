import { useState } from 'react';
export default function Recuperar() {
  const [email,setEmail]=useState(''); const [msg,setMsg]=useState('');
  async function submit(e){ e.preventDefault();
    const r = await fetch('/api/auth/request-reset',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email})});
    const d = await r.json(); setMsg(d.message || 'Se existir conta, enviaremos instruções.');
  }
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Recuperar senha</h1>
      <form onSubmit={submit} className="card p-6 space-y-3">
        <input placeholder="Seu email" value={email} onChange={e=>setEmail(e.target.value)} className="bg-soft rounded px-3 py-2"/>
        <button className="bg-primary text-white rounded px-4 py-2">Enviar</button>
        {msg && <div className="text-sm text-gray-700">{msg}</div>}
      </form>
    </div>
  );
}