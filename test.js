$(document).ready(function(){
    $('input:text').val("");
    /*if ($('input:text').val() == ''){
        $(this).addClass('focusing');
    }
    $('input:text').focus(function(){
        $(this).val("");
       // $(this).addClass('focusing');
    });

    $("input:text").focusout(function(){
        if (!$(this).val()) {
             // alert("This field is required");
              $(this).removeClass('focusing');
              $(this).focus();
              $("#flech").hide();
        }else{
            //$(this).css("opacity: 1;            background-color: #FFF;            border: none;    ");
              $(this).addClass('focusing');
        }
    });*/

    /******************T0&T1&T2&T3*******************/
    $("#flech").hide();
    $("#T1").hide();
    $("#T2").hide();
    $("#T3").hide();
   var test=0;
   var testCal=0;
    $(".search__departure-input").focus(function(){
        test=1;
        $("#flech").show();
        $("#T1").show();
        $("#T0").hide();
        $("#T2").hide();
        $("#T3").hide();
        $(".search__title").text("Choisissez une gare de depart");
        $(".split-panel__arrow").css("margin-top","70px");
    });
    $(".search__arrival-input").focus(function(){
         test=2;
        $("#flech").show();
        $("#T1").show();
        $("#T0").hide();
        $("#T2").hide();
        $("#T3").hide();
        $(".search__title").text("Choisissez une gare d'arrivée");
        $(".split-panel__arrow").css("margin-top","115px");

        if($(".search__via-input").is(":visible")){
            $(".split-panel__arrow").css("margin-top","160px");
        }
    });
    $(".search__via-input").focus(function(){
        test=3;
       $("#flech").show();
       $("#T1").show();
       $("#T0").hide();
       $("#T2").hide();
       $("#T3").hide();
       $(".search__title").text("Choisissez une gare intermédiaire");
       $(".split-panel__arrow").css("margin-top","115px");
   });

    $(".search__departure-date-input").focus(function(){
        testCal=1;
        $('.search__timeslots time').removeClass('selected');
        $(".search__calendar tbody td").removeClass('selected');
        $("#flech").show();
        $("#T1").hide();
        $("#T0").hide();
        $("#T2").show();
        $("#T3").hide();
        $(".split-panel__arrow").css("margin-top","190px");
        $(".search__title").text("Choisissez la date du départ");
        if($(".search__via-input").is(":visible")){
            $(".split-panel__arrow").css("margin-top","230px");
        }
    });
    $(".search__return-date-input").focus(function(){
        testCal=2;
        $(".search__calendar tbody td").removeClass('selected');
        $('.search__timeslots time').removeClass('selected');
        $("#flech").show();
        $("#T1").hide();
        $("#T0").hide();
        $("#T3").hide();
        $("#T2").show();
        $(".split-panel__arrow").css("margin-top","230px");
        $(".search__title").text("Choisissez la date du retour");
        if($(".search__via-input").is(":visible")){
            $(".split-panel__arrow").css("margin-top","270px");
        }
    });
    $(".search__participants-input").focus(function(){
        $("#flech").show();
        $("#T0").hide();
        $("#T1").hide();
        $("#T2").hide();
        $("#T3").show();
        $(".split-panel__arrow").css("margin-top","300px");
        if($(".search__via-input").is(":visible")){
            $(".split-panel__arrow").css("margin-top","350px");
        }
    });

    /****************Button VIA******************/

    $(".search__via-input").hide();
    $("#suppVia").hide();

    $(".search__list-button").click(function(){
        $(".search__via-input").show();
        $("#suppVia").show();
        $("#addVia").hide();
    });
    $("#suppVia").click(function(){
        $(".search__via-input").hide();
        $("#suppVia").hide();
        $("#addVia").show();
    });

    /*****************Choix*******************/

    $(".search__list-link").click(function(){
        var choix=$(this).text();
        if(test==1){
            $(".search__departure-input").val(choix);
        }
        if(test==2){
            $(".search__arrival-input").val(choix);
        }
        if(test==3){
            $(".search__via-input").val(choix);
        }  
    });

    /*****************Calender*******************/

    $(".search__calendar tbody td").click(function(){
        var day=$(this).text();
        if($(this).hasClass("selected")){
            $(this).removeClass('selected');
        }
        else{
            $(this).addClass('selected');
            if(testCal==1){
                $(".search__departure-date-input").val('Vendredi'+day+'september 2018');
            }
            if(testCal==2){
                $(".search__return-date-input").val('Vendredi'+day+'september 2018');
            }
        }
    });
    $(".search__timeslots time").click(function(){
        var hour=$(this).text();
        if($(this).hasClass("selected")){
            $(this).removeClass('selected');
        }
        else{
            $(this).addClass('selected');
            if(testCal==1){
                $(".search__departure-date-input").val( $(".search__departure-date-input").val()+'à partir de'+hour+'00');
            }
            if(testCal==2){
                $(".search__return-date-input").val($(".search__return-date-input").val()+'à partir de'+hour+'00');
            }          
        }
    });

    /*****************Select*******************/
    $("#select").click(function(){
        var sel= $('#select').find(":selected").text();
        $(".search__participants-input").val('1 '+sel);
    });


});