import './App.css'
import  Title  from './components/Title'
import Result from './components/Result'
import Form from './components/Form'
import { useState } from 'react'
const App = () => {

  const [inputs , setInputs] = useState({
    range: 10,
    lowercase: true,
    uppercase: false,
    numbers: false,
    special: false,
  })

  const [password , setPassword] = useState("");


  const generateRandom = (passLength) => {
    let chars = "";
    let result = "";

    if (inputs.lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (inputs.uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (inputs.numbers) {
      chars += "0123456789";
    }
    if (inputs.special) {
      chars += "!@#$&*()_";
    }
    
    if (chars.length === 0) {
      setPassword("");
      return;
    }

    for (let i = 0; i < passLength; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  };

  return (
    <>
      <div className="container">
        <Title />
        <Result password={password} />
        <Form inputs={inputs} setInputs={setInputs} generateRandom={generateRandom} />
      </div>
    </>
  )
}

export default App
