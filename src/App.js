import logo from './logo.svg';
import './App.css';
import {store} from "./store/configureStore";
import { unsubscribe } from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bug";
import react, { useEffect, useState } from "react"

function App() {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [allbugs, setAllbugs] = useState([])
  useEffect(() => {
    setAllbugs(store.getState());
  }, [store])

  const unsubscribe = store.subscribe(() => {
    setAllbugs(store.getState());
  })

  const resolveBug = () => {
    store.dispatch(bugResolved({id:Number(id)}));
  }
  const addBug = () => {
    store.dispatch(bugAdded({description:description}));
    setAllbugs(store.getState());
  }

  //unsubscribe();
  return (
    <div className="App">

      <input placeholder="enter bug id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <button onClick={resolveBug}>
        Resolve Bug
      </button>

      <input placeholder="enter bug id" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button onClick={addBug}>
        Add Bug
      </button>
      <div>
        {allbugs.map(bug => (<div key={bug.id}><p>{bug.id}</p><p>{bug.description}</p> <p>{bug.resolved.toString()}</p><hr></hr></div> ))}
      </div>

    </div>
  );
}

export default App;
