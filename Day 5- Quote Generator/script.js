const url="https://api.quotable.io/random";
const genQuote= document.querySelector('#quoteGen');
const quote=document.querySelector('#quote');
const author = document.querySelector("#author");



async function getQuote(url){
    let response=await fetch(url);
    var data= await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
    console.log(data);
}
getQuote(url);

genQuote.addEventListener('click',()=>{
    getQuote(url);
});

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} -by ${author.innerHTML}`, "Tweet Window", 'width=600, height=300');
}