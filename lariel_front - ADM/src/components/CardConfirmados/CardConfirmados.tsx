import { useState } from "react";
import type { TipoConvidado } from "../../types/tipoConvidado";
import ConfirmadosAtualizar from "../ConfirmadosAtualizar/ConfirmadosAtualizar";

export default function CardConfirmados(props: {convidado: TipoConvidado}){

    const [openConvidadoAtualizar, setOpenConvidadoAtualizar] = useState(false);


    return(
        <div className="text-white bg-gradient-to-br from-[var(--color-2)] via-blue-300 to-[var(--color-2)] flex flex-col items-center rounded-lg border-2 border-[var(--color-2)] p-6 ">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="m-2">
                <p className="text-[var(--color-2)] text-sm"> Status: <span className="text-white font-medium">{props.convidado.status}</span></p>
                <p className="text-[var(--color-2)] text-sm">Id do convidado: <span className="text-white font-medium">{props.convidado.idConvidado}</span></p>
                <p className="text-[var(--color-2)] text-sm">Id do convite: <span className="text-white font-medium">{props.convidado.idConvite}</span></p>
            </div>

            <div className="text-[var(--color-2)] mt-10 flex justify-center gap-5 md:gap-8 mt-5">
                    <button className="cursor-pointer rounded-xl border-2 border-[var(--color-2)] font-medium w-20 md:w-25 h-13 md:h-10" onClick={() => setOpenConvidadoAtualizar(true)}>Atualizar</button>

                    <ConfirmadosAtualizar open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)}> </ConfirmadosAtualizar>
            </div>
        </div>
    );
}