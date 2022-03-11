import CargandoImagen from "../../assets/img/spinner.gif"
export const Loading = ({cargando})=>{
    return(
        <>
        {
            cargando ? 
            <div>
            <img src={CargandoImagen} alt="spinner"/>
            <h1>Cargando ... </h1> 
            </div>
            : null
        }
        
        </>
    )
}