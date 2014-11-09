var Message = (function() {

	function Message(text){

		console.log("message");

        this.text = text;
        this.template = tpl.tweet;

    }

    Message.prototype.render = function(){
        this.el = this.template({
            text: this.text,
            date: new Date()
        });

		return this.el;
	};

	return Message;

}());