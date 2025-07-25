import Link from "next/link";
import { FunctionComponent } from "react";

type ButtonCTAProps = {
    utm?: string; 
}
export const ButtonCTA: FunctionComponent<ButtonCTAProps> = ({
    utm
}) => (
    <Link href={`/hepatoburn/obrigado${utm ? `?${utm}` : ''}`}>
        <button
            className="cursor-pointer text-2xl bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-lg shadow-lg transition-colors duration-200 animate-pulse"
            type="button"
        >
            Comprar Agora
        </button>
    </Link>
);