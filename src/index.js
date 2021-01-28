document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form#create-task-form").addEventListener("submit", function(e){
    e.preventDefault()
    const li = document.createElement("li")
    li.innerHTML = document.getElementById("new-task-description").value
    
    const close = document.createElement("button")
    close.innerHTML = "X"
    li.append(close)
    close.addEventListener("click", deleteTask)
    function deleteTask(e){
      li.remove()
    }
  
    const ul = document.getElementById("tasks")
    ul.append(li)

    const textInput = document.getElementById("new-task-description")
    textInput.value = ""
    textInput.focus()
  })
});

