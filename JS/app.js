//elements
const textInput = document.getElementById("textInput");
const alertText = document.getElementById("alertText");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

//add event listeners
textInput.addEventListener("keydown", checkKey);
searchBtn.addEventListener("click", checkClick);

/* function checkKey */
function checkKey(e) {
  if (e.which === 13 && textInput.value !== "") {
    alertText.textContent = "";
    startSearch(textInput.value);
  } else {
    alertText.textContent = "-- Please enter a drink name! --";
  }
}

/* function checkClick */
function checkClick() {
  if (textInput.value !== "") {
    alertText.textContent = "";
    startSearch(textInput.value);
  } else {
    alertText.textContent = "-- Please enter a drink name! --";
  }
}

/* function start search */
function startSearch(inTxt) {
  let input = inTxt;
  textInput.value = "";
  input = input.replace(/\s/g, "_");

  //fetch data from API
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      displayResult(data);
    });
}

/* function display result */
function displayResult(result) {
  //clear result div
  resultDiv.innerHTML = "";
  //alert if no drink is found
  if (result.drinks === null) {
    alertText.textContent =
      "-- No drink found. Try other drink or spelling! --";
  }
  //display result
  else {
    //build resulting html
    let htmlBuild = "";

    //add result card
    htmlBuild += `
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${result.drinks[0].strDrinkThumb}">
          <span class="card-title" id="drinkTitle">${result.drinks[0].strDrink}</span>
        </div>
        <div class="card-content">
        <table class="striped">
        <thead>
          <tr>
              <th>how much</th>
              <th>Ingredient</th>
          </tr>
        </thead>

        <tbody>
          `;
    if (result.drinks[0].strIngredient1 !== null) {
      if (result.drinks[0].strMeasure1 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure1}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient1}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient2 !== null) {
      if (result.drinks[0].strMeasure2 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure2}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient2}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient3 !== null) {
      if (result.drinks[0].strMeasure3 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure3}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient3}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient4 !== null) {
      if (result.drinks[0].strMeasure4 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure4}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient4}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient5 !== null) {
      if (result.drinks[0].strMeasure5 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure5}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient5}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient6 !== null) {
      if (result.drinks[0].strMeasure6 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure6}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient6}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient7 !== null) {
      if (result.drinks[0].strMeasure7 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure7}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient7}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient8 !== null) {
      if (result.drinks[0].strMeasure8 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure8}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient8}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient9 !== null) {
      if (result.drinks[0].strMeasure9 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure9}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient9}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient10 !== null) {
      if (result.drinks[0].strMeasure10 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure10}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient10}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient11 !== null) {
      if (result.drinks[0].strMeasure11 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure11}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient11}
    </td>
  </tr>`;
    }

    if (result.drinks[0].strIngredient12 !== null) {
      if (result.drinks[0].strMeasure12 !== null) {
        htmlBuild += `<tr>
    <td>
      ${result.drinks[0].strMeasure12}
      </td>`;
      } else {
        htmlBuild += `<tr>
      <td>
        </td>`;
      }

      htmlBuild += `<td>

    ${result.drinks[0].strIngredient12}
    </td>
  </tr>`;
    }

    htmlBuild += `
        </tbody>
      </table>
    <br>
        <p>Instructions:</p>
          <p>${result.drinks[0].strInstructions}</p>
          <br>
          <p>Anleitung:</p>
          <p>${result.drinks[0].strInstructionsDE}</p>
          <br>
          <a class="waves-effect waves-light btn-small disabled">${result.drinks[0].strAlcoholic}</a>
          <a class="waves-effect waves-light btn-small disabled">${result.drinks[0].strGlass}</a>
          <a class="waves-effect waves-light btn-small disabled">${result.drinks[0].strCategory}</a>
          <a class="waves-effect waves-light btn-small disabled">${result.drinks[0].strIBA}</a>
        </div>
        
      </div>
    </div>
  </div>`;

    if (result.drinks.length > 1) {
      htmlBuild += ` <p>We found the following similar drinks:</p>`;

      for (let i = 1; i < result.drinks.length; i++) {
        htmlBuild += `<a href="#" id="similarDrink" class="waves-effect waves-light btn disabled"><i class="material-icons  left">local_bar</i>${result.drinks[i].strDrink}</a>`;
      }
    }
    resultDiv.innerHTML = htmlBuild;
  }
}
