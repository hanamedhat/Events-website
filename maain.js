window.onscroll=()=>{scrollNavbar()};
scrollNavbar=()=>{
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");
    
    if(document.documentElement.scrollTop > 600){
        navBar.classList.add("colored");
        navBar.classList.remove("transparent");
        for(let i=0; i<links.length;i++){
            const element=links[i];
            element.classList.add('text-black');
        }
    }else{
        navBar.classList.remove("colored");
        navBar.classList.add("transparent");
        for(let i=0; i<links.length;i++){
            const element=links[i];
            element.classList.remove('text-black');
        }
    }
}
var btn = document.getElementById("naaav")
var nav= document.getElementById("navBar");
btn.addEventListener('click',()=>{
nav.classList.toggle('appear')
})

