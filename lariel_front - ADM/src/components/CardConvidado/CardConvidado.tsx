import { useState } from "react";
import type { TipoConvidado } from "../../types/tipoConvidado";
import ConvidadoAtualizar from "../ConvidadoAtualizar/ConvidadoAtualizar";
import ConvidadoDeletar from "../ConvidadoDeletar/ConvidadoDeletar";

export default function CardConvidado(props: {convidado: TipoConvidado}){

    const [openConvidadoAtualizar, setOpenConvidadoAtualizar] = useState(false);
    const [openConvidadoDeletar, setConvidadoOpenDeletar] = useState(false);

    return(
        <div className="text-white bg-[var(--color-2)] flex flex-col rounded-lg border-2 border-[var(--color-2)] w-full md:w-80 items-center rounded-lg border-2 border-[var(--color-2)] p-6">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="mt-3 text-white">
                <p className="text-sm"> Status: <span className="font-medium">{props.convidado.status}</span></p>
                <p className="text-sm">Id do convidado: <span className="font-medium">{props.convidado.idConvidado}</span></p>
                <p className="text-sm">Id do convite: <span className="font-medium">{props.convidado.idConvite}</span></p>
            </div>

            <div className="mt-8 flex justify-center gap-5 md:gap-8">
                    <button className="text-white cursor-pointer rounded-xl border-2 border-white font-medium w-20 md:w-25 h-13 md:h-10" onClick={() => setOpenConvidadoAtualizar(true)}>Atualizar</button>

                    <ConvidadoAtualizar open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)}> </ConvidadoAtualizar>
                    
                    <button className="text-[var(--color-2)] bg-red-400 cursor-pointer rounded-xl border-2 border-red-400 font-medium w-20 md:w-25 h-13 md:h-10" onClick={() => setConvidadoOpenDeletar(true)}>Deletar</button>

                    <ConvidadoDeletar open={openConvidadoDeletar} onClose={() => setConvidadoOpenDeletar(false)}> </ConvidadoDeletar>

            </div>
        </div>
    );
}
