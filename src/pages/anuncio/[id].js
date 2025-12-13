import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdView() {
  const { query } = useRouter();
  const [ad, setAd] = useState(null);
  useEffect(() => {
    if (!query.id) return;
    fetch(`/api/ads/${query.id}`).then(r=>r.json()).then(setAd);
    fetch(`/api/ads/${query.id}/view`, { method: 'POST' }); // contabiliza view
  }, [query.id]);
  if (!ad) return <div className="max-w-6xl mx-auto px-4 py-10">Carregando...</div>;
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-3 gap-2 p-3">
            {ad.images?.map((img)=>(
              <img key={img.id} src={img.url} className="w-full h-28 object-cover rounded"/>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h1 className="text-2xl font-bold">{ad.title}</h1>
          <div className="text-primary text-xl font-semibold mt-2">R$ {Number(ad.price).toFixed(2)}</div>
          <div className="text-gray-600 mt-1">{ad.neighborhood} • {ad.category?.name}</div>
          <p className="mt-4">{ad.description}</p>
          <div className="mt-4 text-sm text-gray-600">Horários: {ad.hours}</div>
          <a target="_blank" rel="noreferrer" href={`https://wa.me/${ad.contactWhatsApp.replace(/\D/g,'')}`} className="inline-block mt-6 px-5 py-3 bg-green-600 text-white rounded">Falar no WhatsApp</a>
          <div className="text-xs text-gray-400 mt-3">Visualizações: {ad.views}</div>
        </div>
      </div>
    </div>
  );
}