const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const repositoryList = document.getElementById("repositoryList");

searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    const username = searchInput.value;
    searchInput.value = "";
    if(username){
        fetchRepositories(username);
    }
})

function fetchRepositories(username){
    const url = `https://api.github.com/users/${username}/repos`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        displayRepositories(data);
    })
    .catch(error=>{
        console.error("Error: ",error);
    });
}


function displayRepositories(repositories){
    repositoryList.innerHTML = "";
    repositories.forEach(repo=>{
        const li = document.createElement('li');
        const repoLink = document.createElement("a");
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.textContent = repo.name;
        li.appendChild(repoLink);
        repositoryList.appendChild(li);
    })
}