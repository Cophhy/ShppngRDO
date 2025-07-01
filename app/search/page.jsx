// app/search/page.jsx
'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // Aqui: fetch ou filtro local com `query`
  return (
    <div className="p-6">
      <h1 className="h2">Resultados para "{query}"</h1>
      {/* Mapear itens filtrados */}
    </div>
  );
}
