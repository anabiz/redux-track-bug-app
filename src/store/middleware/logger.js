const logger = param => store => next => action =>{
    console.log("Loggin", param);
    next(action);
}

export default logger;