$(document).ready(function(){

    $("#add").on("click", function(e){
        e.preventDefault();

        let input = $("#input").val();
        if(input.length > 0){
        $("#todo > ul").append("<li>" + input + "</li>");

        $("#input").val("");
        }
    });

    $("#todo > ul").delegate("li", "click", function(){

        $("#done > ul").append(this);
        $("#todo > ul").remove(this);

    });

});