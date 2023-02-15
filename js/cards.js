const objects_cards = [
  {
    id: 1,
    name: "APA",
    img: "img/APA.png",
  },
  {
    id: 2,
    name: "AlcoFree",
    img: "img/Alco Free.jpg",
  },
  {
    id: 3,
    name: "Barleywine",
    img: "img/Barleywine.jpg",
  },
  {
    id: 4,
    name: "Cider",
    img: "img/Cider.jpg",
  },
  {
    id: 5,
    name: "Fruit Beer",
    img: "img/Fruitbeer.png",
  },
  {
    id: 6,
    name: "Gose",
    img: "img/Gose.png",
  },
  {
    id: 7,
    name: "Hard Seltzer",
    img: "img/hard seltzer.jpg",
  },
  {
    id: 8,
    name: "HOT",
    img: "img/HOT.webp",
  },
  {
    id: 9,
    name: "IPA",
    img: "img/IPA.jpg",
  },
  {
    id: 10,
    name: "Lager",
    img: "img/Lager.png",
  },
  {
    id: 11,
    name: "Mead",
    img: "img/Mead.jpg",
  },
  {
    id: 12,
    name: "Porter",
    img: "img/Porter.webp",
  },
  {
    id: 13,
    name: "Saison",
    img: "img/Saison.jpg",
  },
  {
    id: 14,
    name: "Sour ale",
    img: "img/Sour ale.jpg",
  },
  {
    id: 15,
    name: "Wheatbeer",
    img: "img/Wheat beer.jpg",
  },
];



const ROOT_Catalog = document.getElementById("catalog-wrapper");

class Cards {
  render() {
    let htmlCatalog = "";
    objects_cards.forEach((element) => {
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


const cards = new Cards();
cards.render();
