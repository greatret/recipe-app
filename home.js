
preference=localStorage.getItem('Preference');
if (preference == 'veg') {
    window.interests = ['paneer'];
}
else if(preference=='nonveg') {
    window.interests= ['chicken'];
}













// interests = ['samosa', 'vada', 'dosa', 'pizza'];
window.html = "";
let recipe_images = [];
//['samosa','vada','dosa','pizza','tacos','aloo tikki','biryani','pulav','gulab jamun']
let recipe_labels = [];
main = document.querySelector('.main');
interests.forEach(
    interest => {
        // getMeals(interest);
    }
);

window.req_no = 0;//nimish

function call_kar()
    {
         getMeals(interests[req_no ++]);
        getMeals(interests[req_no++]);
    if (req_no != interest.length)
    {
    setTimeout(call_kar,8000)
        }
    }
setTimeout(call_kar,1000)



window.number_displayed = 6;
function getMeals(interest) {
console.log('inside');
window.APP_ID = '5d0f7d7f';
    window.APP_KEY = 'f50cfc128a915e224ddbbe83fdc95e91';
    let URL = `https://api.edamam.com/search?q=${interest}&app_id=${APP_ID}&app_key=${APP_KEY}`
        try {
                fetch(URL)
                    .then(response => {
                        

                        // if (response.q == interests[interests.length - 1])
                        // {
                        //     console.warn("yes bitches sab maya hai")
                        //     }
                        console.warn(response.ok)
                        return response.json()
                    })
        .then(data => {
            console.log(data);
            // window.abc = data;
            
            
                        if (data.q == interests[interests.length - 1])
                        {
                            console.warn("yes bitches sab maya hai")
                            }


            console.warn(data)
            data.hits.forEach(hit => {
                // console.log(hit.recipe.label)
                let label_length = hit.recipe.label;
                recipe_images.push(hit.recipe.image);
                recipe_labels.push(hit.recipe.label);
                // if (label_length.length > 15) {
                //     label_length = label_length.slice(0, 20) + "...";
                // }
                // console.log('label length',label_length)
            //     html += `
            //     <div class='card'>
            //     <img src="${hit.recipe.image}" class='dish_image' alt="${hit.recipe.image}"/>
            //     <div class='label_container'>
            //     <p class='label'>${label_length}<p>
            //     </div>
            //     </div>
            // `;
            });
            // wow();
            main.innerHTML = html;
        }).catch((er) => {
            // html = `
            //     <h2 class='error_msg'>Couldn't load results</h2>
            // `;
            //  main.innerHTML = html;
            // window.alert('failed to load');
            console.log('Couldnt load ');
        });


        } catch (error) {
            
        }
    

};
setTimeout(console.log(recipe_images), 10000);






// ******************* carousel images ***************************




// ************************************infinite loader
let load_options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
}
let observer = new IntersectionObserver(load, load_options);
setTimeout(ev=>observer.observe( document.querySelector('footer')),10000)
let reload = 0;
function load(entries) {
    if (entries[0].isIntersecting) {
        // reload = reload + 1;
        // console.log(reload);
        // reload_interests=reloadMeals(reload);
        // reload_interests.forEach(
        //     reload_interest => {
        //         // getMeals(reload_interest);
        //         console.log(reload_interest);
        //     });
        // console.log('intereseting');
        window.html = main.innerHTML;
        for (I = 0; I < 6; I++)
        {
            console.log(recipe_images[number_displayed])
            // number_displayed
            if (recipe_labels[number_displayed].length > 15) {
                    recipe_labels[number_displayed] = recipe_labels[number_displayed].slice(0, 20) + "...";
                 }
         


            if (number_displayed % 2 == 1) {
                html+= `
                <div id=${number_displayed} class='card extra_top_margin'>
                <img src="${recipe_images[number_displayed]}"  class='dish_image' alt="${recipe_images[number_displayed]}"/>
                <div class='label_container'>
                <p class='label'>${recipe_labels[number_displayed]}<p>
                </div>
                </div>
            `;
            }
            else {
                html+= `
                <div id=${number_displayed} class='card'>
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
    };


    console.warn(number_displayed >= recipe_images.length,number_displayed , recipe_images.length)
    if (number_displayed >= recipe_images.length)
    {
        observer.unobserve(document.querySelector('footer'));
        document.querySelector('footer').innerHTML = 'You have reached end';
        }
}
function reloadMeals(reload) {
    if (reload == 1) {
        let reload_interest_1 = ['pizza', 'burger'];
        return reload_interest_1;
    }
    else if (reload == 2) {
        let reload_interest_2 = ['sandwhich', 'tacos'];
        return reload_interest_2;
    }
    else {
        return [];
    }
};

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



// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   } 











// // **************************** loader
var loader=setTimeout(hide,6000);   //make it ten 
function hide() {
    document.querySelector('.loader_container').style.display = 'none';
}