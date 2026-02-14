import { useState } from "react";
import type { TipoConvidado } from "../../types/tipoConvidado";
import ConfirmadosAtualizar from "../ConfirmadosAtualizar/ConfirmadosAtualizar";

export default function CardConfirmados(props: {convidado: TipoConvidado}){

    const [openConvidadoAtualizar, setOpenConvidadoAtualizar] = useState(false);


    return(
        <div className="text-white bg-[var(--color-2)] flex flex-col rounded-lg border-2 border-[var(--color-2)] w-full md:w-60 items-center rounded-lg border-2 border-[var(--color-2)] p-6">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="m-2">
                <p className="text-sm"> Status: <span className="text-white font-medium">{props.convidado.status}</span></p>
                <p className="text-sm">Id do convidado: <span className="text-white font-medium">{props.convidado.idConvidado}</span></p>
                <p className="text-sm">Id do convite: <span className="text-white font-medium">{props.convidado.idConvite}</span></p>
            </div>

            <div className="text-white mt-5 flex justify-center gap-5 md:gap-8">
                    <button className="cursor-pointer rounded-xl border-2 border-white font-medium w-20 md:w-25 h-13 md:h-10" onClick={() => setOpenConvidadoAtualizar(true)}>Atualizar</button>

                    <ConfirmadosAtualizar open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)}> </ConfirmadosAtualizar>
            </div>
        </div>
    );
}