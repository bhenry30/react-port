import './App.css';
import Container from './components/Container'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'

function App() {
  return (
    <div>
    <Container />

    <main>
      <Work></Work>
      <About></About>
      <Contact></Contact>
    </main>
    </div>
  );
}

export default App;
