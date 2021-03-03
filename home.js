first = true;
preference=sessionStorage.getItem('Preference');
if (preference == 'veg') {
    window.interests = ['veg bruschetta','poutine','arrabiatapasta','loaded nachos','soya chaap','penne alferdo pasta'];
}
else if(preference=='nonveg') {
    window.interests= ['non veg bruschetta','bbq chicken nachos','chicken steak sizzler','prawns matka biryani','chicken crispy','murg mussalam'];
}
else {
    window.location='error.html';
}
quoteList = ["If we're not meant to have midnight snacks, why is there a light in the fridge", "a party without cake is just a meeting",
    "i just don't want to look back and think \"I could\'ve eaten that\" ", "All my life i thought air was free... until i bought a bag of chips", "You can't be sad when you're holding a cupcake",
    "Life is short. Eat the dessert first", "i'm sorry for what i said when i was hungry",
    "Dieting is easy. It's like riding a bikeand the bike is on fire and the ground is on fire and everything is on fire because you're in hell ",
"A yawn is a silent scream for coffee"]
quotenumber = Math.floor(Math.random() * 9);
document.querySelector('.quote').innerHTML = quoteList[quotenumber];



window.html = "";
let recipe_images = [];
let recipe_labels = [];
let recipe_source = [];
let recipe_labels_2 = [];
let recipe_ingredients = [];
window.recipe_ingredients_2= {};
main = document.querySelector('.main');
interests.forEach(
    interest => {
        getMeals(interest);
    }
);


setTimeout(storedata, 8000);


function storedata() {
    console.log('maa ka bhosda bhai bhai bhai bhai');
    recipe_ingredients.forEach((v, i) => { recipe_ingredients_2[recipe_labels[i]] = v });
    JSON.stringify(recipe_ingredients_2)
    a=JSON.stringify(recipe_ingredients_2)
    sessionStorage.setItem('images', recipe_images);
    sessionStorage.setItem('labels', recipe_labels);
    sessionStorage.setItem('ingredients', a);
}



window.req_no = 0;//nimish

function call_kar()
    {
         getMeals(interests[req_no ++]);
        getMeals(interests[req_no++]);
        console.log(interests)
    if (req_no != interest.length)
    {
    setTimeout(call_kar,5000)
        }
    }
setTimeout(call_kar,3000)



window.number_displayed = 6;
function getMeals(interest) {
console.log('inside');
window.APP_ID = '8b01213d';
    window.APP_KEY = '97786d28e67ab3902f2ea8cc8e8a9da0';
    let URL = `https://api.edamam.com/search?q=${interest}&app_id=${APP_ID}&app_key=${APP_KEY}`
        try {
                fetch(URL)
                    .then(response => {
                        console.warn(response.ok)
                        return response.json()
                    })
        .then(data => {
            console.log(data);
                        if (data.q == interests[interests.length - 1])
                        {
                            // console.warn("yes bitches sab maya hai")
                            }


            console.warn(data);
            data.hits.forEach(hit => {
                console.log(hit.recipe.source);
                if (hit.recipe.source == 'Honest Cooking') {
                    // window.alert('aaya madarchod');
                    return false;
                }
                let label_length = hit.recipe.label;
                recipe_images.push(hit.recipe.image);
                recipe_labels.push(hit.recipe.label);               
                recipe_source.push(hit.recipe.source);
                recipe_ingredients.push(hit.recipe.ingredientLines);
                console.log(hit.recipe.ingredientLines);
            });
            main.innerHTML = html;
        }).catch((er) => {
            console.log('Couldnt load ');
        });


        } catch (error) {
        }
};

// ************************************infinite loader
let load_options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
}
let observer = new IntersectionObserver(load, load_options);
setTimeout(ev=>observer.observe( document.querySelector('footer')),5000)
let reload = 0;
function load(entries) {
    if (entries[0].isIntersecting) {
        if (first == true) {
            recipe_labels_2 = [...recipe_labels];
            first = false;
        }
        window.html = main.innerHTML;
        for (I = 0; I < 6; I++) {
            console.log(recipe_images[number_displayed])
            if (recipe_labels[number_displayed].length > 15) {
                recipe_labels[number_displayed] = recipe_labels[number_displayed].slice(0, 20) + "...";
            }
         


            if (number_displayed % 2 == 1) {
                html += `
                <div id=${number_displayed} class='card extra_top_margin'>
                <img src="${recipe_images[number_displayed]}"  class='dish_image' alt="${recipe_images[number_displayed]}"/>
                <div class='label_container'>
                <p class='label'>${recipe_labels[number_displayed]}<p>
                </div>
                </div>
            `;
            }
            else {
                html += `
                <div id=${number_displayed} class='card' >
                <img src="${recipe_images[number_displayed]}"  class='dish_image' alt="${recipe_images[number_displayed]}"/>
                <div class='label_container'>
                <p class='label'>${recipe_labels[number_displayed]}<p>
                </div>
                </div>
            `;
            }
            
            number_displayed++;

        }
        main.innerHTML = html;
        b = document.querySelectorAll(".card")
        b.forEach(ev1 => { ev1.addEventListener('click',userclick)})    }

        console.warn(number_displayed >= recipe_images.length, number_displayed, recipe_images.length)
        if (number_displayed >= recipe_images.length) {
            observer.unobserve(document.querySelector('footer'));
            document.querySelector('footer').innerHTML = 'You have reached end';
        }
    }

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




    // *********************************usercicked
    function userclick(ev) {
        console.log(ev.path[1].id);
        console.log(recipe_labels[ev.path[1].id]);
        sessionStorage.setItem('userselectedlabel',recipe_labels_2[ev.path[1].id])
        console.log(recipe_images[ev.path[1].id]);
        sessionStorage.setItem('userselectedimage',recipe_images[ev.path[1].id])
        userSelected=JSON.stringify(recipe_ingredients_2[recipe_labels[ev.path[1].id]]);
        console.log(recipe_source[ev.path[1].id]);
        sessionStorage.setItem('userselectedsource',recipe_source[ev.path[1].id])
        userSelected=JSON.stringify(recipe_ingredients_2[recipe_labels[ev.path[1].id]]);
        console.log(userSelected);
        sessionStorage.setItem('userselectedingredient', userSelected);
        window.location = 'result.html';
    }
    // // **************************** loader
    var loader = setTimeout(hide, 5000);   //make it ten 
    function hide() {
        document.querySelector('.loader_container').style.display = 'none';
    }
