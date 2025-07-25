import Image from "next/image";
import HepatoBurnImage from "@/assets/img/HepatoBurn-1.png";

const ProductsPage = () => {
    return (
        <div className="flex flex-col md:flex-row relative mx-auto my-10 p-6 rounded-xl shadow-lg max-w-4xl w-full items-center">
            <Image
                width={250}
                height={250}
                src={HepatoBurnImage}
                alt="HEPATOBURN"
                className="mx-auto mb-6 md:mb-0 md:mr-6 flex-shrink-0"
            />
            <div className="md:ml-6 flex flex-col gap-4 justify-center w-full">
                <h2 className="text-3xl font-bold text-center md:text-left">HepatoBurn</h2>
                <p className="text-gray-400 text-lg text-center md:text-left">
                    É o único produto no mundo que contém nosso exclusivo Complexo de Purificação e Queima de Gordura do Fígado, cada um uma mistura única de plantas mediterrâneas e super nutrientes projetados para otimizar rapidamente a função hepática.
                </p>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-green-700 text-center md:text-left">Além disso, você também pode esperar:</h3>
                    <ul className="list-none space-y-2 text-base text-gray-200">
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Mais energia</li>
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Aparência mais saudável da pele</li>
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Sono melhor</li>
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Menos fome</li>
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Mente mais clara</li>
                        <li className="flex items-center justify-center md:justify-start"><span className="text-yellow-400 mr-2">✔️</span> Suporte à saúde ideal</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductsPage;