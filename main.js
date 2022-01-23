const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const button = document.getElementById("joke-button")
const revealText = document.getElementById("reveal")
const api_url = "https://v2.jokeapi.dev/joke/Any?safe-mode";


async function getapi(url) {


    let responce = await fetch(url);
    var data = await responce.json();



    var result = [];
    console.log(result)

    for(var i in data)
        result.push([i, data [i]]);

    setup.innerText = result[3][1]
    if(result[4][1] == "[object Object]"){
        delivery.innerHTML = "Generate a new joke!"
    } else{
        delivery.innerText = result[4][1]
    }
    
    

}
getapi(api_url)
delivery.style.visibility = "hidden";

let stage = 0;

function revealPun(){
    delivery.style.visibility = "visible";
    revealText.style.visibility = "hidden"
    console.log(stage)
    stage++;
    if(stage == 0){
        console.log(stage)
    } if(stage == 2){
        location.reload();
        console.log(stage)
    }
    
}