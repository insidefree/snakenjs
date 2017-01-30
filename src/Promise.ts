const applyForVisa = (visa, resolve, reject) => {
    console.log("Pending visa...")
    setTimeout(() => {
        Math.random() > .5 ? resolve(visa) : reject("You don't have enough documents")
    }, 2000)
}

const bookHotel = (visa, resolve, response) => {

}

const bookTickets = () => {

}

applyForVisa({id: "visa"}, (visa) => {
    console.log("You got visa")
    bookHotel(visa, (reservation) => {

    }, (error) => {

    })
}, (reason) => {
    console.error(reason);
})