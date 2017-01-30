// const applyForVisa02 = (visa, response, reject) => {
//     console.log("Pending visa...")
//     setTimeout(() => {
//         Math.random() > .5 ? response(visa) : reject("Not enough documents")
//     }, 2000)
// }

// const buyTickets = (visa, response, reject) => {
//     setTimeout(()=>{
//         Math.random() > .5 ? response(visa) : reject("error")
//     }, 2000)
// }
// const bookHotel02 = () => {

// }

// applyForVisa({ id: "visaId" }, (visa) => {
//     console.log(`You got visa: ${visa.id}`)
//     buyTickets(visa, (visa)=>{
//         console.log("Tickets ready")
//     }, (error)=>{
//         console.log(error);
//     })
// }, (reason) => {
//     console.log(reason);
// })