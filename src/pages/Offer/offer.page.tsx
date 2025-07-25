import Image from "next/image";
import HepatoBurn1 from "@/assets/img/HepatoBurn-1.png";
import HepatoBurn2 from "@/assets/img/HepatoBurn-2.png";
import HepatoBurn3 from "@/assets/img/HepatoBurn-3.png";
import { ButtonCTA } from "@/components/button/button.component";

const HepatoBurnOffer = () => {
  return (
    <section className="bg-[#171717] flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl font-bold text-red-700 mb-2 text-center">OFERTA ESPECIAL DE LANÇAMENTO!</h2>
      <p className="text-2xl font-semibold text-white mb-12 text-center">Escolha sua melhor opção:</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-5xl">

        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/3">
          <span className="text-2xl font-bold text-red-700 mb-2">1 FRASCO</span>
          <span className="text-base text-gray-600 mb-4">60 dias de uso</span>
          <Image src={HepatoBurn1} alt="2 Frascos HepatoBurn" width={120} height={120} className="mb-4" />
          <span className="text-4xl font-bold text-gray-800 mb-2">R$ 79</span>
          <span className="text-base text-gray-500 mb-4">por frasco</span>
          <ButtonCTA utm="produto-1" />
          <span className="mt-4 text-sm text-gray-500">R$ 158 + Frete</span>
        </div>

        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/3 border-4 border-yellow-400">
          <span className="text-2xl font-bold text-red-700 mb-2">6 FRASCOS</span>
          <span className="text-base text-gray-600 mb-4">180 dias de uso</span>
          <Image src={HepatoBurn3} alt="6 Frascos HepatoBurn" width={180} height={120} className="mb-7" />
          <span className="text-4xl font-bold text-gray-800 mb-2">R$ 49</span>
          <span className="text-base text-gray-500 mb-4">por frasco</span>
          <ButtonCTA utm="produto-2"/>
          <span className="mt-4 text-sm text-green-700 font-bold">R$ 294 + <span className="text-red-700">Frete Grátis</span></span>
        </div>

        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/3">
          <span className="text-2xl font-bold text-red-700 mb-2">3 FRASCOS</span>
          <span className="text-base text-gray-600 mb-4">90 dias de uso</span>
          <Image src={HepatoBurn2} alt="3 Frascos HepatoBurn" width={150} height={120} className="mb-12" />
          <span className="text-4xl font-bold text-gray-800 mb-2">R$ 69</span>
          <span className="text-base text-gray-500 mb-4">por frasco</span>
          <ButtonCTA utm="produto-3"/>
          <span className="mt-4 text-sm text-gray-500">R$ 207 + Frete</span>
        </div>
      </div>
    </section>
  );
}

export default HepatoBurnOffer;