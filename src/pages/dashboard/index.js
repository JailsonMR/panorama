import Protected from '../../components/Protected';
import { useEffect, useState } from 'react';
import StatsCard from '../../components/StatsCard';
import Link from 'next/link';

export default function Dashboard() {
  const [me,setMe]=useState(null);
  const [ads,setAds]=useState([]);
  useEffect(()=>{ fetch('/api/auth/me').then(r=>r.json()).then(setMe); fetch('/api/ads?mine=1').then(r=>r.json()).then(setAds); },[]);
  const views = ads.reduce((s,a)=>s+a.views,0);
  return (
    <Protected>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Olá, {me?.user?.name}</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <StatsCard title="Meus anúncios" value={ads.length}/>
          <StatsCard title="Visualizações totais" value={views}/>
          <StatsCard title="Aprovados" value={ads.filter(a=>a.status==='APPROVED').length}/>
        </div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-xl font-semibold">Seus anúncios</h2>
          <Link href="/dashboard/anuncios/novo" className="px-4 py-2 bg-primary text-white rounded">Criar novo</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {ads.map(a=>(
            <div className="card" key={a.id}>
              <img src={a.images?.[0]?.url||'/placeholder.png'} className="w-full h-40 object-cover rounded-t-xl"/>
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="font-semibold">{a.title}</div>
                  <span className={`text-xs ${a.status==='APPROVED'?'text-green-600':'text-gray-500'}`}>{a.status}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Link href={`/dashboard/anuncios/${a.id}`} className="text-primary text-sm">Editar</Link>
                  <button className="text-red-600 text-sm" onClick={async ()=>{
                    if(confirm('Excluir anúncio?')){ await fetch(`/api/ads/${a.id}`,{method:'DELETE'}); location.reload(); }
                  }}>Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Protected>
  );
}