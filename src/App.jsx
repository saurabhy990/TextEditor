import { useReducer, useState } from 'react'
 
import './App.css'

const reducer = (prevState,action)=>{
  switch(action.type){
     case 'change':
      return {text: action.payload}

      case 'upercase':
      return {text : prevState.text.toUpperCase()}

      case 'lowercase':
        return {text : prevState.text.toLowerCase()}

      case 'cleartext':
          return {text : prevState.text = ""}

       case 'copy':
          return {text :  navigator.clipboard.writeText(prevState.text) }
      // case 'remove_spaces':
      //       return {text : (prevState.text.) ? "yes":"no"}

      case'count':
      return {text:  prevState.text.split(' ').length-1}

      case'charcount':
      return {text:prevState.text.split('').length}
      default:
        return prevState
}
}


 


function App() {

  // const[dark setDark] = useState(false)
     

  // const darkMode = ()=>{
  //    setDark(!dark)
  //    document.body.classList.toggle("dark");
  // }

  const initialState = {

    text:""
  }
 const [state, dispatch] = useReducer(reducer,initialState)
 

  return (
    <> 
     
      <h1>Text Editor</h1>
      <h2>Enter Text Here:</h2>
      <textarea  value={state.text} rows ={8}cols={82}  onChange={(e)=>{dispatch({type:'change',payload:e.target.value})}}>{state.text}</textarea>
      {/* <input type="text"  onChange={(e)=>{dispatch({type:'change',payload:e.target.value})}} /> */}

    <div>
      <button onClick={(( )=>{dispatch({type:'upercase', })})}>UperCase</button>
      <button onClick={(()=>{dispatch({type:'lowercase'})})}>LowerCase</button>
      <button  onClick={(()=>{dispatch({type:'cleartext'})})}>Clear Text</button>
      <button onClick={()=> navigator.clipboard.writeText(state.text) }>COPY to Clipboard</button>

      {/* <button onClick={(()=>{dispatch({type:'copy'})})}>COPY</button> */}

      <button>Remove Extra Spaces </button>
      
    </div>
    <hr />

        <h2>Summary of Text:</h2>
        <h4 >No of Words:   {state.text.split(' ').length - 1}</h4>
        <h4>No of Chars:  {state.text.split('').length}</h4>
        {/* <h4 >No of Words:   typecount</h4> 
        <h4>No of Chars : {"charcount"}  </h4> */}
        <h4>Reading Time: {Math.ceil(state.text.split('').length/120)}</h4>

    <hr />
      
      <h2>Preview Documnet:</h2>
      <textarea name="postContent"  rows ={5}cols={82}  value={state.text}> </textarea>
       
    </>
  )
}


export default App
 