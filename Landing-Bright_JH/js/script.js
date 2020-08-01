const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


const learnMoreButtons = document.querySelectorAll('.services-container-block-item__wrapper');

for (let i of learnMoreButtons) {
    i.querySelector("button").addEventListener('click', showInfo);
}

function showInfo(e) {
    console.log()
    if (e.target.innerText == "learn more".toUpperCase()) {
        e.target.innerText = "close".toUpperCase();
        e.target.parentElement.querySelector(".info").classList.add("active");
    } else {
        e.target.innerText = "learn more".toUpperCase();
        e.target.parentElement.querySelector(".info").classList.remove("active");
    }

}



