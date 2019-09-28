//this element created to display the done counter on first load

import { helper } from '@ember/component/helper';

export function idDoneCount(model/*, hash*/) {
    var todos = model[0].content;
    var finished = 0;
    for(var i of todos){
        if(i['__data']['isDone'] == 1){
            finished++;
        }
    }
    
  return finished;
}

export default helper(idDoneCount);
