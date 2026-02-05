import type { TipoConvidado } from "../../types/tipoConvidado";

export default function CardConvidado(props: {convidado: TipoConvidado}){
    return(
        <div className="text-white bg-gradient-to-br from-[var(--color-2)] via-blue-300 to-[var(--color-2)] flex flex-col items-center rounded-lg border-2 border-[var(--color-2)] p-6 ">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="m-2">
                <p className="text-[var(--color-2)] text-sm"> Status: <span className="text-white font-medium">{props.convidado.status}</span></p>
                <p className="text-[var(--color-2)] text-sm">Id do convidado: <span className="text-white font-medium">{props.convidado.idConvidado}</span></p>
                <p className="text-[var(--color-2)] text-sm">Id do convite: <span className="text-white font-medium">{props.convidado.idConvite}</span></p>
            </div>
        </div>
    );
}