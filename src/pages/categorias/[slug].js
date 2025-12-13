import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdCard from '../../components/AdCard';
export default function CategoriaPage() {
  const { query } = useRouter();
  const [ads, setAds] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    if (!query.slug) return;
    fetch(`/api/ads?category=${query.slug}`).then(r=>r.json()).then(setAds);
  }, [query.slug]);
  const filtered = ads.filter(a=> a.title.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">{query.slug}</h1>
        <input placeholder="Filtrar por serviço" value={filter} onChange={e=>setFilter(e.target.value)} className="bg-white rounded shadow-soft px-3 py-2"/>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filtered.map(ad => <AdCard ad={ad} key={ad.id} />)}
      </div>
    </div>
  );
}