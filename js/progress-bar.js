window.addEventListener("scroll", ()=>{
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windowScroll / height) * 100;
    document.querySelector("#scrollBar").style.width = scrolled  + "%";
})