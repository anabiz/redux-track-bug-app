import logo from './logo.svg';
import './App.css';
import store from "./store";
import { unsubscribe } from "./store";
import { bugAdded, bugResolved } from "./actions";
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
    store.dispatch(bugResolved(Number(id)));
  }
  const addBug = () => {
    store.dispatch(bugAdded(description));
  }
  //const handleChange =()=> setId()

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
