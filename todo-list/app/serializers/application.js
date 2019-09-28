import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  isNewSerializerAPI: true,
  
  normalize(record, options){
       var json = this._super.apply(this, arguments);
       json.id = options.id
       return json;
  }
});
