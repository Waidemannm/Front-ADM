import type { UseFormRegister } from "react-hook-form";
import type { TipoAtualizarConvite } from "./tipoAtualizarConvite";

export type TipoPropsFormAtualizarConvite = { 
    register: UseFormRegister<TipoAtualizarConvite>;
    onSubmit: () => void;  
}
 