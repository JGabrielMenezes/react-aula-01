import './App.css';
import coruja1 from './assets/coruja1.jpg';

function App() {
  return (
    <div className="App">
      <h1>Olá mundo do React JS!</h1>
      <h1>Aprendendo React</h1>
      <img src={coruja1} alt="foto" />
      <pre>
      Por influência da mitologia grega, tanto que Atena,
      deusa da guerra e da sabedoria, tinha uma coruja como mascote.
      Os gregos consideravam a noite como o momento do pensamento filosófico
      e da revelação intelectual e a coruja, por ser uma ave noturna,
      acabou representando essa busca pelo saber.
      </pre>
    </div>
  );
}


export default App;
