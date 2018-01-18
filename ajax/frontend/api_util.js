const APIUtil = {

  followUser: function(id) {
    APIUtil.changeFollowStatus(id, 'POST');
  },
  unfollowUser: function(id) {
    APIUtil.changeFollowStatus(id, 'DELETE');
  },
  changeFollowStatus: function(id, method) {
    $.ajax({
      url: '/users/${id}/follow',
      dataType: 'json',
      method
    })
  },
  searchUsers: function(query) {
    $.ajax({
      url: '/users/search',
      dataType: 'json',
      method: { query }   
    })
  },
  createTweet: function(data) {
    $.ajax({
      url: '/tweets',
      method: 'POST',
      dataType: 'json',
      data
    })
  },
  fetchTweet: function() {
    $.ajax({
      url: '/feed',
      method: 'GET',
      dataType: 'json',
      data
    })
  }
}

module.exports = APIUtil;