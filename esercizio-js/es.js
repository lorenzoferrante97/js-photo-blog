// recupero container cards
const cardList = document.getElementById("card-list");

// fetch API
fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {

})