import Button from './components/ui/Button';
import './global.css';
import logo from '/main-images/logo.svg';

function App() {
  return (
    <>
      <h1>
        Let your mind <span className='gradient-text'>explore</span> new world
      </h1>
      <h2>Smartenup Assessment</h2>
      <h3>Smartenup Assessment</h3>
      <Button btnStyle='outline' />
      <img src={logo} />
      <p>
        Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether.
        Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
      </p>
    </>
  );
}

export default App;
