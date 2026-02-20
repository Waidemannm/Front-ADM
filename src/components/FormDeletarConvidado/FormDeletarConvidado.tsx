import type { TipoPropsFormDeletarConvidado } from "../../types/tipoFormDeletarConvidado";

export default function FormDeletarConvidado({register, onSubmit}: TipoPropsFormDeletarConvidado){
    return(
        <div>
            <form className="text-[var(--color-font-black)]" onSubmit={onSubmit}>
                <div className="m-5">
                    <label className="">Id do convidado: </label>
                    <input placeholder="ex: 18" className="w-full p-2 border-1 border-[var(--color-font-black)] mt-2 rounded-xl outline-none" type="number" {...register("idConvidado", { required: true, maxLength: 3})} />
                </div>
                <div className="mt-5">
                    <div className="flex justify-center">
                        <button className="bg-[var(--color-2)] text-white cursor-pointer rounded-xl border-2 border-[var(--color-2] font-medium w-20 md:w-25 h-13 md:h-12" type="submit">Deletar</button>
                    </div>
                </div>
            </form>
        </div>
    ); 
}