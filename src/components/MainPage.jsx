import SearchInput from "./SearchInput.jsx"
// Pagina principal de la web, desde aquí el usuario puede hacer una busqueda inicial y se gestionan errores
export default function MainPage({code, func}){
    // console.log(code)
    return(
        <div className="mainContainer">
            <h1>Bienvenido</h1>
            <p>Prueba a buscar por ciudad o por codigo postal</p>
            <SearchInput searchFunc={func}/>
        </div>
    )
}