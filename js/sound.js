sounds = ['huh','splat','baby','morph','taco','take a shower']

sounds.forEach(sound => {
    btn = ducument.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListenter('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild
})


function stopSongs()
{
    sounds.forEach(sound => {
        song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}