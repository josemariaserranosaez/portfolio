import styles from '../styles/Sobre.module.css'
import Layout from '../components/Layout'

const sobre = () => {
  return (
    
    <Layout pagina='Sobre mi'>
      <main className={styles.contenedor}>
        <h2 className='heading'>Sobre mi</h2>
        <p>De muy jovencito mi padre trajo un ordenador que habían retirado de la empresa, un 386, con él comenzó mi afición por los juegos de ordenador, también me trajo un libro de programación con el que hice un cuadrado que se movía por la pantalla.</p>
        <p>Cuando terminé el bachillerato cientifico-técnico, entré a estudiar <span>Sistemas de telecomunicaciones e informáticos</span>, donde aprendí <span>C++</span> y <span>Visual Basic</span> y donde le cogí el gusto a la <span>programación orientada a objetos.</span></p>
        <p>Aunque ya había aprendido a trabajar en los viñedos de mi familia desde muy pequeño, mi primer trabajo real fue en un taller mecánico durante los veranos para sacarme un dinero para mis gastos.</p>
        <p>Después de terminar el ciclo, hacer las prácticas en Canal 9 y trabajar durante la época de la visita del Papa y del accidente del metro y puesto que a mi alrededor había mucho músico, decidí hacer el ciclo de sonido, y los veranos trabajé de montador de equipos audiovisuales.</p>
        <p>En 2010 decidimos mi padre, mi hermano y yo montar nuestra propia empresa, un taller de neumáticos y mecánica rápida. yo me encargaba de la administración a la vez que de ayudar en taller.</p>
        <p>Desde esa fecha hasta ahora me apunté a diferentes cursillos para autónomos, uno de ellos fue de <span>creación de páginas web con Dreamweaver</span>, donde aprendí <span>HTML</span>, <span>CSS</span> y <span>JavaScript.</span></p>
        <p>Unos años más tarde descubrí <span>Arduino</span>, y encontré una página en la que guiaban para hacer un robot, el robot se programaba con Arduino pero para manejarlo desde el móvil usaban una aplicación de pago de programación por módulos, puesto que era como afición se me ocurrió aprender a hacerla en <span>Android Studio</span>, y lo conseguí.</p>
        <p>Hace un par de años aprendí a manejar <span>WordPress</span> con el que he hecho un par de páginas básicas, una de neumáticos con un converson en <span>JavaScript</span> y otra de resistencias también con un conversor hecho en <span>JavaScript</span>.</p>
        <p>Con la jubilación de mi padre, he visto la oportunidad de enfocar mi vida al desarrollo y así convertir mi afición en mi trabajo.</p>
        <p>Lo último que he hecho ha sido un curso de <span>Python</span> y otro de <span>React</span> y ahora el ciclo de <span>desarrollo de aplicaciones multiplataforma</span>. </p>
      </main>
    </Layout>
    
  )
}

export default sobre
