//this middleware is manually create but can be found in reduxjs/toolkits
//it enables us to make Api call by enhancing the ability to pass a 
//function as an "action" instead of object.
const func = ({dispatch, getState}) => next => action =>{
    if(typeof action === 'function') action(dispatch, getState);
    else next(action);
}

export default func;