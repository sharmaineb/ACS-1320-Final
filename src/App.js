import './App.css';
import Heading from './components/Heading/Heading';
import MetalMeta from './components/MetalMeta/MetalMeta';
import BandList from './components/BandList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <Heading />
      < MetalMeta />
       <BandList />
      </header>
    </div>
  )
}

export default App;
