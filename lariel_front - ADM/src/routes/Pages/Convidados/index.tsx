import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { useEffect, useState } from "react";
import type { TipoConvidado } from "../../../types/tipoConvidado";
import CardConvidado from "../../../components/CardConvidado/CardConvidado";
import { FiSearch } from "react-icons/fi";
import ConviteAtualizar from "../../../components/ConviteAtualizar/ConviteAtualizar";
import ConviteDeletar from "../../../components/ConviteDeletar/ConviteDeletar";
import ConvidadoSalvar from "../../../components/ConvidadoSalvar /ConvidadoAtualizar";

const URL_API = import.meta.env.VITE_URL_API

export default function Convidados(){

    const [convidados, setConvidado] = useState<TipoConvidado[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { idConvite } = useParams<{ idConvite: string }>();
    const [busca, setBusca] = useState<string>("");

    const [openConviteAtualizar, setOpenConviteAtualizar] = useState(false);
    const [openConviteDeletar, setConviteOpenDeletar] = useState(false);
    const [openConvidadoSalvar, setOpenConvidadoSalvar] = useState(false);

    useEffect(() => {
        const fetchConvites = async () => {
            try {
                const response = await fetch(`${URL_API}/convidados/convidados_de/${idConvite}`);
                if (!response.ok) {
                throw new Error('Falha ao buscar os dados. O servidor está online?');
                }
                const data: TipoConvidado[] = await response.json();
                setConvidado(data);
            } catch (err) {
                if (err instanceof Error) {
                setError(err.message);
                } else {
                setError('Um erro inesperado ocorreu.');
                }
            } finally {
                setLoading(false);
            }
            };
            fetchConvites();
        }, []);
        
        if (loading) {
            return(
                <main className="max-w-7xl mx-auto leading-relaxed p-8">
                    <p className="text-center text-gray-600">Carregando convidados...</p>
                </main>
            );
        }

        if (error) {
            return (
                <main className="max-w-7xl mx-auto leading-relaxed p-8">
                    <div className="text-center text-red-700 bg-red-100 p-4 rounded-lg">
                        <p>Erro: {error}</p>
                    </div>
                </main>
            );
        }
    
        if (convidados.length === 0) {
            return (
                <main className="max-w-7xl mx-auto leading-relaxed p-8">
                    <p className="text-center text-gray-500">Nenhum convite encontrado.</p>
                </main>
                );
        }
    
        const convidadosFiltrados = convidados.filter((convidado) =>
            convidado.nomeConvidado.toLowerCase().includes(busca.toLowerCase())
        );
        

    return(
        <main className="max-w-7xl mx-auto leading-relaxed p-8 text-[var(--color-font-black)]">

           <Link to="/convites" className="fixed top-25 left-8 z-50 w-12 h-12  flex items-center justify-center rounded-full border-2 border-white bg-[var(--color-2)] backdrop-blur-sm text-white shadow-md transition-all duration-300  hover:scale-110 active:scale-95"><FiArrowLeft className="text-lg"/></Link>

           <h1 className="text-2xl text-[var(--color-font-black)] font-medium text-center mb-6">Convidados</h1>
            <div className="flex justify-center mb-8 gap-5">
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input className="w-full pl-12 pr-4 py-3 border-1 border-[var(--color-font-black)] rounded-xl outline-none"
                    placeholder="Pesquise o nome do convidado"
                    type="text"
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                    />
                </div>

                <button className="bg-green-400 cursor-pointer rounded-xl border-2 border-green-400 font-medium w-25 h-13 p-2" onClick={() => setOpenConvidadoSalvar(true)}>Adicionar</button>

                <ConvidadoSalvar open={openConvidadoSalvar} onClose={() => setOpenConvidadoSalvar(false)}> 
                    S
                </ConvidadoSalvar>

            </div>
            

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10">

                {convidadosFiltrados.map((convidado) => (
                    <CardConvidado convidado={convidado} />
                ))}        
            </div>

            <div className="text-[var(--color-2)] mt-10 flex justify-center gap-8 mt-5">
                    <button className="cursor-pointer rounded-xl border-2 border-[var(--color-2)] font-medium w-25 h-13" onClick={() => setOpenConviteAtualizar(true)}>Atualizar</button>

                    <ConviteAtualizar open={openConviteAtualizar} onClose={() => setOpenConviteAtualizar(false)}>
                        A 
                    </ConviteAtualizar>
                    
                    <button className="bg-red-400 cursor-pointer rounded-xl border-2 border-red-400 font-medium w-25 h-13" onClick={() => setConviteOpenDeletar(true)}>Deletar</button>

                    <ConviteDeletar open={openConviteDeletar} onClose={() => setConviteOpenDeletar(false)}> 
                        D 
                    </ConviteDeletar>

                    
            </div>

            {convidadosFiltrados.length === 0 && (
                <p className="text-center text-gray-500 mt-6">
                Nenhum convite encontrado para “{busca}”.
                </p>
            )}
        </main>
    );
}