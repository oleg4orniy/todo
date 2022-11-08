window.onload = function() {

    let todoList = [];
    let deleteBtn = document.querySelector('#delete')

    
    if (localStorage.getItem('todo') != undefined){
        todoList = JSON.parse(localStorage.getItem('todo'));
        out ();
    }

    document.getElementById('add').onclick = function () {
        var d = document.getElementById('in').value ;
        var temp = {};
        temp.todo  = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        out();
        localStorage.setItem('todo',JSON.stringify(todoList));
        location.reload();
    }

    checkCheckboxes ();

    function checkCheckboxes(){
        let checkboxes = document.querySelectorAll('input[type = checkbox]');
        for (let i = 0; i < checkboxes.length; i++){
            checkboxes[i].onchange = function(){
                deleteBtn.style.display = "block";
                todoList = JSON.parse(localStorage.getItem('todo'))
                todoList[i].check = this.checked
                // localStorage.clear()
                localStorage.setItem('todo', JSON.stringify(todoList))
                out();
            }
        }
    }

    deleteBtn.addEventListener( "click", function () { 
        for(i = 0; i < todoList.length; i++){
           if(todoList[i].check == true)
           todoList.splice(i , 1)
        }
        deleteBtn.style.display = 'none';
        out ();
        localStorage.setItem('todo', JSON.stringify(todoList));
        location.reload();
    });
  
    /*function removeCheckedCheckboxes() {
        var list = document.getElementsByName('input[type = checkbox]');
        for (var i = 0; i < list.length; ++i) {
            var todoList = list[i]
            if (todoList.checked)
              todoList.parentElement.hidden = true*/

    
    function out () {
        var out = '';
        for (var key in todoList) {
            if (todoList[key].check == true){
                out += '<input type = "checkbox" checked>' ;
                deleteBtn.style.display = "block";
            }   
                else
                out +='<input type = "checkbox">';
                out += todoList[key].todo + '<br>'
        }
        document.getElementById('out').innerHTML = out;
    }
    
   
}
