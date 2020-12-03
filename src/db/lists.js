const faker = require('faker')

export const resultTableHeads = [
    {
        name: 'Segelflygkombination',
        segment: 'combi',
        heads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number',
                exampleValue: 1
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string',
                exampleValue: faker.name.findName()
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['ÖSFK', 'BSFK', 'SSFK', 'FBSK'])
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['Allmän', 'Class 1', 'Class 2'])
            },{
                name: 'Höjd',
                collapsable: false,
                icon: '',
                onHover: 'Höjdvinst',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Distans',
                collapsable: false,
                icon: '',
                onHover: 'Distans',
                inputType: 'number',
                exampleValue: faker.random.number(1000,30000)
            },{
                name: 'Hastighet',
                collapsable: false,
                icon: '',
                onHover: 'Hastighet',
                inputType: 'number',
                exampleValue: faker.random.number(1000,40000)
            },{
                name: 'Total',
                collapsable: false,
                icon: '',
                onHover: 'Total points',
                inputType: 'number',
                exampleValue: faker.random.number(500,90000)
            }
            
        ]
    },{
        name: 'Höjdmomentet',
        segment: 'height',
        heads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number',
                exampleValue: 1
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string',
                exampleValue: faker.name.findName()
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['ÖSFK', 'BSFK', 'SSFK', 'FBSK'])
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['Allmän', 'Class 1', 'Class 2'])
            },{
                name: 'Res 1',
                collapsable: false,
                icon: '',
                onHover: 'Resultat 1',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Res 2',
                collapsable: false,
                icon: '',
                onHover: 'Resultat 2',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Res 3',
                collapsable: false,
                icon: '',
                onHover: 'Resultat 3',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Res 4',
                collapsable: false,
                icon: '',
                onHover: 'Resultat 4',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Summa',
                collapsable: false,
                icon: '',
                onHover: 'Summa',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            }
            
        ]
    },{
        name: 'Distansmomentet',
        segment: 'distance',
        heads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number',
                exampleValue: 1
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string',
                exampleValue: faker.name.findName()
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['ÖSFK', 'BSFK', 'SSFK', 'FBSK'])
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['Allmän', 'Class 1', 'Class 2'])
            },{
                name: 'Dist 1',
                collapsable: false,
                icon: '',
                onHover: 'Distans 1',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Poäng 1',
                collapsable: false,
                icon: '',
                onHover: 'Poäng 1',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },
            {
                name: 'Dist 2',
                collapsable: false,
                icon: '',
                onHover: 'Distans 2',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Poäng 2',
                collapsable: false,
                icon: '',
                onHover: 'Poäng 2',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Summa',
                collapsable: false,
                icon: '',
                onHover: 'Summa',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            }
        ]
    },{
        name: 'Ackumulerad distans',
        segment: 'total-distance',
        heads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number',
                exampleValue: 1
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string',
                exampleValue: faker.name.findName()
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['ÖSFK', 'BSFK', 'SSFK', 'FBSK'])
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['Allmän', 'Class 1', 'Class 2'])
            },{
                name: 'Dist',
                collapsable: false,
                icon: '',
                onHover: 'Distans',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Ack. Distans',
                collapsable: false,
                icon: '',
                onHover: 'Ackumulerad distans',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            }
        ]
    },{
        name: 'Hastighetsmomentet',
        segment: 'speed',
        heads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number',
                exampleValue: 1
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string',
                exampleValue: faker.name.findName()
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['ÖSFK', 'BSFK', 'SSFK', 'FBSK'])
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string',
                exampleValue: faker.random.arrayElement(['Allmän', 'Class 1', 'Class 2'])
            },{
                name: 'Hast 1',
                collapsable: false,
                icon: '',
                onHover: 'Hastighet 1',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Poäng 1',
                collapsable: false,
                icon: '',
                onHover: 'Poäng 1',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },
            {
                name: 'Hast 2',
                collapsable: false,
                icon: '',
                onHover: 'Hastighet 2',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Poäng 2',
                collapsable: false,
                icon: '',
                onHover: 'Poäng 2',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            },{
                name: 'Summa',
                collapsable: false,
                icon: '',
                onHover: 'Summa',
                inputType: 'number',
                exampleValue: faker.random.number(500,14000)
            }
        ]
    }
]
