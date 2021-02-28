function vegclicked() {
    console.log('veg clicked');
    localStorage.setItem("Preference",'veg')
}
function nonvegclicked() {
    console.log('nonveg clicked');
        localStorage.setItem("Preference",'nonveg')
}