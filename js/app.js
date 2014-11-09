(function(){

this["tpl"] = this["tpl"] || {};

this["tpl"]["form"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n    <fieldset>\n        <legend>Add Message</legend>\n        <textarea name=\"entry\" cols=\"50\" rows=\"5\" id=\"text\"></textarea>\n        <input type=\"submit\" value=\"tweet\" name=\"submit\" id=\"submit\"/>\n    </fieldset>\n</form>";
  });

this["tpl"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <h2>";
  if (stack1 = helpers.tagline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.tagline); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n</header>";
  return buffer;
  });

this["tpl"]["tweet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"tweet\">\n    <p class=\"texttweet\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.text); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"meta\">by naam on ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.format_date || (depth0 && depth0.format_date)),stack1 ? stack1.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "format_date", (depth0 && depth0.date), options)))
    + "</p>\n</div>";
  return buffer;
  });

/* globals Tweet: true */
var DrunkTwitter = (function(){



    function DrunkTwitter($sourceElement){
        this.maxChars = 140;
        this.$sourceElement = $sourceElement;
        this.info = {
            title: "Drunk Twitter",
            tagline: "For all those nights you shouldn't tweet"
        };


    }

    DrunkTwitter.prototype.init = function(){
        this.render();
        this.events();

    };


    return DrunkTwitter;

})();


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


/* globals Handlebars:true */
/* globals moment:true */

Handlebars.registerHelper("format_date",function(date){
    return moment(date).format("DD MMMM YYYY, HH:mm");
});


Handlebars.registerHelper('dedrunk', function(text) {
    return text.toLowerCase();
});

/* globals Messager: true */

var messager;

function init(){

    messager = new Messager($("#container"));

    messager.init();

}

init();


})();