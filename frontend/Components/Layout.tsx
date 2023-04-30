
//import Footer from './footer'
//import Banner from './Banner'
//import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
       
      
      <main>{children}</main>
     
    </>
  )
}