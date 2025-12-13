import Link from 'next/link';
import { CATEGORIES } from '../../lib/constants';
export default function Categorias() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Categorias</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {CATEGORIES.map(c => (
          <Link href={`/categorias/${c.slug}`} key={c.slug} className="card p-4 text-center">{c.name}</Link>
        ))}
      </div>
    </div>
  );
}