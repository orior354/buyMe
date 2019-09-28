<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['name', 'isDone'];
    /**
     * updateColumn - update columns of todo
     * @param type $request
     * @param type $id
     * @return type - json data of todo
     */
    public function updateColumn($request, $id){
        $params = $request->all();
        $updated = (bool)$this->where('id', $id)->update($params);
        return json_encode($updated);
        
    }
   
    /**
     * createNewTodo - create the todo task
     * @param type $request
     * @return type - json data of todo
     */
    public function createNewTodo($request){
        $params = $request->all();
        $params['isDone'] = 0;
        $params['name'] = isset($params['name']) ? $params['name'] : '';
        $newTodo = Todo::Create($params);
        $resp = new \stdClass();
        $resp->id = $newTodo->id;
        unset($newTodo->id);
        $resp->type = "application";
        $resp->attributes = $newTodo;
        return json_encode($resp);
        //return Todo::Create($params);
    }
    /**
     * deleteColumn - deleting the todo task
     * @param type $id
     * @return type - json data of todo
     */
    public function deleteColumn($id){
        $todoToDeleteMetaData = Todo::find($id);
        Todo::destroy($id);
       
        return json_encode($todoToDeleteMetaData);
    }
}
