import React, {useState} from 'react'

export default function Textarea(props) {

        let myStyle = {
            color: props.mode.backgroundColor === "light"? "black": "white",
            backgroundColor: props.mode.backgroundColor === 'light' ? 'dark' : 'light'
          };
const [text, setText] = useState("Enter the Text here")

         const toggleUpper = () =>
         {
            let newText = text.toUpperCase()
            setText(newText)
            props.toggleAlert("Converted to UpperCase")
         }
         const toggleLower = () =>
         {
            let newText = text.toLocaleLowerCase()
            setText(newText)
            props.toggleAlert("Converted to LowerCase")

         }
         const speak = () => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
            props.toggleAlert(" Speak Functionality Working")

          }
          const toggleCut = () => {
            navigator.clipboard.writeText(text);
            setText("")
            props.toggleAlert("The text has been cut to clipboard")

            }
            const handleExtraSpaces = ()=>{
                let words = text.split(' ');
                let joinedWords = '';
                // console.log(words);
                words.forEach((elem)=>{
                    if(elem[0] !== undefined){
                        joinedWords += elem + " ";
                        console.log(joinedWords);
                    }
                })
                setText(joinedWords);
                props.toggleAlert("The extra spaces are removed")

            }
              
         const handleChange =(event)=>
         {
            console.log("chanege")
        setText(event.target.value)
         }


  return (
<>
    <div className="mb-3 mx-5 my-5" style={myStyle}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label mx-2 mb-2"><b><h1>{props.text1}</h1></b></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange= {handleChange} rows="6"></textarea>
</div>

<div className="container2 mx-5" style={myStyle}>
  <p>{text.trim().split(/\s+/).filter(word => word !== "").length} Words and {text.length} Characters</p>
</div>

<div className="buttons mx-5" >
<button type="button" className="btn btn-primary mx-2" disabled={text.length===0} onClick={toggleUpper}>Convert it to UpperCase</button>
<button type="button" className="btn btn-primary mx-2" disabled={text.length===0} onClick={toggleLower}>Covert it to LowerCase</button>
<button type="button" onClick={speak} className="btn btn-primary mx-2" disabled={text.length===0}>Speak</button>
<button type="button" onClick={toggleCut} className="btn btn-primary mx-2" disabled={text.length===0}>Cut</button>
<button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-2" disabled={text.length===0}>Remove Extra spaces</button>

</div>







</>
    )
}
