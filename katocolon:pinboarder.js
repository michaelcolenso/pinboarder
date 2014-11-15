Posts = {
  getAll: function(tag){
    return Http.get('https://michaelcolenso:A600E59BB7E38480F0B0@api.pinboard.in/v1/posts/all' + tag);    
  }
}