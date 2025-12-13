import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import AdCard from '../components/AdCard';
import CategoryGrid from '../components/CategoryGrid';

export default function Home() {
  const [ads, setAds] = useState([]);
  const [q, setQ] = useState('');
  async function load() {
    const res = await fetch(`/api/ads?featured=1&q=${encodeURIComponent(q)}`);
    setAds(await res.json());
  }
  useEffect(()=>{ load(); }, []);
  return (
    <>
      <Banner />
      <SearchBar onSearch={(val)=>{ setQ(val); fetch(`/api/ads?q=${encodeURIComponent(val)}`).then(r=>r.json()).then(setAds); }}/>
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-xl font-semibold mb-4">Destaques</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ads.map(ad => <AdCard ad={ad} key={ad.id} />)}
        </div>
      </section>
      <CategoryGrid />
    </>
  );
}