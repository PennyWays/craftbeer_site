


const ROOT_Information = document.getElementById("information-cards-wrapper");




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




const information = new InformationCards();
information.render();

