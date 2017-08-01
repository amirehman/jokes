if(Meteor.isServer) {
    Meteor.publish('Jokes', function() {
        if(!this.userId) {
            return false;
            throw new Meteor.Error('not authorized');
        }else{
            return Jokes.find();
        }
    })
}