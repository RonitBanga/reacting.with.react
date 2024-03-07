import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import ParentComponent from './components/ParentComponent.js';
import Form from './components/Form.js';
// import {Greet} from './components/Greet.js';     // for named export

function App() {
  return (
    <div className="App">

      <Form />


      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <Greet name="Ronit" heroName="RONIT"/> */}

      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Ronit" heroName="RONIT">
        <p>This is children props</p>
      </Greet>   
      <Greet name="Banga" heroName="BANGA">
        <button>Action</button>
      </Greet>
      <Greet name="Ronta" heroName="RONTA"/>

      <Welcome name="Ronit" heroName="RONIT"/>
      <Welcome name="Banga" heroName="BANGA"/>
      <Welcome name="Ronta" heroName="RONTA"/> */}
      {/* <Hello /> */}
      {/* <Welcome name="Ronit" heroName="RONIT"/> */}
    </div>
  );
}

export default App;
