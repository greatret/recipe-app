window.APP_ID = '79f4612d';
window.html = "";
window.APP_KEY = '634c9548afc87526979e8a9ba61ba8f2';
window.result_box=document.querySelector('.result_box')
function clickPress(event) {
 if (event.keyCode == 13) {
    
    search_box = document.querySelector('.search_box');
    search_query = search_box.value;


     console.log(search_box.value);
     let URL = `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     fetch(URL).
         then(response => response.json()).
         then(data => {
             console.log(data);
             data.hits.forEach(hit => {
                  

                 html += ` <div class="result">
                <div class="result_image">
                    <img src="${hit.recipe.image}" alt="${hit.recipe.label}">
                </div>
                <div class="result_label">
                    <p class="result_label_text">${hit.recipe.label}</p>
                </div>

            </div>`
             })
                       result_box.innerHTML = html;

         });
    }

};

















