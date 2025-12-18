import Protected from '../../../components/Protected';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ImageUploader from '../../../components/ImageUploader';
import FormField from '../../../components/FormField';

export default function EditAd() {
  const { query } = useRouter();
  const [cats,setCats]=useState([]);
  const [form,setForm]=useState(null);
  const [err,setErr]=useState('');
  useEffect(()=>{ fetch('/api/ads?meta=categories').then(r=>r.json()).then(setCats); },[]);
  useEffect(()=>{ if(query.id) fetch(`/api/ads/${query.id}`).then(r=>r.json()).then(ad=>{
    setForm({...ad, images: ad.images?.map(i=>i.url)||[]});
  }); },[query.id]);
  if(!form) return <div className="max-w-2xl mx-auto px-4 py-10">Carregando...</div>;
  async function submit(e){ e.preventDefault(); setErr('');
    const payload = {...form, price: String(form.price).replace(',','.')};
    payload.images = form.images.map(url=>({url}));
    const r = await fetch(`/api/ads/${form.id}`,{method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
    if(r.ok) window.location.href='/dashboard'; else setErr((await r.json()).error||'Erro'); }
  return (
    <Protected>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Editar anúncio</h1>
        <form onSubmit={submit} className="card p-6 space-y-4">
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <FormField label="Título"><input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="bg-soft rounded px-3 py-2 w-full"/></FormField>
          <FormField label="Descrição"><textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="bg-soft rounded px-3 py-2 w-full" rows={4}/></FormField>
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Preço (R$)"><input value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="bg-soft rounded px-3 py-2 w-full"/></FormField>
            <FormField label="Bairro"><input value={form.neighborhood} onChange={e=>setForm({...form,neighborhood:e.target.value})} className="bg-soft rounded px-3 py-2 w-full"/></FormField>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormField label="WhatsApp (+55...)"><input value={form.contactWhatsApp} onChange={e=>setForm({...form,contactWhatsApp:e.target.value})} className="bg-soft rounded px-3 py-2 w-full"/></FormField>
            <FormField label="Horários"><input value={form.hours} onChange={e=>setForm({...form,hours:e.target.value})} className="bg-soft rounded px-3 py-2 w-full"/></FormField>
          </div>
          <FormField label="Categoria">
            <select value={form.categoryId} onChange={e=>setForm({...form,categoryId:e.target.value})} className="bg-soft rounded px-3 py-2 w-full">
              <option value="">Selecione</option>
              {cats.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </FormField>
          <FormField label="Fotos">
            <ImageUploader value={form.images} onChange={v=>setForm({...form,images:v})} />
          </FormField>
          <button className="bg-primary text-white rounded px-4 py-2">Salvar</button>
        </form>
      </div>
    </Protected>
  );
}