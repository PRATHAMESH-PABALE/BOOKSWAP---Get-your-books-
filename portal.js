document.getElementById("buyButton").addEventListener("click", function () {
  const transactionList = document.getElementById("transactionList");
  const listItem = document.createElement("li");
  listItem.textContent = "Bought product for $100";
  transactionList.appendChild(listItem);
});

document.getElementById("sellButton").addEventListener("click", function () {
  const transactionList = document.getElementById("transactionList");
  const listItem = document.createElement("li");
  listItem.textContent = "Sold product for $100";
  transactionList.appendChild(listItem);
});
