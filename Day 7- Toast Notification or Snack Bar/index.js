const toastBox= document.querySelector('#toastBox');
const success= '<i class="fa-sharp fa-solid fa-circle-check"></i> Successfully submitted';
const error= '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
const invalid= '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
function showToast(text){
    let toast =document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= text;
    toastBox.appendChild(toast);
    if(text.includes('error')){
        toast.classList.add('error');
    }
    if(text.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },4000);

}