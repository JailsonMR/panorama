import { useState } from 'react';
export default function Cadastro() {
  const [form,setForm]=useState({name:'',email:'',password:'',phoneWhatsApp:''});
  const [err,setErr]=useState(''); const [ok,setOk]=useState(false);
  async function submit(e){ e.preventDefault(); setErr('');
    const r = await fetch('/api/auth/register',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)});
    if(r.ok) setOk(true); else setErr((await r.json()).error||'Erro');
  }
  if(ok) return <div className="max-w-md mx-auto px-4 py-10">Conta criada! Faça login.</div>;
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Criar conta</h1>
      <form onSubmit={submit} className="card p-6 space-y-3">
        <input placeholder="Nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="bg-soft rounded px-3 py-2"/>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="bg-soft rounded px-3 py-2"/>
        <input placeholder="WhatsApp (+55...)" value={form.phoneWhatsApp} onChange={e=>setForm({...form,phoneWhatsApp:e.target.value})} className="bg-soft rounded px-3 py-2"/>
        <input placeholder="Senha" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="bg-soft rounded px-3 py-2"/>
        <button className="bg-primary text-white rounded px-4 py-2">Cadastrar</button>
        {err && <div className="text-red-600 text-sm">{err}</div>}
      </form>
    </div>
  );
}