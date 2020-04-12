$(window).load(function(){
    var windowHeight = $(window).innerHeight();
    var headerHeight = $(".headinglabels").innerHeight();

    var codeHeight = windowHeight - headerHeight;
    $(".codecontainers").height(codeHeight + "px");
    
    var windowWidth = $(window).innerWidth();
    
    var codeDiv = 3;
    var divWidth = (windowWidth-8)/codeDiv;
    $("#HTMLcode").width(divWidth+"px");
    $("#CSScode").width(divWidth+"px");
    //$("#JScode").width(divWidth+"px");
    $("#Resultcode").width(divWidth+"px");
});

$(function(){
    $(".toggle").click(function(){
        $(this).toggleClass("selected");
        var activeDiv = $(this).html();
        /*if(activeDiv === "JavaScript"){
            activeDiv = "JS";
        }*/
        $("#"+activeDiv+"code").toggle();
    
        var windowWidth = $(window).innerWidth();
        var visDiv = 0;
        
        if($("#HTMLcode").is(":visible")){
            visDiv++;
        }
        if($("#CSScode").is(":visible")){
            visDiv++;
        }
        /*if($("#JScode").is(":visible")){
            visDiv++;
        }*/
        if($("#Resultcode").is(":visible")){
            visDiv++;
        }

        var width = (windowWidth-8)/visDiv;
        $("#HTMLcode").width(width+"px");
        $("#CSScode").width(width+"px");
        //$("#JScode").width(width+"px");
        $("#Resultcode").width(width+"px");
    });
});

$(function(){
    $("#triggerbutton").click(function(){
       $("iframe").contents().find("html").html("<style>" + $("#cssarea").val() + "</style>" + $("#htmlarea").val());
       //document.getElementById("resultarea").contentWindow.eval($("#jsarea").val());
    });
});