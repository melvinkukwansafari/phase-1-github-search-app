document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.getElementById('github-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      buildToDo(form.querySelector("#search").value)
      // buildToDo(e.target.new-task-description.value)
      form.reset()
    })
  })
  
  function buildToDo(todo) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    li.textContent = `${todo} `
    li.appendChild(btn)
    document.getElementById('user-list').appendChild(li)
  }
  
  function handleDelete(e) {
    e.target.parentNode.remove()
  }