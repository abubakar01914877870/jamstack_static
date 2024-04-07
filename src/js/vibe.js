const vibes= [
    'mwssage 1','message 2', 'message 3', 'message 4', 'message 5'
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);