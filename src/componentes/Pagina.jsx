export function Pagina (props) {
    return (
        <div className="flex flex-col w-full h-full">
            <header className=" p-3">
                <h1 className="text-xl font-black">{props.titulo}</h1>
                <h2 className="text-sm">{props.subtitulo}</h2>
            </header>
            <main className="flex flex-col p-3">
                {props.children}
            </main>
        </div>
    )
}