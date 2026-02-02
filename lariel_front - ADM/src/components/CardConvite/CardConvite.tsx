import type { TipoConvite } from "../../types/tipoConvite";

export default function CardConvite(props: {convite: TipoConvite}){
    return(
        <div className="">
            <h1 className="">Convite {props.convite.nomeConvite}</h1>
            <p className="">Id do convite: {props.convite.idConvite}</p>
        </div>
    );
}