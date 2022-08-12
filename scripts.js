
    // const arrayOfTodos1 = [
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }]

    //the onclick of fetchtodos - requests data from url listed. Next it goes into the '.then' promise (b/c can take awhile, needs ordered). the 'anonymous' function w/ argument of the 'response' variable - which we named- it's just the raw data from URL. the anonymous function called transforms the raw data into JS object notation, which we named 'd'. Then we call another anonymous function? that calls populateTOdos function w/ arugment of 'd'.
    // const fetchTodos = () => {
    //     fetch('https://reqres.in/api/users?page=2')
    //     .then( (response) => response.json()) 
    //     .then( (d) => populateTodos(d)) }

 
    const fetchTodos = () => {
          
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then( (response) => response.json())
            .then( (d) => arrayOfTodos = d)
            .then(console.log("complete"))
               
              
            }
     //fetches data from json, then takes that data and transforms into json format (and stores as d), then logs out the json format in console



    // const logTodos = () => {
    //     console.log(arrayOfTodos1)
    //     //this function is just logging out (in the console) the 2 object list above when you click 'log to dos' button on site
    // }

    const logTodos = () => {
      console.log(arrayOfTodos)
    }
    
    const populateTodos = () => { //defining function populateTodos and inputting the argument of the JSON-styled data, 'd'
       
      
        
         //the ordered list (ol) element becomes the variable - 'todoList'



        for (let i = 0; i < arrayOfTodos.length; i++) {

            let todoList = document.getElementById("todo-list")
           
            let element = document.createElement("li")  //creating variable, "element", which stands for the 'li' element we are creating in the document - with createElement method

             let textNode = document.createTextNode(arrayOfTodos[i].userId) // these are directions to go into the created 'li' element (variable name =element) and add some HTML code to it. 
            element.appendChild(textNode)
            // Specifically, we are adding it as an image. The image we are adding is the 'avatar' key from each JSON object. 

            //d.data[i].avatar - "d" is JSON-styled data. "data" is an array within "d" we are accessing (array of  6 objects, indexed 0-5), [i] stands for the object w/in 'data' array we are accessing, and then 'avatar' is one of the keys we are targeting on the object (in this case it's an image)
           
           
            
            todoList.appendChild(element)// Takes the ordered list element (that we've made into a variable) and uses the appendChild method to add the 'li' element we created w/ the d.data[i].avatar information into the html itself, so that the images populate as a numbered list when 'fetch to dos' is clicked

            // console.log (d) // logging out JSON styled data, so I could see what this line of code (d.data[i].avatar ) was saying



        
    }
    }

    // const clearTodos = () => {
    //   element = null
    // }
    
