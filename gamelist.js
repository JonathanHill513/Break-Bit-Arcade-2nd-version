var games = [

    {
        title: 'Fatal Fury',
        image: './images/fatalfury.png',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
    {
        title: 'Super Street Fighter II',
        image: './images/Ssfii.jpg',
        date: 'September 10, 1993',
        genre: 'Fighting',
        devoloper: 'Capcom',
        publisher: 'Capcom',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Super Street Fighter II: The New Challengers[a] is a competitive fighting game produced by Capcom and originally released as an arcade game in 1993. It is the fourth game in the Street Fighter II sub-series of Street Fighter games, following Street Fighter II: Hyper Fighting. It refines and balances the existing character roster from the previous versions, and introduces four new characters. It is the first game on Capcom's CP System II hardware, with more sophisticated graphics and audio over the original CP System hardware used in previous versions of Street Fighter II."
    },
    {
        title: 'Punch-Out!!',
        image: './images/punchout.jpg',
        date: 'February 17, 1984',
        genre: 'Sports, Fighting',
        devoloper: 'Nintendo, R&D3',
        publisher: 'Nintendo',
        platform: 'Arcade',
        players: '1 player',
        description: "Punch-Out!! is an arcade boxing video game by Nintendo, developed in 1983 and released in February 1984. It was the first in a series of successful Punch-Out!! games."
    },
    {
        title: 'Ghouls N Ghosts',
        image: './images/ghoulsnghosts.png',
        date: 'October 5, 1988',
        genre: 'Platform',
        devoloper: 'Capcom',
        publisher: 'Capcom',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Ghouls 'n Ghosts, known as Dai Makaimura (Japanese: 大魔界村, lit. Great Demon World Village) in Japan, is a side-scrolling platform game developed by Capcom, released as an arcade game in 1988 and subsequently ported to a number of home platforms. It is the sequel to Ghosts 'n Goblins and the second game in the Ghosts 'n Goblins series.."
    },
    {
        title: 'Galaga',
        image: './images/Galaga_logo.svg.png',
        date: 'September, 1981',
        genre: 'Fixed Shooter',
        devoloper: 'Namco',
        publisher: 'Namco',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Galaga[a] is a 1981 fixed shooter arcade video game developed and published by Namco. In North America, it was released by Midway Manufacturing. It is the sequel to Galaxian (1979), Namco's first major video game hit in arcades. Controlling a starship, the player is tasked with destroying the Galaga forces in each stage while avoiding enemies and projectiles. Some enemies can capture a player's ship via a tractor beam, which can be rescued to transform the player into a ''dual fighter'' with additional firepower."
    },
]

games.sort()

var postHTML = " "
var postHTML2 = " "
for (var i=0; i < games.length; i++){
var gamelisted = '<div class="container gamecontainer" style="padding-top:110px" id="'+games[i].title+'"><div class="game"><img class="gamelogo" src="'+games[i].image+'"/><br><div class="heading"><h3>'+games[i].title+'</h3></div><div class="bodytext gamebodytext"> <h4>Publisher:</h4>'+games[i].publisher+'<br><h4>Developer:</h4>'+games[i].devoloper+'<br><h4>Genre:</h4>'+games[i].genre+'<h4>Players:</h4>'+games[i].players+'<br> <h4>Release Date:</h4>'+games[i].date+'<br><h4>Platform:</h4>'+games[i].platform+'<br><h4>Description:</h4>'+games[i].description+'<br></div></div></div>'

var gameThumbnail = '<div class="gamethumbnail"><a href="#'+games[i].title+'"><img class="gamelogo" src="'+games[i].image+'"<br> <span>'+games[i].title+'</span></div>'


postHTML = postHTML + gamelisted;
postHTML2 = postHTML2 + gameThumbnail;
}

document.getElementById('gamelist').innerHTML = postHTML
document.getElementById('gamethumbnail').innerHTML = postHTML2