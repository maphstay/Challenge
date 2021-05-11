/** CHECK PALINDROME */
function checkPalindrome() {
    let palInput = document.getElementById("palin").value
    let showResult = document.getElementById("result")
    let divres = document.getElementById("divres")
    let result1 = palInput.normalize('NFD').replace(/[\u0300-\u036f]|[^a-zA-Zs]/g, '').toLowerCase().split('').join('')
    let result2 = result1.split('').reverse().join('')

    if (!palInput) {
        return window.alert("Fill Palindrome Checker field correctly.")
    } else {
        if (result1 === result2) {
            return divres.style.visibility = "visible", showResult.innerHTML = "It's a palindrome !"
        } else {
            return divres.style.visibility = "visible", showResult.innerHTML = "It isn't a palindrome !"
        }
    }
}
/** CHECK STRING INFORMATIONS */
function checkString() {
    let strInput = document.getElementById("str").value
    let showResult = document.getElementById("result")
    let allResults = []
    let result1 = strInput.length

    /** CHECK EVEN OR ODD */
    if (result1 % 2 === 0) {
        allResults[0] = "It's even!"
    } else {
        allResults[0] = "It's odd!"
    }
    
    /** CHECK IT'S A PRIME */
    if (result1) {
        if(result1!=1){
            for (var i=2, c=0; i<=result1; i++) {
                if (result1 % i === 0) {
                    c++
                }
            }
            if (c > 1) {
                allResults[1] = "<p>It isn't a prime!</p>"
            } else {
                allResults[1] = "<p>It's a prime!</p>"
            }
        } else {
            allResults[1] = "<p>It isn't a prime!</p>"
        }
    } else {
        return window.alert("Fill String Informations field correctly.")
    }
    
    /** RETURN FOO ON 5 MULTIPLES */
    let foo = strInput.split('')
    for(var i = 0; i <= foo.length; i++) {
        if(i >= 5 && i % 5 === 0) {
            foo[i-1] = "'foo'"
        }
    }
    allResults[2] = foo.join('')

    return divres.style.visibility = "visible", showResult.innerHTML = `<p>${allResults.join('')}</p>`
}

/** CHECK DATE AND HOUR OF METHOD CALL */
function checkCall() {
    let callInput = document.getElementById("call").value
    let showResult = document.getElementById("result")
    
    if (!callInput) {
        return window.alert("Fill String Call Infos field correctly.")
    }

    let today = new Date()
    let day = today.getDate()
    let month = (today.getMonth() + 1)
    let year = today.getFullYear()
    let hour = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    let timestamp = `${day}/${month}/${year}, ${hour}:${minutes}:${seconds}hs`

    return divres.style.visibility = "visible", showResult.innerHTML = `Called at <p>${timestamp}</p>`
}

/** CLEAR FIELDS */
function clearFields() {
    let palInput = document.getElementById("palin")
    let strInput = document.getElementById("str")
    let callInput = document.getElementById("call")
    let showResult = document.getElementById("result")
    let divres = document.getElementById("divres")

    palInput.value = ''
    strInput.value = ''
    callInput.value = ''
    showResult.innerHTML = ''
    divres.style.visibility = "hidden"
}