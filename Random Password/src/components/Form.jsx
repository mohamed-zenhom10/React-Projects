import React from 'react'

const Form = ({inputs , setInputs , generateRandom}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="range">
          <input 
            type="range"
            min={0}
            max={20}
            value={inputs.range}
            onChange={(e) => setInputs({...inputs , range: e.target.value})}
          />
          <p>Number Of Characters <span>{inputs.range}</span></p>
        </div>
        <div className="letters">
          <div className="lowercase">
            <input 
              type="checkbox"
              checked={inputs.lowercase}
              onChange={(e) => setInputs({...inputs , lowercase: e.target.checked})}
            />
            <label>Include Lowercase Letters</label>
          </div>
          <div className="uppercae">
            <input 
              type="checkbox" 
              checked={inputs.uppercase}
              onChange={(e) => setInputs({...inputs , uppercase: e.target.checked})}
            />
            <label>Include Uppercase Letters</label>
          </div>
        </div>
        <div className="numbers-special">
          <div className="numbers">
            <input 
              type="checkbox" 
              checked={inputs.numbers}
              onChange={(e) => setInputs({...inputs , numbers: e.target.checked})}
            />
            <label>Include Numbers(0-9)</label>
          </div>
          <div className="special">
            <input
              type="checkbox"
              checked={inputs.special}
              onChange={(e) => setInputs({...inputs , special: e.target.checked})}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
        <button type='button' onClick={() => generateRandom(parseInt(inputs.range))}>
          Generate
        </button>
      </form>
    </>
  )
}

export default Form