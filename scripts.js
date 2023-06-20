    const fetchTodos = () => {
          
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then( (response) => response.json())
            .then( (d) => arrayOfTodos = d)
            .then(console.log("complete"))
               
              
            }
     //fetches data from json, then takes that data and transforms into json format (and stores as d), then sets a new variable called arrayOfTodos to equal the value of d. 

    const logTodos = () => {
      console.log(arrayOfTodos)
    }
    
    const populateTodos = () => { 
      
        for (let i = 0; i < arrayOfTodos.length; i++) {

            let todoList = document.getElementById("todo-list") //the ordered list (ol) element becomes the variable - 'todoList'
           
            let element = document.createElement("li")  //creating variable, "element", which stands for the 'li' element we are creating in the document - with createElement method

             let textNode = document.createTextNode(arrayOfTodos[i].title) // these are directions to go into the created 'li' element (variable name =element) and add some HTML code to it. 
            element.appendChild(textNode)
           
            
            todoList.appendChild(element)// Takes the ordered list element (that we've made into a variable) and uses the appendChild method to add the 'li' element we created w/ the textNode information into the html itself, so that the todo items populate as a numbered list when 'fetch to dos' is clicked
        
    }
    }


    const clearToDos = () => {
      document.getElementById("todo-list").innerHTML= ''    

    } //keeping this button's only function for clearing




    let printFilter =() => {
     clearToDos()

      let todoList = document.getElementById("todo-list")
      let num = document.getElementById("number-input").value
     
      let filteredArray = arrayOfTodos.filter(array => array.userId == num)

      for (let i = 0; i < filteredArray.length; i++) {
  
      let element = document.createElement("li")  //creating variable, "element", which 
      element.innerHTML = filteredArray[i].title
 
      todoList.appendChild(element)//
    }}


    
    let completedToDos = () => {
      clearToDos()

      let todoList = document.getElementById("todo-list") // OL list as a variable
    
      let num = document.getElementById("number-input").value // input value from user as a variable
    
     
      let filteredArray = arrayOfTodos.filter(array => array.userId == num && array.completed) // filters array to just those objects that match user input #

      for (let i = 0; i < filteredArray.length; i++) {
        let element = document.createElement("li")
      //  element.innerHTML = filteredArray[i].userId 
       element.innerHTML = filteredArray[i].title
 
      todoList.appendChild(element)

    }
  }

  let incompleteToDos = () => {
    clearToDos();
    let incompleteToDoList = document.getElementById("todo-list")
    let num = document.getElementById("number-input").value

    let filteredArray=arrayOfTodos.filter(array => array.userId == num && array.completed == false)

    console.log(filteredArray);

    for(let i=0; i< filteredArray.length; i++) {
    let element = document.createElement("li") 
    element.innerHTML = filteredArray[i].title
    incompleteToDoList.appendChild(element)
    }
  }