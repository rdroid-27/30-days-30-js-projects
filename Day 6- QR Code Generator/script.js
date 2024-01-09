const qrUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const genBtn= document.querySelector('#genQR');
const textIp =document.querySelector('#textIp');
const qrImg= document.querySelector('#qrImg');
const qr=document.querySelector('#qrCode');
genBtn.addEventListener('click', ()=>{
     if(textIp.value.length >0){

        qrImg.src= qrUrl + textIp.value;
        qr.classList.add('showImg');
    }
     else{
        textIp.classList.add('error');
        setTimeout(()=>{
            textIp.classList.remove('error')},1000);
    }
});
