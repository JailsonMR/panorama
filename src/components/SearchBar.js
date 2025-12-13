import { useState } from 'react';
export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-soft p-4 flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Busque por nome, categoria ou bairro" className="flex-1 outline-none"/>
        <button onClick={()=>onSearch(q)} className="px-4 py-2 bg-primary text-white rounded">Buscar</button>
      </div>
    </div>
  );
}