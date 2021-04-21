
const checkTask =async(usnm,pswd)=>{
    const Request = {

        "userName": usnm,
        "password": pswd
    };
     
    const API_URL = 'http://Jsonplaceholder.typicode.com/todos'
    try {
        //const response = await (API_URL,Request)
        const RES={
            "errorCode":"00",
            "errorMsg" :"SUCCESS",
            "TaskList" :[
                { "description": "Hello", "boolean": "True" }, 
                { "description": "How ", "boolean": "False" }
            ]
    }
        return RES;
    } catch (error) {
        console.error(error);
    }


}



export default checkTask;