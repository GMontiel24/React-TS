import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef<number>(1);

    const cargarUsuarios = async () => {
        try {
            const resp = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: paginaRef.current
                }
            });

            if (resp.data.data.length > 0) {
                setUsuarios(resp.data.data);
            } else {
                alert('No hay mas usuarios.');
            }

        } catch (err) {
            console.log(err)
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    useEffect(() => {
        cargarUsuarios();
    }, [])

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
