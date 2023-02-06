import './css/App.css';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import FooterButtons from './components/FooterButtons'

function App() {
  return (
    <section className="app">
        <Sidebar/>
        <Form />
        <FooterButtons />
    </section>
  );
}

export default App;
