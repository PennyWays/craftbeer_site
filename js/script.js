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
const ROOT_Information = document.getElementById("information-cards-wrapper");

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
            <a href="catalog.html" class="catalog-title">
                ${element["name"]}
            </a>
          </div>
        </div>
      `;
      ROOT_Catalog.innerHTML = htmlCatalog;
    });
  }
}

class InformationCards {
  render() {
    let htmlInformation = "";
    Information.forEach((element) => {
      htmlInformation += `
      <div class="information-cards">
          <div class="information-title-wrapper">
            <h1 class="information-title">${element["name"]}</h1>
          </div>
          <p class="information-p">
            ${element["text"]}
          </p>
        </div>
      `;
      ROOT_Information.innerHTML = htmlInformation;
    });
  }
}

const products = new Products();
products.render();

const information = new InformationCards();
information.render();
