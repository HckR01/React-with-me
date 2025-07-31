import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
//isko import kese kar na hey notes .......
/*create  const here we use step 
2.what we want to change ->we want to change the paragraph 
there we can use js {} and fo what ever wan to do there
*/
//.................................

export default function App() {
  const [step, setStep] = useState(1);
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>

        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: '#7950f2', color: '#ffff' }}
          onClick={handlePrevious}
        >
          previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#ffff' }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
