import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>
            <h1 className={styles.titulo}>Jose Maria Serrano Saez</h1>
        
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/proyectos">proyectos</Link>
                <Link href="/sobre">Sobre mi</Link>
                <Link href="/contacto">Contacto</Link>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
