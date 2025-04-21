const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?type=single";

const joke=()=>{
    btn.disabled=true;
    btn.style.opacity="0.7";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        jokecontainer.textContent=data.joke;
        // jokecontainer.classList.add("fade");
        setTimeout(()=>{
            btn.disabled=false;
            btn.style.opacity="1";

        },200);
    })
    .catch((error)=>{
        console.log("error:",error);
    });
}
btn.addEventListener("click",joke);
joke();