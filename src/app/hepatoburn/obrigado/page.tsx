"use client";

import { useSearchParams } from "next/navigation";

export default function ObrigadoPage() {
  const searchParams = useSearchParams();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Obrigado pela sua compra!</h1>
      <p className="mb-6 text-lg text-gray-700">Sua compra foi realizada com sucesso. Em breve você receberá mais informações no seu e-mail.</p>
      <div className="text-sm text-gray-500 mb-4">
        <span>Parâmetros UTM capturados:</span>
        <ul>
          {searchParams &&
            Array.from(searchParams.entries()).map(([key]) => (
              <li key={key} className="flex items-center gap-2">
                <span className="font-semibold">{key}</span>
              </li>
            ))}
        </ul>
      </div>
      {/* Repasse de UTMs para checkout ou outras páginas pode ser feito via query string */}
    </main>
  );
}
