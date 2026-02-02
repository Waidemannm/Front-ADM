import { useEffect, useState } from "react";
import type { TipoConvite } from "../../../types/tipoConvite";
import CardConvite from "../../../components/CardConvite/CardConvite";

export default function Convites(){
    const [convites, setConvites] = useState<TipoConvite[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchConvites = async () => {
        try {
            const response = await fetch('http://localhost:8080/convites');
            if (!response.ok) {
            throw new Error('Falha ao buscar os dados. O servidor está online?');
            }
            const data: TipoConvite[] = await response.json();
            setConvites(data);
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
    
    const renderContent = () => {
        if (loading) {
        return <p className="text-center text-gray-600">Carregando convites...</p>;
        }
    
        if (error) {
        return (
            <div className="text-center text-red-700 bg-red-100 p-4 rounded-lg">
            <p>Erro: {error}</p>
            </div>
        );
        }
    
        if (convites.length === 0) {
        return <p className="text-center text-gray-500">Nenhum convite encontrado.</p>;
        }
    
        return convites.map((convite) => (
            <div key={convite.idConvite} className="">
                <CardConvite convite={convite}/>
            </div>
        ));
    };
    return(
        <main>
            <div className="">
                {renderContent()}
            </div>
        </main>
    );
}