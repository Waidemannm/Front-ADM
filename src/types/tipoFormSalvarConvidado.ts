import type { UseFormRegister } from "react-hook-form";
import type { TipoSalvarConvidado } from "./tipoSalvarConvidado";

export type TipoPropsFormSalvarConvidado = { 
    register: UseFormRegister<TipoSalvarConvidado>;
    onSubmit: () => void;  
}
 