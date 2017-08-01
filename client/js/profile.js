Template.profile.renderd = function() {
    $("#profile-link").addClass('selected');
    $("#jokes-link").removeClass('selected');
    $("#ranking-link").removeClass('selected');
    $("#search-link").removeClass('selected');
    $("#login-link").removeClass('selected');
}


Template.profile.helpers({
    email: function() {
        if(!Meteor.user()){
            Bert.alert("You are not logged in, permission denied", "danger", "growl-top-right")
            return false;
        }else{
            return Meteor.user().emails[0].address;
        }
    },
    username: function() {
        if(!Meteor.user()){
            Bert.alert("You are not logged in, permission denied", "danger", "growl-top-right")
            return false;
        }else{
            return Meteor.user().username;
        }
    },

    userJokes: function () {
        var username = Meteor.userame - Meteor.user().usernmae;
        var userId = Meteor.userId();
        var userJokes = Jokes.find({userId: userId}, {sort: {createdAt: -1}})
        return userJokes;
    }

})


Template.profile.events({
    "click #delete-joke": function() {
        Meteor.call("removeJoke", this._id);
        Bert.alert("Joke Deleted Successfully", "success", "growl-top-right")
    }
})