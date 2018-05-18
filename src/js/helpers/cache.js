define(['ojs/ojcore'], function(oj){
  function Cache(){
    this.set = function(key, val) {
      window.localStorage.setItem(key, JSON.stringify(val));
    },
    this.get = function(key) {
      let val = window.localStorage.getItem(key);

      return JSON.parse(val);
    }
  }

  return new Cache();
});