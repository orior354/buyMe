//this element created to display the open counter on first load
import { helper } from '@ember/component/helper';

export function idOpenCount(model) {
    var todos = model[0].content;
    var open = 0;
    for(var i of todos){
        if(i['__data']['isDone'] == 0){
            open++;
        }
    }
    
  return open;
}

export default helper(idOpenCount);
