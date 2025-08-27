function getElement(id) {
  const shortCut = document.getElementById(id);
  return shortCut;
}
// heart increasing code
getElement("forClick").addEventListener("click", (e) => {
  if (e.target.matches(".heart")) {
    const innerText = getElement("heartCount").innerText;
    const textToNumber = Number(innerText);
    const totalCount = textToNumber + 1;
    document.getElementById("heartCount").innerText = totalCount;
  }
});
// call button code
getElement("forClick").addEventListener("click", (e) => {
  if (e.target.matches(".call")) {
    const innerTextCoin = getElement("forCallClick").innerText;
    const coinToNum = Number(innerTextCoin);

    if (coinToNum >= 20) {
      const currentCoin = coinToNum - 20;
      document.getElementById("forCallClick").innerText = currentCoin;
      const selectCard = e.target.closest(".card");
      const selectElement1 = selectCard.querySelector(".card-tittle").innerText;
      const selectElement2 = selectCard.querySelector(".card-num").innerText;
      alert("Calling" + " " + selectElement1 + " " + selectElement2);
    } else {
      alert("Sorry! You have no enough coin");
    }
  }
});
