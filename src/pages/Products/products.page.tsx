import Image from "next/image";
import HepatoBurnImage from "@/assets/img/HepatoBurn-1.png";

const ProductsPage = () => {
    return (
        <div className="flex relative mx-auto my-10 p-6 rounded-xl shadow-lg">
            <Image width={300} height={300} src={HepatoBurnImage} alt="HEPATOBURN" />
            <div className="ml-6 flex flex-col gap-4 justify-center">
                <h2 className="text-3xl font-bold">HepatoBurn</h2>
                <p className="text-gray-400 text-lg">
                    É o único produto no mundo que contém nosso exclusivo Complexo de Purificação e Queima de Gordura do Fígado, cada um uma mistura única de plantas mediterrâneas e super nutrientes projetados para otimizar rapidamente a função hepática.
                </p>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">Além disso, você também pode esperar:</h3>
                    <ul className="list-none space-y-2 text-base text-gray-200">
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Mais energia</li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Aparência mais saudável da pele</li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Sono melhor</li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Menos fome</li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Mente mais clara</li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✔️</span> Suporte à saúde ideal</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductsPage;