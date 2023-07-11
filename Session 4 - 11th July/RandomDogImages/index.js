document.addEventListener('DOMContentLoaded',load);

function load(){
const fetchButton = document.getElementById("fetchButton")
const imageContainer = document.getElementById("imageContainer");

fetchButton.addEventListener('click',function(){
    fetchRandomDogImages()
    .then(function(imageURL){
        displayImage(imageURL);
    })
    .catch(function(error){
displayError(error);
    })
})


function fetchRandomDogImages(){
    return new Promise(function(resolve,reject){
        const apiUrl = "https://dog.ceo/api/breeds/image/random";

        fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Unable to fetch the images");
            }
        })
        .then(function(data){
            resolve(data.message);
        })
        .catch(function(error){
            reject(error);
        })
    })
}

function displayImage(imageURL){
    const img = document.createElement('img');
    img.src=imageURL;
    img.alt="Random Image";
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
}

function displayError(err){
    imageContainer.innerHTML = '<p>Error</p>';
}}