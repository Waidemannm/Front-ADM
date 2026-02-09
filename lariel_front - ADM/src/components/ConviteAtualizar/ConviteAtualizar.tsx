import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { TipoAtualizarConvite } from "../../types/tipoAtualizarConvite";
import FormAtualizarConvite from "../FormAtualizarConvite/FormAtualizarConvite";

const URL_API = import.meta.env.VITE_URL_API;

export default function ConviteAtualizar({open,  onClose, children, }: {open: boolean; onClose: () => void; children: React.ReactNode; }){

    const { idConvite } = useParams<{ idConvite: string }>();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<TipoAtualizarConvite>();
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = handleSubmit(async (data) => {
        try{
            setLoading(true);
            const response = await fetch(`${URL_API}/convites/${idConvite}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Falha ao atualizar dados do convite. O servidor está online?");
            }
            alert("Convite atualizado com sucesso!");
            navigate("/convites");
            window.location.reload();
            setLoading(false);
        } catch (err) {
        alert("Falha ao atualizar convite!");
        navigate("/convites");
        window.location.reload();
      } finally {
        setLoading(false);
      }
    });

    if (loading) {
        return (
        <main className="max-w-7xl mx-auto leading-relaxed">
            <div className={`fixed w-full inset-0 flex justify-center items-center transition-colors${open ? "visible bg-black/90" : "invisible"}`}><p className="text-center text-white mt-10">Atualizando convite...</p></div>
        </main>
        );
    }
   
    return(
        <div className={`fixed w-full inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/90" : "invisible"}`}>
           <div className={`bg-white text-[var(--color-font-black)] rounded-lg shadow p-6 transtion-all w-70 md:w-100 ${open ? "scale-100 opacity-100": "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation}>
            <button className="absolute top-2 right-2 text-[var(--color-font-black)]hover:text-gray-700 rounded-md text-blue-500 m-1" onClick={onClose}>Fechar</button> {children}
            <FormAtualizarConvite register={register} onSubmit={onSubmit}/>
           </div>
        </div>
    );
}