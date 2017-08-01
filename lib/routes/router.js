Router.configure({
    layoutTemplate: 'main_layout'
});

Router.map(function(){

    //Home Page
    this.route('Home Page', {
        path: '/',
        template: 'homepage'
    });

    //Jokes
    this.route('Jokes', {
        path: '/jokes',
        template: 'jokes'
    });

    //login
    this.route('Login', {
        path: '/login',
        template: 'login'
    });

    //signup
    this.route('Signup', {
        path: '/signup',
        template: 'signup'
    });


    //profile
    this.route('Profile', {
        path: '/profile',
        template: 'profile'
    });

    //Rankings
    this.route('Rankings', {
        path: '/rankings',
        template: 'rankings'
    });


    //Rankings
    this.route('Searach', {
        path: '/search',
        template: 'search'
    });




})