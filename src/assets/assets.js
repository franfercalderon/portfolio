//Resources to be imported in different parts of the site
const skillsArrayLeft = [
    {
        img: 'html',
        displayName: 'HTML5',
        progress: 95
    },
    {
        img: 'css',
        displayName: 'CSS3',
        progress: 80
    },
    {
        img: 'js',
        displayName: 'JavaScript',
        progress: 90
    },
    {
        img: 'sass',
        displayName: 'SASS',
        progress: 75
    }
]
const skillsArrayRight = [
    {
        img: 'vsc',
        displayName: 'Visual Studio Code',
        progress: 90
    },
    {
        img: 'git',
        displayName: 'Git',
        progress: 60
    },
    {
        img: 'react',
        displayName: 'React JS',
        progress: 75
    },
    {
        img: 'bootstrap',
        displayName: 'Bootstrap',
        progress: 85
    }
]

const projects = [
    {
        title: 'Crew View',
        fullDescription: 'Control panel for flight crew. Provides information about schedule and allows flight swapping between peers.',
        shortDescription: 'Control panel for flight crew.',
        built: 'Built with React JS, Bootstrap, Sass and Firebase. Uses Google Maps and Weather API.',
        img: '/images/crew-view.gif',
        repo: 'https://github.com/franfercalderon/crew-view'
    },
    {
        title: 'Wildfire Locator',
        fullDescription: 'Locates current wildfire events around the world and provides detailed information of them.',
        shortDescription: 'Locates current wildfire events around the world.',
        built: 'Built with React JS and Sass. Uses Google Maps API.',
        img: '/images/wildfire.gif',
        repo: 'https://github.com/franfercalderon/wildfire-locator'
    },
    {
        title: 'Herschel Store',
        fullDescription: 'Recreated the famous bag brand site online catalogue and store.',
        shortDescription: 'Recreated the famous bag brand site.',
        built: 'Built with React JS, Bootstrap, Sass and Firebase.',
        img: '/images/herschel.gif',
        repo: 'https://github.com/franfercalderon/coderhouse_proyecto_final'
    },
    {
        title: 'Sky Color',
        fullDescription: 'Fun site to see a city sky color for the last year. You can search and compare different cities.',
        shortDescription: 'Fun site to see a city sky color for the last year.',
        built: 'Built with React JS and Sass. Uses Weather API.',
        img: '/images/sky-color.gif',
        repo: 'https://github.com/franfercalderon/sky-color'
    }
]

const emojis = ['🧉','🏔', '📚', '✈️', '🌿', '🐈', '💻', '🎢' ]


export {skillsArrayLeft, skillsArrayRight, projects, emojis}