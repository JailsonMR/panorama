import { useEffect, useState } from 'react';
export default function Protected({ roles=['USER','ADMIN'], children }) {
  const [state, setState] = useState({loading:true, ok:false});
  useEffect(() => {
    fetch('/api/auth/me').then(r=>r.json()).then(d=>{
      const ok = d?.user && roles.includes(d.user.role);
      setState({loading:false, ok});
      if(!ok) window.location.href = '/login';
    }).catch(()=> setState({loading:false, ok:false}));
  }, []);
  if (state.loading) return <div className="max-w-6xl mx-auto px-4 py-10">Carregando...</div>;
  if (!state.ok) return null;
  return children;
}