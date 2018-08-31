describe('Book', function () {
  it('should successfully fecth the book', function (done) {
    require(['ojs/ojcore', 'knockout', 'jquery', 'web/js/services/book', 'mockjax'], function(oj, ko, $, Book, mockjax) {
      $.mockjax({
        url: 'http://localhost:5000/api/book/foo',
        type: 'GET',
        responseTime: 0,
        contentType: 'text/json',
        responseText: {
          status: "success",
          fortune: "Are you a mock turtle?"
        }
      });

      var book = new Book({
        id: 'foo'
      });

      book
        .fetch()
        .then(function(data) {
          expect(data).toEqual({
            status: "success",
            fortune: "Are you a mock turtle?"
          });
          done();
        })
        .catch(function(err) {
          console.log(err);
          done(err);
        });
    });
  });
});