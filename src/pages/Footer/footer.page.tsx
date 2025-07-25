import Link from "next/link"

export const FooterPage = () => {
    return (
        <footer className="w-full bg-gray-200 py-6 mt-12 text-center border-t">
            <p className="text-xs text-gray-500 mb-2">Este produto é um suplemento alimentar. Consulte um médico antes de iniciar qualquer tratamento. Resultados podem variar.</p>
            <div className="flex justify-center gap-4 text-xs">
                <Link href="https://www.termsfeed.com/live/a3641b63-c772-4c4f-af3e-e36c87c90bfe" className="underline text-gray-600">Política de Privacidade</Link>
                <Link href="https://www.termsfeed.com/live/32600327-4631-4399-ba99-484e0eaec906" className="underline text-gray-600">Termos de Uso</Link>
            </div>
        </footer>
    )
}