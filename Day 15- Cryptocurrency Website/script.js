const btc=document.querySelector('#bitcoin');
const eth=document.querySelector('#ethereum');
const dc=document.querySelector('#dogecoin');

var settings={
  "async":true,
  "scrossDomain": true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function (response) {
  btc.innerHTML=response.bitcoin.inr;
  eth.innerHTML=response.ethereum.inr;
  dc.innerHTML=response.dogecoin.inr;
});
