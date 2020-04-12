// courtesy of http://stackoverflow.com/questions/23475320/simulate-click-on-all-radio-buttons-and-loop-continuously
$(document).ready(function () {

    var i = 0;
    $radio = $('input[name="radio-btn"]');
    var len = $radio.length;
    // Every 5 seconds, click each radio button 
    var radioCycle = setInterval(function () {        
        $radio.eq(++i % len).click();
    }, 5000);

    $radio.first().click();
    
    /* Stops the radio buttons from rolling */
    $('#prev').click(function () {
        clearInterval(radioCycle);
    });
    $('#next').click(function () {
        clearInterval(radioCycle);
    });
    
    //mobile nav menu
   if(parent.document.getElementById("stdnav").style.display === ""){
        $("#minnavHead").contents().first().replaceWith("<strong>Click to see Emily Cassandra's Portfolio</strong>");
   };
   
    //code to handle hover events in mobile 
    if ("ontouchstart" in document.documentElement) {
        $('#minnavHead').on("click", function(){
            if(document.getElementById("subminnav").style.display === "none"){
                document.getElementById("subminnav").style.display = "list-item";
            } else{
                document.getElementById("subminnav").style.display = "none";
            }
        });
    };
});