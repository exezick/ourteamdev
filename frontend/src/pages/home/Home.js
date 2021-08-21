import Banner from '../../layouts/home/Banner'
import ContactUs from '../../layouts/home/ContactUs'
import HowWeWork from '../../layouts/home/HowWeWork'
import OurTeam from '../../layouts/home/OurTeam'
import Services from '../../layouts/home/Services'

function Home() {
  return (
    <div className={`main-container`}>
      <Banner className={`child-container`} />
      <Services className={`child-container`} />
      <OurTeam className={`child-container`} />
      <HowWeWork className={`child-container`} />
      <ContactUs className={`child-container`} />
    </div>
  )
}

export default Home
