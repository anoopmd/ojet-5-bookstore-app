define(['ojs/ojcore', 'services/book', 'helpers/user', 'helpers/signals', 'ojs/ojmodel'], function(oj, BookModel, UserHelper, Signals){
  let oauth = new oj.OAuth('Authorization' );
  let token = UserHelper.getAccessToken();
  oauth.setAccessTokenResponse(token);

  console.log(token);
  console.log(typeof token);

  if(!token) {
    Signals.user.loggedOut.dispatch();
    oj.Router.rootInstance.go('login');
  }

  Signals.user.loggedIn.add(function(){
    token = UserHelper.getAccessToken();
    console.log(token);
    oauth.setAccessTokenResponse(token);
  });

  let BookCollection = oj.Collection.extend({
    url: 'http://localhost:5000/api/book',
    model: BookModel,
    oauth: oauth,
    customURL: function(operation, collection, options) {
      if(!isNaN(options.fetchSize) && !isNaN(options.startIndex)) {
        return `http://localhost:5000/api/book?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
      }

      return 'http://localhost:5000/api/book';
    },
    customPagingOptions: function(response) {
      if(!response || !response.data) {
        return response;
      }

      return {
        totalResults: response.total,
        limit: response.limit,
        count: response.data.length,
        offset: response.skip,
        hasMore: (response.skip + response.data.length) < response.total
      };
    }
  });
  
  return BookCollection;
});