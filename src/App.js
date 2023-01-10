import './App.scss';
import bgSunny from './data/bgsunny.mp4';
import bgCloudy from './data/bgcloudy.mp4';
import bgRainy from './data/bgrainy.mp4';
import bgSnowy from './data/bgsnowy.mp4';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import { Card } from '@mui/material';
const App = () => {
  return (
    <div className="sunny">
    <video loop muted autoPlay playsInline>
        <source src={bgSnowy}/>
    </video>
    <div className='details'>
      <div className="town">
        <h3>Berea, KY</h3>
        <WbSunnyOutlinedIcon fontSize='large'/>
      </div>
      <h1>23°C</h1>
      <h4>H:29° L:18°</h4>
      <div className="extra">
        <AirOutlinedIcon fontSize='large'/>
        <h3>18km/h</h3>
      </div>
    </div>
</div>
  );
}

export default App;
