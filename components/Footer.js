import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="contenedor">
            <div className={styles.barra}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/proyectos">proyectos</Link>
                    <Link href="/sobre">Sobre mi</Link>
                    <Link href="/contacto">Contacto</Link>
                </nav>
                <p className={styles.copyright}> Todos los derechos reservados</p>

            </div>
        </div>
      
    </footer>
  )
}

export default Footer
