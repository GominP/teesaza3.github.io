$(document).ready(function(){
    console.log("Hello jquery")

    setTimeout(function(){

    $('h1.display-1').text('JQuery 101')
    }, 2000)

    setInterval(function(){
        var h1 = $('h1.display-1')

        h1.slideUp()
        h1.slideDown()

        }, 8000)

    $('button.clickme').on('click',function (){
        // console.log("button was clicked")
        var text = $('h1.display-1').text();
        $('h1.display-2').html(`<ul><li>${text}<></>`);
    })

    setTimeout(function(){
        $.ajax({
            url: 'data.json',
            dataType: 'json'
        }).done(function(res){
            // console.log(res);
            for(obj of res){
                console.log(obj.name+": "+ obj.color)
            }

        })
    }, 2000)

})