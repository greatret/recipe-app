window.APP_ID = '79f4612d';
window.html = "";
window.APP_KEY = '634c9548afc87526979e8a9ba61ba8f2';
window.result_box=document.querySelector('.result_box')
function clickPress(event) {
 if (event.keyCode == 13) {
     document.querySelector('.fa-times').style.opacity = '1';
    window.search_box = document.querySelector('.search_box');
    search_query = search_box.value;
     search_box.blur();

     console.log(search_box.value);
     let URL = `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     fetch(URL).
         then(response => response.json()).
         then(data => {
             console.log(data);
             data.hits.forEach(hit => {
                 if (hit.recipe.label.length > 35) {
                     hit.recipe.label = hit.recipe.label.slice(0, 20) + "...";
                 };
                roundedCalories=Math.round(hit.recipe.calories* 100) / 100
                 html += ` <div class="result">
                <div class="result_image">
                    <img src="${hit.recipe.image}" alt="${hit.recipe.label}">
                </div>
                <div class="result_label">
                    <p class="result_label_text">${hit.recipe.label}</p>
                    <p class="yield">yield:${hit.recipe.yield}</p>
                    <p class='calories'>calories:${roundedCalories}</p>
                </div>

            </div>`
             })
                       result_box.innerHTML = html;

         });
    }

};



function clearresults() {
    result_box.innerHTML = "";
    html = '';
    document.querySelector('.search_box').value = "";
    document.querySelector('.fa-times').style.opacity = '0';
    // window.search_box.value = '';
    console.log('clear results');
}












// **************************** moving menu bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".menu_bar").style.bottom = "0px";
  } else {
    document.querySelector(".menu_bar").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

