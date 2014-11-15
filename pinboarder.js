var api_token = process.env.PINBOARDTOKEN;

Posts = {
  getAll: function(tag){
    return Http.get('https://michaelcolenso:api_token@api.pinboard.in/v1/posts/all' + tag);    
  }
}
