function checkPass(){

    let checkLoop = prompt('please enter your password. The password is abc, but try some wrong one first to get used to the loop')
    let pass = 'abc'

    while (checkLoop !== pass){
        checkLoop = prompt('please enter your password')
        
    }
    document.write("<h1>You're in!</h1>")
}

function displayBooks(){
    let books = ['the hobbit', 'the fellowship of the ring', 'the two towers', 'the return of the king']

    document.write("<p>here are the books on your shelf</p>")

    for(let i = 0; i < books.length; i++){
        document.write(`<p>${books[i]}</p>`)
    }
}


checkPass()
displayBooks()