import type { TipoConvite } from "../../types/tipoConvite";
import logo from "../../images/ImgIndex/logo.png";

export default function CardConvite(props: {convite: TipoConvite}){



    return(
        <div className="text-white bg-[var(--color-2)] hover:bg-[var(--color-3)] hover:scale-102 active:scale-90 transition-all duration-300 rounded-lg border-2 border-[var(--color-2)] p-6 w-full cursor-pointer">
            <div className="flex flex-col-reverse justify-between">
                <div className="flex  justify-center mt-5"><img src={logo}alt="Logo Larissa e Samuel" className="w-23 h-auto md:w-30" /></div>
                <hr className="border-t border-white mt-10" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl text-center">{props.convite.nomeConvite}</h1>
                    <p className="text-sm mb-5 text-center">e Família</p>
                    <hr className="border-t border-white mb-10 mt-2" />   
                    <p className="text-white font-medium text-center">Id do convite: {props.convite.idConvite}</p>
                </div>
            </div>        
        </div>
    );
}  


