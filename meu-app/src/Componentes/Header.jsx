import estilos from './Header.module.css';

export function Header(){
    return(
        <header>
            <div className={estilos.logo}>
                <h1>Sensores</h1>
            </div>
        </header>
    )
}