
import type { TipoPropsFormSalvarConvidado } from "../../types/tipoFormSalvarConvidado";

export default function FormSalvarConvidado({register, onSubmit}: TipoPropsFormSalvarConvidado){

    return(
        <div>
            <form className="text-[var(--color-font-black)]" onSubmit={onSubmit}>
                <div className="m-5">
                    <label className="">Nome do convidado: </label>
                    <input placeholder="ex: João da Silva" className="w-full p-2 border-1 border-[var(--color-font-black)] mt-2 rounded-xl outline-none" type="text" {...register("nomeConvidado", { required: true, maxLength: 300})} />
                </div>
                <div className="m-5">
                    <label className="">Status "(P)endente, (C)onfirmado, (A)usente": </label>
                    <input placeholder="somente a inicial" className="w-full p-2 border-1 border-[var(--color-font-black)] mt-2 rounded-xl outline-none" type="text" {...register("status", { required: true, maxLength: 1, })}/>
                </div>
                <div className="mt-5">
                    <div className="flex justify-center">
                        <button className="bg-[var(--color-2)] text-white cursor-pointer rounded-xl border-2 border-[var(--color-2)] font-medium w-20 md:w-25 h-13 md:h-12" type="submit">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    ); 
}