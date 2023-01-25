let tabOne;
let tabTwo;
let tabThree;
let tabFour;
let chats;
let searchBar;
let RemChat;
let Contact;
let cntnctName;
let respone;
let button;
let CntIcon;
let mesg;
let messages;
let footer;

function declare() {
    tabOne = document.getElementById("underlineOne")
    tabTwo = document.getElementById("underlineTwo")
    tabThree = document.getElementById("underlineThree")
    tabFour = document.getElementById("underlineFour")
    chats = document.getElementById('contacts')
    searchBar = document.getElementById('search')
    RemChat = document.getElementById('remChat')
    Contact = document.getElementById('contacts')
    cntnctName = document.getElementById('contactName')
    respone = document.getElementById('responceChat')
    button = document.getElementById('closeButton')
    CntIcon = document.getElementById('ContactIcon')
    mesg = document.getElementById('messages')
    messages = document.getElementById('chatOne')
    footer = document.getElementById('bottom')
}

function showUnderlineOne() {
    declare()
    tabOne.style.display = "block"
    tabTwo.style.display = "none"
    tabThree.style.display = "none"
    tabFour.style.display = "none"
    chats.style.display = "none"
    searchBar.style.display = 'flex'
    RemChat.style.display = 'none'
    Contact.style.backgroundColor = null
    cntnctName.style.color = null
    CntIcon.style.width = null
    CntIcon.style.height = null
    messages.style.display = null
    footer.style.display = null
    respone.style.display = null
}

function showUnderlineTwo() {
    declare()
    tabTwo.style.display = "block"
    tabOne.style.display = "none"
    tabThree.style.display = "none"
    tabFour.style.display = "none"
    chats.style.display = "flex"
}

function showUnderlineThree() {
    declare()
    tabThree.style.display = "block"
    tabOne.style.display = "none"
    tabTwo.style.display = "none"
    tabFour.style.display = "none"

    chats.style.display = "none"
    searchBar.style.display = 'flex'
    RemChat.style.display = 'none'
    Contact.style.backgroundColor = null
    cntnctName.style.color = null
    CntIcon.style.width = null
    CntIcon.style.height = null
    messages.style.display = null
    footer.style.display = null
    respone.style.display = null

}
function showUnderlineFour() {
    declare()
    tabFour.style.display = "block"
    tabOne.style.display = "none"
    tabTwo.style.display = "none"
    tabThree.style.display = "none"

    chats.style.display = "none"
    searchBar.style.display = 'flex'
    RemChat.style.display = 'none'
    Contact.style.backgroundColor = null
    cntnctName.style.color = null
    CntIcon.style.width = null
    CntIcon.style.height = null
    messages.style.display = null
    footer.style.display = null
    respone.style.display = null
}

function chatoneOpen() {
    declare()
    searchBar.style.display = 'none'
    RemChat.style.display = "grid"
    Contact.style.backgroundColor = "black"
    cntnctName.style.color = 'white'
    respone.style.display = 'none'
    button.style.display = 'block'
    CntIcon.style.width = '35px'
    CntIcon.style.height = '35px'
    messages.style.display = 'block'
    footer.style.display = 'flex'
}

function chatoneClose() {
    declare()
    searchBar.style.display = null
    RemChat.style.display = "none"
    respone.style.display = null
    Contact.style.backgroundColor = null
    cntnctName.style.color = null
    CntIcon.style.width = null
    CntIcon.style.height = null
    messages.style.display = null
    footer.style.display = null
}
function accordianOne() {
    declare()
    mesg.classList.toggle('close')
}
function accordianTwo() {
    let mesg = document.getElementById('messagesTWo')
    mesg.classList.toggle('close')
}
function accordianthree() {
    let mesg = document.getElementById('messagesthree')
    mesg.classList.toggle('close')
}

function accordianFour() {
    let mesg = document.getElementById('messagesFour')
    mesg.classList.toggle('close')
}
function accordianOneFive() {
    let mesg = document.getElementById('messagesFive')
    mesg.classList.toggle('close')
}

function accordianSix() {
    let mesg = document.getElementById('messagesSix')
    mesg.classList.toggle('close')
}
function accordianSeven() {
    let mesg = document.getElementById('messagesSeven')
    mesg.classList.toggle('close')
}

function accordianEight() {
    let mesg = document.getElementById('messagesEight')
    mesg.classList.toggle('close')
}