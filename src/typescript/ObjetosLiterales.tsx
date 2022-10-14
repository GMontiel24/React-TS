
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    provincia: string;
    domicilio: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'German',
        edad: 26,
        direccion: {
            pais: 'Argentina',
            provincia: 'Buenos Aires',
            domicilio: 'Elcano 1318'
        }
    };

    return (
        <>
            <h3>ObjetosLiterales</h3>
            <br />
            <code>
                <pre>
                    {JSON.stringify(persona, null, 3)}
                </pre>
            </code>
        </>
    )
}
