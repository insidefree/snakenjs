const Promise = require('promise')

const applyForVisa = (visa) => {
    console.log("Pending visa...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve(visa) : reject("You don't have enough documents")
        }, 2000)
    })
}

const getVisa = (visa) => {
    console.log(`Visa was got ${visa.name}`)
    return Promise.resolve(visa)
}

const bookHotel = (visa) => {
    console.log(`Your visa is ${visa.name}, please wait, ordering has started`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Booking was complete`);
            resolve({ name: "Plaza Hotel" })
        }, 2000)
    })
}

const bookTickets = (hotel) => {
    console.log(`Buying tickets to ${hotel.name}`);
}

applyForVisa({ name: "visa" })
    .then(getVisa)
    .then(bookHotel)
    .then(bookTickets)
    .catch((error) => { console.log(error) })