import './index.scss'
import logoA from '../../../assets/images/logo-a.png'
import backgroundImg from '../../../assets/images/background.jpg'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={backgroundImg} alt="A" />
    </div>
  )
}

export default Logo
