$(document).ready(function () {
  $("#button1").click(function () {
    $("#catalog").modal({
      fadeDuration: 500,
      fadeDelay: 0.1,
      escapeClose: false,
      showClose: false,
    });
  });
});

const ROOT_Catalog = document.getElementById("catalog-wrapper");

class Products {
  render() {
    let htmlCatalog = "";
    Cards.forEach((element) => {
      htmlCatalog += `
        <div class="catalog-card">
          <div class="image-wrapper">
            <img src="${element["img"]}" alt="" />
          </div>
          <div class="text-wrapper">
            <p>
                ${element["name"]}
            </p>
          </div>
        </div>
      `;
      ROOT_Catalog.innerHTML = htmlCatalog;
    });
  }
}

const products = new Products();
products.render();
