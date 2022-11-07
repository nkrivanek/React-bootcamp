
import './App.css';
import { AnotherComponent } from './components/AnotherComponents';
import {App} from './components/AppComponents';

function  App() {
  return (
    <div className="App">
      <AnotherComponent title="Super components"/> 
      <AnotherComponent title="Ovo je naslov 1"/>
      <AnotherComponent title="Ovo je naslov 2"/>
      <AnotherComponent title="Ovo je naslov 3"/>

    </div>
  );
}

export default App;
