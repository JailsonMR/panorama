import Link from 'next/link';
import { CATEGORIES } from '../lib/constants';
export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-4">Categorias</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {CATEGORIES.map(c => (
          <Link key={c.slug} href={`/categorias/${c.slug}`} className="card p-4 text-center hover:-translate-y-0.5">
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}