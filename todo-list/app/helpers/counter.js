import { helper } from '@ember/component/helper';

export function counter(params/*, hash*/) {
    var content = params[0].content;
    var state = params[1];
    var counter = 0;
    for(var i of content){
        if(i['__data']['isDone'] == state){
            counter++;
        }
    }
    
  return counter;
}

export default helper(counter);
