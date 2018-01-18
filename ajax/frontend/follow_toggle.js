const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') 
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState == 'followed') {
      this.$el.html('Unfollow');
    } else {
      this.$el.html("Follow");
    }
  }

  handleClick(e) {
    e.preventDefault();

    if (this.followState === 'followed') {

      this.followState = 'unfollowing';
      this.render();

      APIUtil.unfollowUser(this.userId).then(function() {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });


    } else if (this.followState === 'unfollowed') {

      this.followState = 'following';
      this.render();

      APIUtil.followUser(this.userId).then(function() {
        followToggle.followState = 'followed';
        followToggle.render();
      });
      
    }
  }

  
}

module.exports = FollowToggle;