progress = document.querySelector('.progress')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 50)

function blurring()
{
    load = load + 1

    if (load > 99)
    {
        clearInterval(int)
    }
    progress.innerText = `${load}%`
    progress.style.opacity = 1
}