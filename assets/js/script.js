$(document).ready(getOccupationGroup());
       
function getOccupationGroup()
{            
    var occupationURL = "http://sandbox.gibm.ch/berufe.php";

    $('#occupation').empty().append('<option value="">Ihre Berufsauswahl...</option>');

    $.getJSON(occupationURL, function(occutpationsData){
        $.each(occutpationsData,function(occupationIndex,occupationData){
            $('<option value="' + occupationData.beruf_id + '">' + occupationData.beruf_name + '</option>').appendTo($('#occupation'));
        })
    })
}

$('#occupation').change(function()
{
   

    if(this.value !== "" | this.value !== "Ihre Berufsauswahl...")
    {
        getClass();
        $('#classSelect').fadeTo("slow", 1);
        $('.dateChanger').fadeTo("slow", 0);
        $('#timeTableAppearance').fadeTo("slow", 0);
    }
    else
    {

    }
    $('#classSelect').fadeIn("slow", 1);
})
        
function getClass()
{
    
    $("#class").empty();

    var occupationId = $('#occupation').val();

    if (occupationId >= 0 && occupationId !== "") {

       var classSelection = '<option value="">Ihre Klassenauswahl...</option>';
                            
        $('#class').append(classSelection);

        $.getJSON('http://sandbox.gibm.ch/klassen.php','beruf_id=' + occupationId,function(classesData){
            $.each(classesData,function(classId,classData)
            {
                $('<option value="' + classData.klasse_id + '">' + classData.klasse_longname + '</option>').appendTo($('#class'));
            });
        });
    }
}

$('#class').change(function(){
    if(this.value !== "" | this.value !== "Ihre Klassenauswahl...")
    {
        getTeacher();
        getTimeTable();
    }


});


function getTeacher()
{
    var teacherSelection = '<option value="">Ihre Lehrperson...</option>';
    var occupationId = $('#occupation').val(); 
    var classId = $('#class').val();

    $('#teacher').append(teacherSelection);

    $.getJSON('http://sandbox.gibm.ch/tafel.php','klasse=' + occupationId,function(classesData){
        $.each(classesData,function(classId,classData)
        {
            $('<option value="' + classData.klasse_id + '">' + classData.klasse_longname + '</option>').appendTo($('#teacher'));
        });
    });
}
        
function getTimeTable()
{
    $('.dateChanger').fadeTo("slow", 1);
    $('#timeTableAppearance').fadeTo("slow", 1)
}


function setCookies()
{

}

function getCookies()
{
    
}