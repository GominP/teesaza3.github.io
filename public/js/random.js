// let arrayName = [];
// let numPrize = document.getElementById('piece').value;
// let arrayPrizeName = [];





// function btnAddName() {
//     let inner = document.getElementById('username').value

//     if (document.getElementById('username').value == "") {
//         alert("No people play this game")
        
//     }
//     else{
//         arrayName.push(document.getElementById('username').value)

//         // arrayName.forEach(btnListName);
//         // document.getElementById("username").value = "";
//         // document.getElementById("guessName").innerHTML = "";


//     }
    
    
// }

// function btnListName() {
//     // let tag = document.createElement('div')
//     // // let tag_tr = document.createElement('tr')
//     // // let tag_td = document.createElement('td')
//     // tag.setAttribute('class','l_name')
//     // // let inner = document.createTextNode("tee")
//     // tag.appendChild(inner)

//     // document.getElementById("guessName").innerHTML += (index + 1) + " : " + item + "<br>";



    
// }

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


let arrayName = [];
let numBuffer = [];
let rewardName = [];
function btnAddName() {

    if (document.getElementById("username").value == "") {
        window.alert("Please input Username");
    }

    else {
        arrayName.push(document.getElementById("username").value);
        document.getElementById("guess-name").innerHTML = "";
        arrayName.forEach(printAllGuess);
        document.getElementById("username").value = "";
    }
}
function printAllGuess(item, index) {
    document.getElementById("guess-name").innerHTML += (index + 1) + " : " + item + "<br>";
}
function btnRandom() {
    // numBuffer = [];
    // rewardName = [];
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
}
function showRewardUser(item, index) {
    if (index == 0) {
        document.getElementById("RewardName").innerHTML += "Big Prize "+ " : " + item + "<br>";
    }
    else{
        document.getElementById("RewardName").innerHTML += "Reward " + (index) + " : " + item + "<br>";
    }
}


