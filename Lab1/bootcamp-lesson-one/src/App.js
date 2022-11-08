
import './App.css';
import { AnotherComponent } from './components/AnotherComponents';
//import {Appp} from './components/AppComponents';
import Appp from './components/AppComponents';

function App() {
  return (
    <div className="App">
      <AnotherComponent title="I am a prop"/>
      <Appp/>
      <AnotherComponent title="I am a bad component"/>
      <AnotherComponent/>

    </div>
  );
}

export default App;
