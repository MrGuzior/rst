const resultLists = [
    {
        name: 'Segelflygkombination',
        path: 'combi',
        tableHeads: [
            {
                name: '#',
                collapsable: true,
                icon: '',
                onHover: 'Position',
                inputType: 'number'
            },{
                name: 'Pilot',
                collapsable: false,
                icon: '',
                onHover: 'Pilot namn',
                inputType: 'string'
            },{
                name: 'Klubb',
                collapsable: true,
                icon: '',
                onHover: 'Flygklubb',
                inputType: 'string'
            },{
                name: 'Klass',
                collapsable: true,
                icon: '',
                onHover: 'Tävlingsklass',
                inputType: 'string'
            },{
                name: 'Höjd',
                collapsable: false,
                icon: '',
                onHover: 'Höjdvinst',
                inputType: 'number'
            },{
                name: 'Distans',
                collapsable: false,
                icon: '',
                onHover: 'Distans',
                inputType: 'number'
            },{
                name: 'Hastighet',
                collapsable: false,
                icon: '',
                onHover: 'Hastighet',
                inputType: 'number'
            },{
                name: 'Total',
                collapsable: false,
                icon: '',
                onHover: 'Total points',
                inputType: 'number'
            }
            
        ]
    }
]

export default resultLists