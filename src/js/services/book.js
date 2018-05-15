define(['ojs/ojcore', 'ojs/ojmodel'], function(oj){
  BookModel =  oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/book',
    idAttribute:'id'
  });
  
  return BookModel;
});