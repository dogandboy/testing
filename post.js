let postcontent = document.getElementById('post-content')
let posttitle = document.getElementById('post-title')
function send() {
    localStorage.setItem("ew", `<div> <div class="title"> ${posttitle.value} </div> <div class="content"> ${postcontent.value} </div></div>`)
    
    location.href = "poster.html"
}

