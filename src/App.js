import logo from './logo.svg';
import './App.css';
import {store} from "./store/configureStore";
import { unsubscribe } from "./store/configureStore";
import { bugAdded, bugResolved,getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from "./store/bug";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users"
import react, { useEffect, useState } from "react";
import Toast from "./toast/toast";
import { toast } from 'react-toastify';

const addUser = (user) => {
  store.dispatch(userAdded({name:user}));
  console.log(store.getState().entities.users);
}

function App() {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [allbugs, setAllbugs] = useState([]);
  const [project, setProject] = useState("");
  const [user, setUser] = useState("")
  useEffect(() => {
    setAllbugs(store.getState().entities.bugs);
  }, [store])

  const unsubscribe = store.subscribe(() => {
    setAllbugs(store.getState().entities.bugs);
    console.log("changes occured");
  })
 
  const notify = () => toast(`bug ${id} resolved!`);

  const resolveBug = () => {
    store.dispatch(bugResolved({id:Number(id)}));
    console.log(getUnresolvedBugs(store.getState()));
    notify();
  }
  const addBug = () => {
    store.dispatch(bugAdded({description:description}));
    unsubscribe();
    setAllbugs(store.getState().entities.bugs);
    store.dispatch({
      type:"error",
      payload:{
        message:"An error occured"
      }
    })
    store.dispatch((dispatch, getState)=>{
      //call an Api
      //when the promise is resolved => dispatch()
      dispatch({type: "bugsReceived", bugs:[1,2,3]});
      console.log(getState())
      //if promise failed => dispatch()
    })
  }
  const addProject = () => {
    store.dispatch(projectAdded({name:project}));
    console.log(store.getState());
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
      
      <input placeholder="name" value={project} onChange={(e) => setProject(e.target.value)}></input>
      <button onClick={addProject}>
        Add project
      </button>

      <input placeholder="name" value={user} onChange={(e) => setUser(e.target.value)}></input>
      <button onClick={() => addUser(user)}>
        Add User
      </button>

      <div>
        {allbugs.length > 0 ? allbugs.map(bug => (<div key={bug.id}><p>{bug.id}</p><p>{bug.description}</p> <p>{bug.resolved.toString()}</p><hr></hr></div> )) : null}
      </div>
      <Toast />
    </div>
   
  );
}

export default App;
