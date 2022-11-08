const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const { request } = require('http')
const PORT = 8000

app.use(cors())

const character = {
    'Invincible': {
        'realName' : 'Mark Grayson',
        'speciesName' : 'Viltrumite-Human hybrid',
        'homeWorld' : 'Earth',
        'Team' : 'Teen Team and Guardians of the Globe',
        'Suit' : 'Yellow, Blue, Black',
        'Abilities' : 'Superhuman Strength, Stamina, Speed, Invulnerability, Flight, Enhanced Healing Factor,Decelerated aging',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/a/a3/Invincible_%28Mark_Grayson%29.png/revision/latest/scale-to-width-down/333?cb=20210328173918',
    },

    'Omni-Man': {
        'realName' : 'Nolan Grayson',
        'speciesName' : 'Viltrumite',
        'homeWorld' : 'Viltrum',
        'Team' : 'Guardians of the Globe and Viltrum Empire',
        'Suit' : 'Red and White',
        'Abilities' : 'Superhuman Strength, Stamina, Speed, Invulnerability, Flight, Enhanced Healing Factor,Decelerated aging',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/6/63/Omni-ManProfile.png/revision/latest?cb=20210619064910',
    },

    'Battle Beast': {
        'realName' : 'Thokk',
        'speciesName' : 'Feline',
        'homeWorld' : 'Thraxa',
        'Team' : 'None',
        'Suit' : 'Red and Black',
        'Abilities' : 'Super Strength, Infinite Stamina, Hand to Hand Combat, Weapons',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/4/41/Battle_Beast_Ep_5_Invincible_%28244%29.png/revision/latest/scale-to-width-down/350?cb=20210409145922',
    },
    
    'Atom Eve':{
        'realName' : 'Sam Wilkins',
        'speciesName' : 'Human',
        'homeWorld' : 'Earth',
        'Team' : 'Teen Team',
        'Suit' : 'Pink',
        'Abilities' : 'Subatomic Manipulation, Energy Manipulation, Flight',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/7/74/Atom-EveProfile.png/revision/latest/scale-to-width-down/246?cb=20210619065420',
    },

    'Cecil Stedman': {
        'realName' : 'Cecil Stedman',
        'speciesName' : 'Human',
        'homeWorld' : 'Earth',
        'Team' : 'Global Defense Agency',
        'Suit' : 'Black, White, Red',
        'Abilities' : 'The US Military',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/f/f1/CecilProfile.png/revision/latest/scale-to-width-down/229?cb=20210619072853',
    },

    'Allen the Alien': {
        'realName' : 'Allen',
        'speciesName' : 'Unopian',
        'homeWorld' : 'Unknown',
        'Team' : 'Coalition of Planets',
        'Suit' : 'Purple and White',
        'Abilities' : 'Super Strength, Durability, Telepathy, Flight',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/9/94/Allen_The_Aliens_s448_%281%29.png/revision/latest/scale-to-width-down/350?cb=20210327224202',
    },

    'Rex Splode': {
        'realName' : 'Rex Sloane',
        'speciesName' : 'Human',
        'homeWorld' : 'Earth',
        'Team' : 'Teen Team and Guardians of the Globe',
        'Suit' : 'Red and Yellow',
        'Abilities' : 'Enhanced Druability, Energy Projection, Agility',
        'image' : 'https://static.wikia.nocookie.net/amazon-invincible/images/8/87/Rex-SplodeProfile.png/revision/latest/scale-to-width-down/199?cb=20210619071518',
        },
    
        'Unknown': {
            'realName' : 'NA',
            'speciesName' : 'NA',
            'homeWorld' : 'NA',
            'Team' : 'NA',
            'Suit' : 'NA',
            'Abilities' : 'NA',
            'image' : 'NA',
            },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName',(request, response) => {
   const characterName = request.params.characterName.toLowerCase()
   if(character[characterName]){
    response.json(character[characterName])
   }else{
    response.json(character['unknown'])
   }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running.')
})