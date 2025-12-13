import Link from 'next/link';
export default function Banner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Divulgue seu negócio no seu bairro</h1>
          <p className="mt-3 text-gray-600">Atraia clientes próximos com um anúncio bonito e eficaz.</p>
          <Link href="/login" className="inline-block mt-6 px-5 py-3 bg-primary text-white rounded-lg">Começar agora</Link>
        </div>
        <img src="/placeholder.png" className="w-full md:w-80 rounded-xl" alt="banner" />
      </div>
    </section>
  );
}