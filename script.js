const addItem = document.getElementById("add-Item");
const inputShoppingList = document.getElementById("input-shopping-list");

const shoppingListContainer = document.getElementById(
  "shopping-list-container"
);

// let shoppingListArray = [];

addItem.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(inputShoppingList.value);

  const shoppingItem = inputShoppingList.value;

  shoppingListContainer.innerHTML += `<label for="" class="list-group-item d-flex align-items-center">
          <input type="checkbox" class=" item-checked  form-check-input me-1" value="" />
          ${shoppingItem} 
        <button type="button" class=" delete-btn btn btn-outline-danger ms-auto id="delete">DELETE</button>
        </label>`;
  //Clear the input field
  inputShoppingList.value = "";
});

//DELETE FUNCTION
shoppingListContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

shoppingListContainer.addEventListener("change", function (e) {
  if (e.target.type === "checkbox") {
    console.log("Checkbox is change");
    if (e.target.checked) {
      console.log("Checkbox is check");
    } else {
      console.log("Checkbox is uncheck");
    }
  }
});

/*<!DOCTYPE html>
<html>
<head>
  <title>Shopping List</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">

  <form id="shopping-form" class="mb-4">
    <h1 class="mb-3 text-center">My Shopping List</h1>
    <div class="input-group">
      <input type="text" id="item-input" class="form-control" placeholder="Add item" />
      <button type="submit" class="btn btn-primary">Add</button>
    </div>
  </form>

  <div id="shopping-list" class="list-group"></div>

  <script>
    const form = document.getElementById("shopping-form");
    const input = document.getElementById("item-input");
    const list = document.getElementById("shopping-list");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const itemText = input.value.trim();
      if (itemText === "") return;

      // Create list item
      const item = document.createElement("label");
      item.className = "list-group-item d-flex justify-content-between align-items-center";

      item.innerHTML = `
        <div>
          <input type="checkbox" class="form-check-input me-2" />
          ${itemText}
        </div>
        <button class="btn btn-outline-danger btn-sm delete-btn">DELETE</button>
      `;

      list.appendChild(item);
      input.value = "";
    });

    // Event delegation for delete buttons
    list.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove(); // removes the label container
      }
    });
  </script>

</body>
</html>
*/

//CHECKED FUNCTION
// shoppingListContainer.addEventListener("change", function (e) {
//   if (e.target.classList.contains("item-checked")) {
//     console.log("click");
//     if (e.target.type === "checkbox") {
//       console.log("Start");
//     } else {
//       console.log("end");
//     }
//   }
// });

// shoppingListContainer.addEventListener("change", function (e) {
//   console.log(e);
//   // if (e.target.type === "checkbox") {
//   //   console.log("Checkbox was changed!");

//   //   if (e.target.checked) {
//   //     console.log("Checkbox is checked");
//   //   } else {
//   //     console.log("Checkbox is unchecked");
//   //   }
//   // }
// });
