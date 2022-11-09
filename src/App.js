import './App.css';
import react,{useState} from 'react';

function App() {
  const [name, setName]=useState('');
  const [show,setShow]=useState(false);
  function onNameChange(e){
    setName(e.target.value);
    console.log(name);
  }
  function onBtnClicked(e){
    setShow(!show);
  }
  return (
    <div className="App">
     <p>Your Name</p>
     <input type="text" onChange={onNameChange} value={name} />
     {name&&!show?
     <div>
      hi {name} How are you?
     </div>
    :
    null}
    {
      show?
      <div>
        Hay {name} Keep going
      </div>
      :
      null
    }
    <button onClick={onBtnClicked}>motivate</button>
    </div>
  );
}

export default App;
