export const Depoiment = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl mt-18">Comentário dos Clientes</h1>
            <div className="flex flex-row justify-center gap-8 w-full max-w-6xl mt-12 justify-center">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 w-full md:w-1/2">
                <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Maria Souza</h4>
                <p className="text-gray-600 text-base">"O HepatoBurn mudou minha vida! Me sinto mais leve, com mais energia e minha pele está muito melhor. Recomendo para todos!"</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 w-full md:w-1/2">
                <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">João Pereira</h4>
                <p className="text-gray-600 text-base">"Depois que comecei a usar HepatoBurn, meu sono melhorou e sinto menos fome durante o dia. Produto excelente!"</p>
                </div>
            </div>
            </div>
        </div>
    )
}