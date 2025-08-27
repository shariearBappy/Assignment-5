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
      alert(
        "📞" + " " + "Calling" + " " + selectElement1 + " " + selectElement2
      );
      const callHistory = getElement("callHistoryContainer");
      const cardHead = selectCard.querySelector(".cardHeader").innerText;
      const time = new Date().toLocaleTimeString();

      const newDiv = document.createElement("div");
      newDiv.innerHTML = `

              <div
              class="flex justify-between p-4 items-center rounded-xl shadow-lg bg-[#f4f5f7]"
            >
              <div>
                <h1 class="font-bold font-hind text-base text-gray-700">
                  ${cardHead}
                </h1>
                <p class="text-base text-gray-500">${selectElement2}</p>
              </div>
              <div class="text-base text-gray-500">${time}</div>
            </div>

      `;
      callHistory.appendChild(newDiv);
    } else {
      alert("❌" + " " + "Sorry! You have no enough coin");
    }
  }
});
getElement("clearBtn").addEventListener("click", function () {
  const callHistory = getElement("callHistoryContainer");
  callHistory.innerText = "";
});
getElement("forClick").addEventListener("click", (e) => {
  if (e.target.matches(".call")) {
    const callHistory = getElement("callHistoryContainer");
    callHistory.style.display = "block";
  }
});
// copy alert
getElement("forClick").addEventListener("click", (e) => {
  if (e.target.matches(".copyBtn")) {
    const selectCard = e.target.closest(".card");
    const selectElement = selectCard.querySelector(".card-num").innerText;
    const copyNum = navigator.clipboard.writeText(selectElement);
    alert("Number Copied :" + " " + selectElement, copyNum);
  }
});
// copy button increasing
getElement("forClick").addEventListener("click", (e) => {
  if (e.target.matches(".copyBtn")) {
    const copyText = getElement("copyCount").innerText;
    const textToNumber = Number(copyText);
    const totalCount = textToNumber + 1;
    document.getElementById("copyCount").innerText = totalCount;
  }
});
