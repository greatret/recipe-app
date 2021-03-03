first = true;
window.APP_ID = '79f4612d';
window.html = "";
window.APP_KEY = '634c9548afc87526979e8a9ba61ba8f2';
window.result_box=document.querySelector('.result_box')
window.number_displayed = 0;
let recipe_images = [];
//['samosa','vada','dosa','pizza','tacos','aloo tikki','biryani','pulav','gulab jamun']
let recipe_labels = [];
let recipe_source = [];
let recipe_labels_2 = [];
let recipe_ingredients = [];
window.recipe_ingredients_2= {};




function storedata() {
    recipe_ingredients.forEach((v, i) => { recipe_ingredients_2[recipe_labels[i]] = v });
    JSON.stringify(recipe_ingredients_2)
    a=JSON.stringify(recipe_ingredients_2)
    sessionStorage.setItem('images', recipe_images);
    sessionStorage.setItem('labels', recipe_labels);
    sessionStorage.setItem('ingredients', a);
    if (first == true) {
            recipe_labels_2 = [...recipe_labels];
            first = false;
        }
}



function clickPress(event) {
 if (event.keyCode == 13) {
     document.querySelector('.fa-times').style.opacity = '1';
     window.search_box = document.querySelector('.search_box');
     setTimeout(storedata, 4000);
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
                                 recipe_images.push(hit.recipe.image);
                recipe_labels.push(hit.recipe.label);
                recipe_source.push(hit.recipe.source);
                recipe_ingredients.push(hit.recipe.ingredientLines);

                roundedCalories=Math.round(hit.recipe.calories* 100) / 100
                 html += ` <div class="result" id=${number_displayed}>
                <div class="result_image" id=${number_displayed}>
                    <img src="${hit.recipe.image}" alt="${hit.recipe.label}" id=${number_displayed}>
                </div>
                <div class="result_label" id=${number_displayed}>
                    <p class="result_label_text" id=${number_displayed}>${hit.recipe.label}</p>
                    <p class="yield" id=${number_displayed}>yield:${hit.recipe.yield}</p>
                    <p class='calories' id=${number_displayed}>calories:${roundedCalories}</p>
                </div>
                </div>`;
                 number_displayed++;
             })
                       result_box.innerHTML = html;
            //  b = document.querySelectorAll(".result");
             b = document.querySelectorAll(".result");
            //  b.addEvenListener('click', userclick);
             b.forEach(ev1 => { ev1.addEventListener('click', userclick) })
         });
    }

};


    function userclick(ev) {
        console.log(ev.target.id);
        console.log(ev);
        console.log(recipe_labels[ev.target.id]);
        sessionStorage.setItem('userselectedlabel',recipe_labels_2[ev.target.id])
        console.log(recipe_images[ev.target.id]);
        sessionStorage.setItem('userselectedimage',recipe_images[ev.target.id])
        userSelected=JSON.stringify(recipe_ingredients_2[recipe_labels[ev.target.id]]);
        console.log(recipe_source[ev.target.id]);
        sessionStorage.setItem('userselectedsource',recipe_source[ev.target.id])
        userSelected=JSON.stringify(recipe_ingredients_2[recipe_labels[ev.target.id]]);
        console.log(userSelected);
        sessionStorage.setItem('userselectedingredient', userSelected);
        window.location = 'result.html';
    }




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

