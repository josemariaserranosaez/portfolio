import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div className='mydiv'>
        <Head>
            <title>Jose Maria Serrano Saez - {pagina}</title>
            <meta name='description' content='Portfolio de Jose Maria Serrano Saez'/>
        </Head>
        <Header />
        
        {children}
        
        <Footer/>
    </div>
  )
}

export default Layout
