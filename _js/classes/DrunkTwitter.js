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
