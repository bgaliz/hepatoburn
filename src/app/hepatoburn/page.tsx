import Link from "next/link";
import { ButtonCTA } from "@/components/button/button.component";

export default function HepatoburnPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-start">
      {/* Seção de Produtos */}
      <section className="w-full max-w-3xl py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-700">HEPATOBURN</h1>
        <p className="mb-6 text-lg text-gray-700">O suplemento natural para saúde do fígado e emagrecimento saudável.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
          <div className="border rounded-lg p-6 shadow-md flex-1">
            <img src="/public/file.svg" alt="Produto 1" className="mx-auto mb-4 w-32 h-32 object-contain" />
            <h2 className="text-xl font-semibold mb-2">HEPATOBURN 1 Frasco</h2>
            <p className="mb-2 text-green-600 font-bold text-2xl">R$ 149,90</p>
            <p className="mb-4 text-sm text-gray-500">Em até 12x no cartão</p>
            <Link href="/hepatoburn/obrigado?produto=1">
              <ButtonCTA />
            </Link>
          </div>
          <div className="border rounded-lg p-6 shadow-md flex-1">
            <img src="/public/file.svg" alt="Produto 2" className="mx-auto mb-4 w-32 h-32 object-contain" />
            <h2 className="text-xl font-semibold mb-2">HEPATOBURN 3 Frascos</h2>
            <p className="mb-2 text-green-600 font-bold text-2xl">R$ 399,90</p>
            <p className="mb-4 text-sm text-gray-500">Em até 12x no cartão</p>
            <Link href="/hepatoburn/obrigado?produto=3">
              <ButtonCTA />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Testemunhas */}
      <section className="w-full max-w-3xl py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Depoimentos de Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center border rounded-lg p-6 shadow-md">
            <img src="/public/globe.svg" alt="Cliente 1" className="mb-4 w-20 h-20 rounded-full object-cover" />
            <p className="text-gray-700 mb-2">"HEPATOBURN mudou minha vida! Me sinto mais leve e saudável."</p>
            <span className="text-sm text-gray-500">Maria S.</span>
          </div>
          <div className="flex flex-col items-center border rounded-lg p-6 shadow-md">
            <img src="/public/window.svg" alt="Cliente 2" className="mb-4 w-20 h-20 rounded-full object-cover" />
            <p className="text-gray-700 mb-2">"Resultados rápidos e sem efeitos colaterais. Recomendo!"</p>
            <span className="text-sm text-gray-500">João P.</span>
          </div>
        </div>
      </section>

      {/* Footer com Disclaimer */}
      <footer className="w-full bg-gray-100 py-6 mt-12 text-center border-t">
        <p className="text-xs text-gray-500 mb-2">Este produto é um suplemento alimentar. Consulte um médico antes de iniciar qualquer tratamento. Resultados podem variar.</p>
        <div className="flex justify-center gap-4 text-xs">
          <Link href="/privacidade" className="underline text-gray-600">Política de Privacidade</Link>
          <Link href="/termos" className="underline text-gray-600">Termos de Uso</Link>
        </div>
      </footer>
    </main>
  );
}
