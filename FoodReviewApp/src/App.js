import './App.css';
import './Assets/css/splash.css';
import SplashScreen1 from './Assets/images/Splashscreen/screen_one_bg.png'
import { PiChefHatDuotone } from "react-icons/pi";
import { COLORS } from './Assets/constants/Color';
function App() {
  return (
    <div className='splash-container'>
     <div className='splash-skip-btn'>
      <span className='splash-skip-btn-txt'>Skip</span>
     </div>
     <div className='splash-top-container'>
      <img src={SplashScreen1} className='splash-cover-img' alt="" />
     </div>
     <div className='splash-bottom-container'>
      <div className='splash-icon-con'>
      <PiChefHatDuotone size={35} color={COLORS.primary} />
      </div>
     </div>
    </div>
  );
}

export default App;
