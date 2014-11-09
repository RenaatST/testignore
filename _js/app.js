/* globals Messager: true */

var messager;

function init(){

    messager = new Messager($("#container"));

    messager.init();

}

init();
