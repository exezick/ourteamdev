import Banner from '../../layouts/home/Banner'
import Contactus from '../../layouts/home/Contactus'
import Howwework from '../../layouts/home/Howwework'
import Ourteam from '../../layouts/home/Ourteam'
import Services from '../../layouts/home/Services'

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Ourteam />
      <Howwework />
      <Contactus />
    </div>
  )
}

export default Home
