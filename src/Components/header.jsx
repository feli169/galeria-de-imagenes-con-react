const Titulo = ({title = 'Default title.'}) =>{
    return(
        <h1 className="text-center mt-4">
            {title}
        </h1>
    )
}

export default Titulo;