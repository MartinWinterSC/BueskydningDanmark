export default [
    {label: 'Home', to: '/'},
    
    {
        label: 'Community',
        to: '/communityMainView',
        children: [
            {label: 'Nyheder', to: '/newsView'},
            {label: 'Artikler', to: '/articlesView'},
            {label: 'Forum', to: '/ForumView'},
            {label: 'Arkiv', to: null},
        ]
    },
    { label: 'Kalender', to: '/CalendarMainView'},

    {
        label: 'Stævner',
        to: null,
        children: [
            {label: 'Stævne afholdelse', to: null},
            {label: 'Afstand & aldersklasser', to: null},
            {label: 'Danske Mestre', to: null},
            {label: 'Combat archery', to: null},
            {label: 'Andre stævner', to: null},
        ]
    },

    {
        label: 'Bredde',
        to: null,
        children: [
            {label: 'Certified youth archerclub', to: null},
            {label: 'Archery for schools', to: null},
            {label: 'DIF', to: null},
            {label: 'Soldaterprojekt', to: null},
            {label: 'Membersystem', to: null},
            {label: 'Equipment', to: '/EquipmentView'},
            {label: 'Webshop', to: null},
        ]
    },


    {
        label: 'Elite',
        to: '/EliteMainView',
        children: [
            {label: 'National Team', to: '/NationalTeamView'},
            {label: 'Archerrepresentative', to: null},
            {label: 'Talent center', to: null},
            {label: 'Talent development', to: null},
            {label: 'School and education', to: null},
            {label: 'Antidoping', to: null},

        ]
    },

    {
        label: 'Training',
        to: null,
        children: [
            {label: 'technical training', to: null},
            {label: 'Mental training', to: null},
        ]
    },

     {
        label: 'Information',
        to: null,
        children: [
            {label: 'ContactInformation', to: '/NationalTeamView'},
            {label: 'Clubs overview', to: null},
            {label: 'Committee', to: null},
            {label: 'Courses', to: null},
            {label: 'Federation', to: null},
            {label: 'Adminstration', to: null},
            {label: 'Sponsors', to: null},

        ]
    }
]