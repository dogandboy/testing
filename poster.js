let postemoke = document.getElementById('postemoke')
getstorage()
function dopost() {
    location.href = "post.html"
}
function getstorage() {
    if(localStorage.getItem("ew")) {
        let okedoke = localStorage.getItem("ew")
        postemoke.innerHTML += `
        ${okedoke}
        `
    }
}