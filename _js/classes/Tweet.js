var Tweet = (function(){

    function Tweet(text){

        console.log('tweet aangemaakt');

        this.text = text;
        this.template = tpl.tweet;

    }
    
    Tweet.prototype.render = function(){
        this.el = this.template({
            text: this.text,
            date: new Date()
        });

        return this.el;
        // jquery => this.$el = $(this.el);

    };


    return Tweet;


}());
