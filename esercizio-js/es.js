// recupero container cards
const cardList = document.getElementById("card-list");

let card;
let modal;
let modalClose;
let modalImg;

// fetch API
fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {

    data.forEach(element => {
        let {id, title, date, url} = element;
        cardList.innerHTML += 
        `
            <!-- card col -->
                <div class="col-span-full md:col-span-4">
                    <!-- card -->
                    <div class="relative flex flex-col transition bg-white rounded-lg shadow p-4u gap-3u shadow-makara-900/40 hover:rotate-12 hover:cursor-pointer card-selector">
                        <!-- card pin -->
                        <img src="img/pin.svg" alt="pin" class="absolute w-14u">
                        <!-- card img -->
                        <figure class="overflow-hidden rounded-md aspect-square">
                            <img src="${url}" alt="${title}" class="img-responsive">
                        </figure>
                        <!-- card info -->
                        <div>
                            <p class="text-xl italic text-makara-600">${date}</p>
                            <p class="uppercase h2 text-makara-900">${title}</p>
                        </div>
                    </div>
                </div>
        `;
    });

    card = document.querySelectorAll(".card-selector");
    modal = document.getElementById("card-img-modal");
    modalImg = document.querySelector("#modal-img");
    console.log(card)
    for (let i = 0; i < card.length; i++) {

        let cardClick = card[i];
        let cardImgSrc = cardClick.querySelector("figure img").getAttribute("src");
        let cardImgAlt = cardClick.querySelector("figure img").getAttribute("alt");
        console.log("card click: ", cardClick)
        cardClick.addEventListener('click', () => {
            modal.classList.toggle("hidden")
            modalImg.innerHTML = 
            `
                <img src="${cardImgSrc}" alt="${cardImgAlt}" class="object-scale-down w-full h-full">
            `;
        })
    }
})
.catch(error => {

})

modalClose = document.getElementById("modal-close");

modalClose.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})