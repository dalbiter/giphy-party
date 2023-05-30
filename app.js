
const apiKey = 'FwMtLy7iMi60vRll6CqXY6pz3787jzrB'
const gifContainer = document.querySelector('.gifContainer');
const form = document.querySelector("#searchForm");

form.addEventListener("submit", e => {
    const input = document.querySelector(".searchBox");
    e.preventDefault();
    getGif(input.value);
    //console.log(input.value)
    input.value = '';
});

async function getGif(query) {
    try {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&lang=en&limit=25` 
        let res = await axios.get(url)
        const img = document.querySelector('.gif')
        let i = Math.floor(Math.random() * res.data.data.length)
        let gifUrl = res.data.data[i].images.downsized.url
        console.log(i)
        console.log(res)
        console.log(gifUrl)
        createGif(gifUrl) 
        
    }
    catch(e) {
        alert("No gif found, please try a new search")
    }
};

function createGif(gifUrl) {
    const newDiv = document.createElement('div')
    const newGif = document.createElement('img')

    newDiv.classList.add('gifDiv');
    newGif.classList.add('gif');
    
    gifContainer.append(newDiv);
    newDiv.append(newGif);
    newGif.src = gifUrl;

} 







