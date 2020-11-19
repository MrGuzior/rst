

const faker = require('faker')
const fs = require('fs')

const userArray = Array.from({length:50},()=>({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    birthDay: faker.date.between('1959-01-01', '2000-01-05'),
    club: 'ÖSFK',
    email: faker.internet.email(),
    profilePicture: '',
    flights: []
}))

const flightsArray = Array.from({length:50},()=>({
    id: faker.random.uuid(),
    pilotId: faker.random.uuid(),
    pilotName: faker.name.findName(),
    date: faker.date.between('2020-01-01', '2020-12-12'),
    file: '.igc',
    details: {
        speed: faker.random.number({min:20, max:160}),
        distance: faker.random.number({min:15, max:899}),
        height: faker.random.number({min: 100, max: 7000}),
        comment: 'no comment'
    }
}))

const db = {
    users: [...userArray],
    flights: [...flightsArray]
}

const json = JSON.stringify(db)

fs.writeFile('./db.json', json, 'utf8', (err)=>{
    if (err) console.log(err)
})
