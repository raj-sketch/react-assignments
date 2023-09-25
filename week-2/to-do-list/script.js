
const add_category_button = document.getElementById('add')
const main_div = document.getElementById('main')


add_category_button.addEventListener('click', function(){

    // creating div
    const new_category = document.createElement("div")
    const category_name = prompt("write new category name")
    new_category.id = 'category'

    //creating header
    const category_header = document.createElement('Header')
    category_header.id = 'category-header'
    category_header.textContent = category_name
    new_category.appendChild(category_header)

    //creating footer
    const category_footer = document.createElement('Footer')
    category_footer.id = 'category-footer'
    const currentDateTime = new Date()
    const formattedDateTime = currentDateTime.toLocaleString()
    category_footer.textContent = formattedDateTime
    new_category.appendChild(category_footer)

    //creating add task button
    const task_button  = document.createElement('buttton')
    task_button.id = 'taskbutton'
    task_button.textContent = '+'
    category_header.appendChild(task_button)


    //adding task
    task_button.addEventListener('click',function(){
        task_div = createElement('div')
        task_div.id = 'task'
        new_category.appendChild(task_div)

        task_input = createElement('input')
        task_input.id = 'inputtask'
        task_input.textContent = 'enter your task here'
        task_div.appendChild(task_input)

        const confirm_button = createElement('button')
        confirm_button.id = 'iconbutton'
        confirm_button.textContent = '&#10004;'
        task_div.appendChild(confirm_button)

        const wrong_button = createElement('button')
        wrong_button.id = 'iconbutton'
        wrong_button.textContent = '&#10006;'
        task_div.appendChild(wrong_button)






        ()
        

    })



    //ending div
    main_div.insertBefore(new_category, add_category_button)


})


//creating task
//const new_task = document.createElement('input')
//new_task.id = "task"
//new_task.setAttribute('type', 'checkbox')
//new_task.textContent = 'edit to'
//new_category.appendChild(new_task)
