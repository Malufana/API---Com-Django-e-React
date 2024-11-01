import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){
    return(
        <nav className={estilos.navbar}>
            <a href="">Temperatura</a>
            <a href="">Umidade</a> 
            <a href="">Luminosidade</a>
            <a href="">Sensores</a>
            <a href="">Contador</a>
        </nav>
    )
}