const eye=document.getElementById('eye');
const pass= document.getElementById('pass');



eye.onclick= ()=>{

  if(pass.type==='text'){
    pass.type='password';
    eye.src="eye-close.png";
  }
  else{
    pass.type='text';
    eye.src="eye-open.png";
    
  }
}