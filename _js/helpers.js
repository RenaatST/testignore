/* globals Handlebars:true */
/* globals moment:true */

Handlebars.registerHelper("format_date",function(date){
    return moment(date).format("DD MMMM YYYY, HH:mm");
});


Handlebars.registerHelper('dedrunk', function(text) {
    return text.toLowerCase();
});