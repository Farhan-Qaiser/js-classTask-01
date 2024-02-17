//Welcome Message

function welcomeMessage() {
    let name = propmt("Enter your name")
    alert("Welcome" + " " + name)
}

welcomeMessage()


//Quote Generator

function generateQuote() {
    let quotes = ["You have within you, right now, everything you need to deal with whatever the world can throw at you","Character is power", "Never be limited by other people's limited imaginations", "Only a life lived for others is a life worthwhile", "The only impossible journey is the one you never begin" ]
    let i = Math.floor(Math.random() * 5)
    alert(quotes[i])
}

generateQuote()

//Random number generator

function generateRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 100)
    alert(randomNumber);
}

generateRandomNumber()