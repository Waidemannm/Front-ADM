import type { UseFormRegister } from "react-hook-form";
import type { TipoDeletarConvidado } from "./tipoDeletarConvidado";

export type TipoPropsFormDeletarConvidado = { 
    register: UseFormRegister<TipoDeletarConvidado>;
    onSubmit: () => void;  
}
 