const list = 
['google api', 'google icons', 'js delete elements', 'javascript filter', 'css border radius only bottom',
'queryselector apply style', 'js filter array of objects', 'javascript switch case', 'css center div', 'google.com'];

const searchBar = document.querySelector('#search');

//Event listener para que el input haga búsqueda tras "Enter"
searchBar.addEventListener('keypress', function(event){
    if(event.key === 'Enter') searchInGoogle(searchBar.value);
});

//Se realiza la búsqueda, y se cambian dinamicamente los estilos en base a resultados
function searchInput(event){

    emptyInput();
    const searchDiv = document.querySelector(".search-div");
    searchDiv.style.borderRadius = '1.5rem 1.5rem 0 0';
    const inputText = event.target.value;
    const currentList = list.filter((el) => el.toLowerCase().includes(inputText.toLowerCase()));

    if(currentList.length == 0){
        searchDiv.style.borderRadius = '3rem'; return;
    }

    const resultsSection = document.querySelector('.results-div');

    for(let i=0; i < currentList.length; i++){
        const newElement = document.createElement("div");
        newElement.innerHTML = currentList[i];
        newElement.className = 'search-result';
        newElement.addEventListener('mousedown',function () {
            document.querySelector('#search').value = currentList[i];
            searchInGoogle(currentList[i]);
        });

        if(i == currentList.length - 1) newElement.style.borderRadius = '0 0 1.5rem 1.5rem';
        resultsSection.appendChild(newElement);
    }

}

//Limpia el div de los resultados
function emptyInput(){
    document.querySelectorAll(".search-result").forEach(e => e.remove());
    const searchDiv = document.querySelector(".search-div");    
    searchDiv.style.borderRadius = '3rem';
}

function searchInGoogle(parameter){
    window.location.href = `https://www.google.com/search?q=${parameter}`
}
