import DS from 'ember-data';

export default DS.Model.extend({
       name:DS.attr("string"),
       isDone:DS.attr("string"),
       created_at:DS.attr("string"),
       updated_at:DS.attr("string")
});
