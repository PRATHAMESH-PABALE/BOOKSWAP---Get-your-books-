function showContactInfo(email) {
  alert("Contact the seller at: " + email);
}

function searchProducts() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const productList = document.querySelectorAll(".product");

  productList.forEach((product) => {
    const productName = product.querySelector("h2").textContent.toLowerCase();
    if (productName.includes(searchInput) || searchInput === "") {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
