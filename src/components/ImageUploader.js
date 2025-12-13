import { useState } from 'react';
export default function ImageUploader({ value=[], onChange, max=5 }) {
  const [loading, setLoading] = useState(false);
  async function handleFiles(files) {
    setLoading(true);
    const urls = [...value];
    for (const f of files) {
      const fd = new FormData();
      fd.append('file', f);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      urls.push(data.url);
      if (urls.length >= max) break;
    }
    onChange(urls);
    setLoading(false);
  }
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {value.map((u,i)=>(
          <div key={i} className="relative">
            <img src={u} className="w-24 h-24 object-cover rounded"/>
            <button type="button" className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
              onClick={()=>onChange(value.filter((_,idx)=>idx!==i))}>×</button>
          </div>
        ))}
      </div>
      <input type="file" accept="image/*" multiple onChange={e=>handleFiles(e.target.files)} className="mt-2"/>
      {loading && <div className="text-sm text-gray-500 mt-1">Enviando...</div>}
    </div>
  );
}