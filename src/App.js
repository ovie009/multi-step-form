
import './css/App.css';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import {useState} from 'react';

function App() {

  const [step, setStep] = useState(1);
  
  return (
    <section className="app">
        <Sidebar step={step}/>
        <Form  step={step} setStep={setStep} />
    </section>
  );
}

export default App;

