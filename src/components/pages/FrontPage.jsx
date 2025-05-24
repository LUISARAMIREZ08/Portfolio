import Header from '../organisms/Header'
import Start from '../organisms/Start'
import Tecnologies from '../organisms/Tecnologies'
import About from '../organisms/About'
import Training from '../organisms/Training'
import Contact from '../organisms/Contact'
import Footer from '../organisms/Footer'
import Projects from '../organisms/Projects'

export const FrontPage = () => {
  return (
    <>
        <Header />
        <Start />
        <Tecnologies />
        <Projects />
        <About />
        <Training />
        <Contact />
        <Footer />
    </>
      
  )
}
export default FrontPage