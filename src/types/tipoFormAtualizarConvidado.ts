import type { UseFormRegister } from "react-hook-form";
import type { TipoAtualizarConvidado } from "./tipoAtualizarConvidado";

export type TipoPropsFormAtualizarConvidado = { 
    register: UseFormRegister<TipoAtualizarConvidado>;
    onSubmit: () => void;  
}
 