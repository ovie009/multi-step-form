import './css/App.css';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import {useState} from 'react';
import FooterButtons from './components/FooterButtons';

function App() {
  const [step, setStep] = useState(1);
  
  
  // function to update step
  // would be sent as a prop to the FooterButtons component 
  const handleStep = (data) => {
    return  setStep(data);
  }

  console.log(step);
  
  return (
    <section className="app">
        <Sidebar step={step}/>
        <Form step={step} />
        <FooterButtons step={step} handleStep={handleStep} />
    </section>
  );
}

export default App;
