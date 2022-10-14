
export const TiposBasicos = () => {

    const nombre: string = 'German';
    const edad: number = 26;

    const poderes: string[] = ['Volar', 'Teletransportacion'];

    return (
        <>
            <h3>TiposBasicos</h3>
            {nombre} , {edad}
            <br />
            {
                poderes.join(',')
            }
        </>
    )
}
