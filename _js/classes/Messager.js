/* globals Message: true */

var Messager = (function() {

	function Messager($sourceElement){

		this.$sourceElement = $sourceElement;
		this.info = {
			title: "Give Me Something",
			tagline: "Or Something else"
		};


	}

	Messager.prototype.init = function() {
		this.render();
		this.events();
	};

	Messager.prototype.render = function() {
		this.$sourceElement.append(tpl.header(this.info));
		this.$sourceElement.append(tpl.form);
		this.$sourceElement.append("<div id=\"messages\">Messages</div>");
		console.log("render");

	};


	Messager.prototype.events = function() {
		console.log("events");
        $("form").submit({self: this},this.send);


		
	};

    Messager.prototype.send = function(e){
        e.preventDefault();

        console.log("send");
        var message = new Message($("#text").val());
        $("#messages").prepend(message.render());

    };






	return Messager;

}());