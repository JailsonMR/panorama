export default function Footer() {
  return (
    <footer id="contato" className="mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">BairroBiz</h4>
          <p className="text-sm text-gray-600">Dê visibilidade ao seu pequeno negócio no seu bairro.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="/">Home</a></li>
            <li><a href="/categorias">Categorias</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Suporte</h4>
          <p className="text-sm text-gray-600">contato@bairrobiz.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">© {new Date().getFullYear()} BairroBiz</div>
    </footer>
  );
}