// recupero container cards
const cardList = document.getElementById("card-list");

// fetch API
fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {

    data.forEach(element => {
        let {id, title, date, url} = element;
        
    });
})
.catch(error => {

})