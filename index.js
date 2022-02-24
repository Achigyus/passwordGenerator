// Defining variables
let passwordLength = document.getElementById("password-length")
let genPassword = document.getElementById("gen-password")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let thirdPassword = document.getElementById("third-password")
let fourthPassword = document.getElementById("fourth-password")
let listOfCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","(",")","[","]","{","}",",",".",";",":","`","~","/","_","?","=","+","-","'",'"',"<",">",]



// let randomNumber = Math.floor( Math.random() * 91 )
// firstPassword.value = listOfCharacters[randomNumber]
// console.log(randomNumber)
function generatePassword() {
    let password = ""
    let passwordLengthValue = parseInt( passwordLength.value )
    if (passwordLengthValue < 5 || passwordLengthValue > 20) {
        password = "Outside interval"
    } else {
        for (let i = 0; i < passwordLengthValue; i++) {
            let randomNumber = Math.floor( Math.random() * 91 )     
            password += listOfCharacters[randomNumber] 
        }
    }
    return password
}

function getAllPasswords() {
    firstPassword.value = generatePassword()
    secondPassword.value = generatePassword()
    thirdPassword.value = generatePassword()
    fourthPassword.value = generatePassword()
}



// Event Listeners
function copyElement(id) {
    var elem = document.getElementById(id)
    if (elem.value === "" || elem.value === "Outside interval") {
        alert("Please generate a password before copying")
    } else {
        elem.select();
        document.execCommand('copy');
        alert('Password copied');
    }
}
