import Banner from '../../layouts/home/Banner'
import Contactus from '../../layouts/home/Contactus'
import Howwework from '../../layouts/home/Howwework'
import Ourteam from '../../layouts/home/Ourteam'
import Services from '../../layouts/home/Services'

function Home() {
  return (
    <div className={`main-container`}>
      <Banner className={`child-container`} />
      <Services className={`child-container`} />
      <Ourteam className={`child-container`} />
      <Howwework className={`child-container`} />
      <Contactus className={`child-container`} />
    </div>
  )
}

export default Home
