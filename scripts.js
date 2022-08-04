    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    const arrayOfTodos1 = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    
    const fetchTodos = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then( (response) => response.json()) 
        .then( (d) => populateTodos(d))
    
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos1)

    }
    
    const populateTodos = (d) => {
       
        const todoList = document.getElementById("todo-list")



        for (let i = 0; i < d.data.length; i++) {

            const element = document.createElement("li")
            element.innerHTML = `<img src="${d.data[i].avatar}">`
            todoList.appendChild(element)
        
    }
    }
    //Caroline's code from here

//     console.log(`Title: ${arrayOfTodos1[0].title}`)

//     let list = document.getElementbyID("todo-list");
//     let listItemContent = arrayOfTodos[0].title;

//   let createListItem = () => {
    // let newObject = document.createElement("LI");
    // let text = document.createTextNode(listItemContent);

//     newObject.appendChild(text);

//     document.getElementById("todo-list").appendChild(newObject)
//    }
