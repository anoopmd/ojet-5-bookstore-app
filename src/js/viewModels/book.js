define(['ojs/ojcore', 'knockout', 'jquery',
  'services/book',
  'services/books',
  'ojs/ojknockout',
  'ojs/ojcollectiontabledatasource', 'ojs/ojtable',
  'ojs/ojcollectionpagingdatasource',
  'ojs/ojpagingtabledatasource', 'ojs/ojpagingcontrol',
  'promise', 'ojs/ojlistview', 'ojs/ojmodel'],
 function(oj, ko, $, Book, Books) {
  
    function BooksViewModel() {
      var self = this;

      this.books = new Books();
      this.books
        .fetch({
          startIndex: 0,
          fetchSize: 5
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      this.datasource = new oj.CollectionTableDataSource(this.books);
      this.pagingDatasource = ko.observable();
      this.pagingDatasource(new oj.PagingTableDataSource(this.datasource));

      self.connected = function() {};
      self.disconnected = function() {};
      self.transitionCompleted = function() {};
    }

    return new BooksViewModel();
  }
);
