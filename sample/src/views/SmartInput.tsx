import { useState } from "react"

export default function SmartInput() {
  const [focus, setFocus] = useState(false)
  const [text, setText] = useState('')
  const options = ["Tokyo", "Kyoto", "Osaka", "Fukuoka", "Sappro", "Utsunomiya", "Sendai"]

  return (
    <div className="smart-input-box">
      <input
        value={text}
        onClick={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => setText(e.target.value)}
      />
      {text !== "" &&
        <button
          onClick={() => setText('')}
        >
          X
        </button>
      }
      {focus && (
        <div className="drop-down">
          {options
            .filter(i => i.toLowerCase().includes(text.toLowerCase()) && i.toLowerCase() !== text.toLowerCase())
            .map((i, index) => {
              const start = i.toLowerCase().indexOf(text.toLowerCase())
              const end = start + text.length
              return (
                <div
                  className="option"
                  key={index}
                  onMouseDown={(e) => {
                    setText(i);
                    e.preventDefault();
                  }}
                >
                  {i.split('').map((i, index) => index >= start && index < end ? 
                    <span key={index} style={{backgroundColor: "red",color: "white"}}>{i}</span> : 
                    <span key={index}>{i}</span>)}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}