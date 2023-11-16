import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './componentes/utils/Menu.jsx';

function App() {
  return (
    <div className="App">
    {/* <Clientes />       */}
    <Router>
      <Menu />
    </Router>
  </div>
  );
}

export default App;
