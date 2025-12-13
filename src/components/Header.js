import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [me, setMe] = useState(null);
  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(setMe).catch(()=>{});
  }, []);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/"><div className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.svg" alt="logo" className="w-8 h-8"/>
          <span className="font-semibold text-ink">BairroBiz</span>
        </div></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/categorias">Categorias</Link>
          <a href="#contato">Contato</a>
          {me?.user ? (
            <>
              {me.user.role === 'ADMIN' && <Link href="/admin">Admin</Link>}
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={async ()=>{ await fetch('/api/auth/logout',{method:'POST'}); location.href='/' }} className="text-primary">Sair</button>
            </>
          ) : (
            <Link href="/login" className="px-3 py-1 rounded bg-primary text-white">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}