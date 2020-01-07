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


let guessName = [];
let numBuffer = [];
let luckyName = [];
function btnAddName() {
    if (document.getElementById("username").value == "") {
        alert("กรุณากรอกชื่อผู้เข้าร่วมงาน");
    }
    else {
        guessName.push(document.getElementById("username").value);
        document.getElementById("guess-name").innerHTML = "";
        guessName.forEach(printAllGuess);
        document.getElementById("username").value = "";
    }
}
function printAllGuess(item, index) {
    document.getElementById("guess-name").innerHTML += (index + 1) + " : " + item + "<br>";
}
function rndOnClick() {
    numBuffer = [];
    luckyName = [];
    if (guessName.length == 0) {
        alert("ไม่มีผู้ร่วมงาน");
    }
    if (document.getElementById("piece").value == 0) {
        alert("กรุณาใส่จำนวนของรางวัล");
    }
    else {
        for (i = 0 ; i < document.getElementById("piece").value ; i++) {
            if ( i == guessName.length) {
                break;
            }
            let temp = Math.floor(Math.random() * guessName.length);
            if (numBuffer.includes(temp)) {
                while (numBuffer.includes(temp)) {
                    temp = Math.floor(Math.random() * guessName.length);
                }
                numBuffer.push(temp);
                luckyName.push(guessName[temp]);
            }
            else {
                numBuffer.push(temp);
                luckyName.push(guessName[temp]);
            }
        }
        console.log(numBuffer);
        console.log(luckyName);
    }
    document.getElementById("luckyName").innerHTML = "";
    luckyName.forEach(printAllLuckyName);
}
function printAllLuckyName(item, index) {
    if (index == 0) {
        document.getElementById("luckyName").innerHTML += "Big Prize "+ " : " + item + "<br>";
    }
    else{
        document.getElementById("luckyName").innerHTML += "Reward " + (index) + " : " + item + "<br>";
    }
}

