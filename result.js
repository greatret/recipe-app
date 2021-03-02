console.log('blahblah');
window.APP_ID = '3a9154d8';
    window.APP_KEY = 'ac6e05b03bb46c10f2960d1a42205e30';
interest = 'Chicken Vesuvio';
let URL = `https://api.edamam.com/search?q=${interest}&app_id=${APP_ID}&app_key=${APP_KEY}`


window.html = '';

console.log(sessionStorage.getItem('userselectedlabel'));
console.log(sessionStorage.getItem('userselectedingredient'));
document.querySelector('.recipe_head').innerHTML = sessionStorage.getItem('userselectedlabel');
document.querySelector('.source').innerHTML = sessionStorage.getItem('userselectedsource');
document.querySelector('.top_image').src= sessionStorage.getItem('userselectedimage');
ingredients = sessionStorage.getItem('userselectedingredient');
ingredientlist = ingredients.split('","');

// console.log(ingredients.length);
// ingredientlist = JSON.stringify(ingredients);
// console.log(ingredientlist)

for (let i = 0; i < ingredientlist.length; i++){
    console.log(ingredientlist[i]);
    if (i == 0) {
         html += `<li class="recipe">${ingredientlist[i].replace('["','')}</li>`;
    }
    else if (i ==ingredientlist.length - 1) {
                 html += `<li class="recipe">${ingredientlist[i].replace('"]','')}</li>`;
    }
    else {
                 html += `<li class="recipe">${ingredientlist[i]}</li>`;
    }

}


document.querySelector('.recipe_list').innerHTML = html;






    // **************************** moving menu bar
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".menu_bar").style.bottom = "0px";
        } else {
            document.querySelector(".menu_bar").style.bottom = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

