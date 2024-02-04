const num=document.querySelector('#num');
let counter=0;
setInterval(()=>{
  if(counter===65){
    clearInterval();
  }
  else{

    counter+=1;
    num.innerHTML=counter+"%";
  }
},30);