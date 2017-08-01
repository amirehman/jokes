Template.profile.renderd = function() {
    $("#profile-link").addClass('selected');
    $("#jokes-link").removeClass('selected');
    $("#ranking-link").removeClass('selected');
    $("#search-link").removeClass('selected');
    $("#login-link").removeClass('selected');
};

Template.jokes.helpers({
    jokes: function() {
        var jokes = Jokes.find({}, {sort: {createdAt: -1}});
        return jokes;
    }
})

Template.jokes.events({
    "click #laugh": function() {
        Bert.alert("You Clicked Laugh", "info", "growl-top-right")
    },
    "click #frown": function() {
        Bert.alert("You Clicked Frown", "info", "growl-top-right")
    },
    "click #puke": function() {
        Bert.alert("You Clicked Puke", "info", "growl-top-right")
    }
})