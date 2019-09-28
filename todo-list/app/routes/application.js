import Route from '@ember/routing/route';

export default Route.extend({
        model(){
          //  return [{"id":3,"name":"test3","isDone":0,"created_at":"2019-09-25 17:14:14","updated_at":"2019-09-25 17:14:14"},{"id":4,"name":"","isDone":0,"created_at":"2019-09-25 17:14:18","updated_at":"2019-09-25 17:14:18"},{"id":5,"name":"","isDone":0,"created_at":"2019-09-25 17:15:26","updated_at":"2019-09-25 17:15:26"},{"id":6,"name":"","isDone":0,"created_at":"2019-09-25 17:37:55","updated_at":"2019-09-25 17:37:55"},{"id":7,"name":"123","isDone":0,"created_at":"2019-09-25 17:38:34","updated_at":"2019-09-25 17:38:34"}];
           return this.store.findAll('application');
       }
});
