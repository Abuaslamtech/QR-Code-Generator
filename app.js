let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let user_input = document.getElementById("inputtext");
  if (user_input.value != "") {
    if (document.getElementById("code").childElementCount == 0) {
      generate(user_input);
    } else {
      document.getElementById("code").innerHTML = "";
      generate(user_input);
    }
  } else {
    document.getElementById("code").style = "display: none";
    console.log("not valid input");
  }
});
function generate(user_input) {
  var qrcode = new QRCode(document.querySelector(".qr-code"), {
    text: `${user_input.value}`,
    width: 180, //default 128
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  let download = document.createElement("button");
  document.getElementById("code").appendChild(download);

  let download_link = document.createElement("a");
  download_link.setAttribute("download", "qr_code_linq.png");
  download_link.innerText = "Download";
  download.appendChild(download_link);

  if (qr_code_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
  }
}
