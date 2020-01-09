// $(document).ready(function(){
//     console.log("Hello jquery")

//     setTimeout(function(){

//     $('h1.display-1').text('JQuery 101')
//     }, 2000)

//     setInterval(function(){
//         var h1 = $('h1.display-1')

//         h1.slideUp()
//         h1.slideDown()

//         }, 8000)

//     $('button.clickme').on('click',function (){
//         // console.log("button was clicked")
//         var text = $('h1.display-1').text();
//         $('h1.display-2').html(`<ul><li>${text}<></>`);
//     })

//     setTimeout(function(){
//         $.ajax({
//             url: 'data.json',
//             dataType: 'json'
//         }).done(function(res){
//             // console.log(res);
//             for(obj of res){
//                 console.log(obj.name+": "+ obj.color)
//             }

//         })
//     }, 2000)

// })


$(document).ready(function(){
    let arrayName = [];
    let numBuffer = [];
    let rewardName = [];
    console.log("on")
    $("#addList").click(function (){
        console.log("click")
        if (document.getElementById("username").value == "") {
            window.alert("Please input Username");
        }
        else {
            arrayName.push(document.getElementById("username").value);
            document.getElementById("guess-name").innerHTML = "";
            arrayName.forEach(printAllGuess);
            $("#username").val("");

        }        

    });

    function printAllGuess(item, index) {
        document.getElementById("guess-name").innerHTML += (index + 1) + " : " + item + "<br>";
    }

    $("#btnRandom").click(function(){
        if (arrayName.length == 0) {
            alert("There are no participants.");
        }
        if (document.getElementById("piece").value == 0) {
            alert("Please input your reward");
            
        }
        else {
            for (i = 0 ; i < document.getElementById("piece").value ; i++) {
                if ( i == arrayName.length) {
                    break;
                }
                let temp = Math.floor(Math.random() * arrayName.length);
                if (numBuffer.includes(temp)) {
                    while (numBuffer.includes(temp)) {
                        temp = Math.floor(Math.random() * arrayName.length);
                    }
                    numBuffer.push(temp);
                    rewardName.push(arrayName[temp]);
                }
                else {
                    numBuffer.push(temp);
                    rewardName.push(arrayName[temp]);
                }
            }
            console.log(numBuffer);
            console.log(rewardName);
        }
        document.getElementById("RewardName").innerHTML = "";
        rewardName.forEach(showRewardUser);
    })

    function showRewardUser(item, index) {
        if (index == 0) {
            document.getElementById("RewardName").innerHTML += "Big Prize "+ " : " + item + "<br>";
        }
        else{
            document.getElementById("RewardName").innerHTML += "Reward " + (index) + " : " + item + "<br>";
        }
    }

    
        



})