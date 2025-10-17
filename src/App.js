import './App.css';
import Jatekter from './components/Jatekter';
import Lampak from './components/Lampak';

function App() {

  const [lista, setLista] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>

        <Jatekter katt={katt} />

      </article>
      <div>

        <Lampak />

      </div>
      <footer>
        <p>Fabu András</p>
      </footer>
    </div>
  );
}

export default App;
