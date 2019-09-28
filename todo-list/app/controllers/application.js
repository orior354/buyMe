import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    actions:{
        //deleting the task 
        deleteTodo(event){
            var todoID = $(event.target).attr('todoid');
            var isDone = $('.todo-castumCheckbox[todoid="'+todoID+'"]').attr('isdone');
            this.store.findRecord('application', todoID).then(function(application) {
                application.deleteRecord(); // => DELETE to /posts/2
                application.save().then(()=>{
                    //updating the counters
                    if(isDone == 1){
                        $('.task-finish').text(parseInt($('.task-finish').text()) - 1)
                    }
                    else{
                       $('.task-active').text(parseInt($('.task-active').text()) - 1); 
                    }
                });   
            });
        },
        // creating a toggle to the checkbox
        finishStartTodo(event){
            var todoID = $(event.target).attr('todoid');
            var isDone = $(event.target).attr('isDone') == 0 ||$(event.target).attr('isDone') == undefined ? 1 : 0;
           
            //update the counters
            if(isDone == 0) {
                let active = parseInt($('.task-active').text()) + 1;
                let finished = parseInt($('.task-finish').text()) - 1;
                $('.task-active').text(active);
                $('.task-finish').text(finished);
            }
            else{
               let active = parseInt($('.task-active').text()) - 1 ;
               let finished = parseInt($('.task-finish').text()) + 1;
                $('.task-active').text(active);
                $('.task-finish').text(finished);
            }
            //sent put request to the server
            this.store.findRecord('application', todoID).then(function(application) {
                application.set('isDone', isDone); // => DELETE to /posts/2
                application.save();
            });
            
        },
        //adding new task
        addTodo(){
            var taskName = prompt('please enter task name');
            if(taskName != null ){
                var active = parseInt($('.task-active').text()) + 1;
                var newTodo = this.store.createRecord('application', {
                    name:  taskName 
                });
                newTodo.save().then(()=> {
                    //update the counter
                    $('.task-active').text(active);
                });
            }
            
        },
        //update the name of the todo
        updateName(event){
            var todoID = $(event.target).attr('todoid');
            
            var newName = prompt('please enter task new name');
            if(newName != null){
                this.store.findRecord('application', todoID).then(function(application) {
                    application.set('name', newName); // => DELETE to /posts/2
                    application.save();
                });
            }
        }
    }
});
