import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export default function Convidados(){

    const location = useLocation();

    return(
        <main className="text-[var(--color-font-black)]">
           <Link to="/convites" className="fixed top-25 left-8 z-50 w-12 h-12  flex items-center justify-center rounded-full border-2 border-white bg-[var(--color-2)] backdrop-blur-sm text-white shadow-md transition-all duration-300  hover:scale-110 active:scale-95"><FiArrowLeft className="text-lg"/></Link>
        </main>
    );
}