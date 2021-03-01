function vegclicked() {
    console.log('veg clicked');
    sessionStorage.setItem("Preference",'veg')
}
function nonvegclicked() {
    console.log('nonveg clicked');
        sessionStorage.setItem("Preference",'nonveg')
}