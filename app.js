var appBody = document.getElementById("app");
var genBtn = document.getElementById("btn");
var qrCode = document.getElementById("qr_code");
var qrIMG = document.getElementById("qr");
var dataInput = document.getElementById("text");

genBtn.addEventListener("click", () => {
    var qrData = dataInput.value;
    
    if(!qrData){
        return;
    }

    genBtn.innerHTML = "Genarationg QR Code ..."

    qrIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=239x239&data=${qrData}`;
    appBody.style.height = "500px";
    qrCode.style.opacity = "1";
    qrCode.style.pointerEvents = "all";

    qrIMG.addEventListener("load", () => {
        genBtn.innerHTML = "Genarate QR Code"
    })
})