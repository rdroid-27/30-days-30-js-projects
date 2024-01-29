const pass=document.querySelector("#pass");
const msg=document.querySelector("#message");
const str=document.querySelector("#strength");

pass.addEventListener('input',()=>{
  if(pass.value.length>0){
    msg.style.display="block";
  }
  else{
    msg.style.display="none";
  }
  if(pass.value.length<4){
    str.innerHTML= "WEAK";
    pass.style.borderColor="#ff5925";
    msg.style.color="#ff5925"
  }
  else if(pass.value.length>=4 && pass.value.length<8 ){
    str.innerHTML= "MEDIUM";
    pass.style.borderColor="yellow";
    msg.style.color="yellow"
  }
  else if(pass.value.length>=8  ){
    str.innerHTML= "STRONG";
    pass.style.borderColor="green";
    msg.style.color="green"
  }
})