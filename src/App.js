import './App.scss';
import { Data } from './components/Data';
import Header from './components/Header';
import Section from './components/Section';
import Second from './components/Second';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section slides={Data}/>
        <Second/>
        <Footer/>
      </div>
  );
}

export default App;
