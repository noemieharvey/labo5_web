const USER_ID = '54fd9da4-957e-4af3-87a1-e0a2dd011bfc';
const BASE_URL = `https://glo3102lab4.herokuapp.com/${USER_ID}`;

export const getTasks = () => {
    return fetch(`${BASE_URL}/tasks`)
        .then( response => response.json())
        .then( json => {
            return json.tasks
        })
}

export const createTask = (taskName) => {
    return fetch(`${BASE_URL}/tasks`,
    {
        method: "POST",
            headers: {
        "Content-Type" : "application/json"
    },
        body: JSON.stringify({
            name: taskName
        })
    })
.then( response => response.json())
        .then( json => json)
        .catch( err => {
            alert("bobo create task " + err.message);
        });
}

export const deleteTask = (taskId) => {
    return fetch(`${BASE_URL}/tasks/${taskId}`,
        {
            method: "DELETE"
        })
        .catch( err => {
            console.log(err.message);
            alert("bobo delete task " + err.message);
        });
};

export const updateTask = (taskId, newName) => {
    return fetch(`${BASE_URL}/tasks/${taskId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: newName
            })
        })
        .then( response => response.json())
        .then( task => task)
        .catch( err => {
            console.log(err.message);
            alert("bobo update " + err.message);
        });
}
