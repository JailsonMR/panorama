import Link from 'next/link';
export default function AdCard({ ad }) {
  const img = ad.images?.[0]?.url || '/placeholder.png';
  return (
    <Link href={`/anuncio/${ad.id}`} className="card block">
      <img src={img} alt={ad.title} className="w-full h-44 object-cover rounded-t-xl"/>
      <div className="p-4">
        <h3 className="font-semibold">{ad.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{ad.description}</p>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-primary font-semibold">R$ {Number(ad.price).toFixed(2)}</span>
          <span className="text-gray-500">{ad.neighborhood}</span>
        </div>
      </div>
    </Link>
  );
}