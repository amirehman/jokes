Template.sidebar.render = function(){
    
}


Template.sidebar.events({
    "click .logout": function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert(err.reason, "danger", "grwol-top-right");
            }else{
                Router.go('/');
                Bert.alert("Successfull Logout", "success", "grwol-top-right");
            }
        })
    }
})