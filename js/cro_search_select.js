jQuery(function($) {

  /**
  * hledani selecty
  */
  let customSelect, customSelectLenght;
  let selectEl, selectElLenght;
  let selectedItem;
  let selectItems;
  let searchInput;
  let item;
  let i, j;

  // custom-select
  customSelect = document.getElementsByClassName("custom-select");
  customSelectLenght = customSelect.length;

  for (i = 0; i < customSelectLenght; i++) {
    selectEl = customSelect[i].getElementsByTagName("select")[0];
    selectElLenght = selectEl.length;

    // selected-item
    selectedItem = document.createElement("DIV");
    selectedItem.setAttribute("class", "select-selected");
    selectedItem.innerHTML = selectEl.options[selectEl.selectedIndex].innerHTML;
    customSelect[i].appendChild(selectedItem);

    // select-items
    selectItems = document.createElement("DIV");
    selectItems.setAttribute("class", "select-items select-hide");

    // search input
    if (customSelect[i].classList.contains("custom-select-with-search")) {
      searchInput = document.createElement("INPUT");
      searchInput.setAttribute("type", "text");
      searchInput.setAttribute("name", "search");
      searchInput.setAttribute("placeholder", "Napište, co hledáte");
      searchInput.setAttribute("autocomplete", "off");
      searchInput.innerHTML = selectEl.options[selectEl.selectedIndex].innerHTML;

      selectItems.appendChild(searchInput);

      // click searchInput
      searchInput.addEventListener("click", function(e) {
        // do nothing..
        e.stopPropagation();
      });

      // keyup searchInput
      searchInput.addEventListener("keyup", function(e) {
        // do filter..
        e.stopPropagation();
        filter();
      });
    }

    for (j = 0; j < selectElLenght; j++) {
      // item
      item = document.createElement("DIV");
      item.innerHTML = selectEl.options[j].innerHTML;

      // same-as-selected
      if (item.innerHTML == selectedItem.innerHTML) {
        item.setAttribute("class", "same-as-selected");
      }

      // click item
      item.addEventListener("click", function(e) {
          // update select
          let selectEl, selectElLenght;
          let selectedItem;
          let sameAsSelected, sameAsSelectedLenght;
          let i, j;

          selectEl = this.parentNode.parentNode.getElementsByTagName("select")[0];
          selectElLenght = selectEl.length;

          selectedItem = this.parentNode.previousSibling;

          for (i = 0; i < selectElLenght; i++) {
            if (selectEl.options[i].innerHTML == this.innerHTML) {
              selectEl.selectedIndex = i;
              selectedItem.innerHTML = this.innerHTML;
              sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
              sameAsSelectedLenght = sameAsSelected.length;

              for (j = 0; j < sameAsSelectedLenght; j++) {
                sameAsSelected[j].removeAttribute("class");
              }

              this.setAttribute("class", "same-as-selected");
              break;
            }
          }

          selectedItem.click();
      });

      selectItems.appendChild(item);
    }

    customSelect[i].appendChild(selectItems);

    // click selectedItem
    selectedItem.addEventListener("click", function(e) {
      let searchInput;

      // close any other and open/close the current
      e.stopPropagation();
      closeAllSelect(this);

      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");

      // focus searchInput
      searchInput = this.nextSibling.getElementsByTagName("input")[0];

      if (searchInput) {
        searchInput.focus();
      }
    });
  }

  // close all except the current
  function closeAllSelect(el) {
    let selectItems, selectItemsLenght;
    let selectedItem, selectedItemLenght;
    let arrNo = [];
    let i;

    selectItems = document.getElementsByClassName("select-items");
    selectedItem = document.getElementsByClassName("select-selected");

    selectItemsLenght = selectItems.length;
    selectedItemLenght = selectedItem.length;

    for (i = 0; i < selectedItemLenght; i++) {
      if (el == selectedItem[i]) {
        arrNo.push(i)
      } else {
        selectedItem[i].classList.remove("select-arrow-active");
      }
    }

    for (i = 0; i < selectItemsLenght; i++) {
      if (arrNo.indexOf(i)) {
        selectItems[i].classList.add("select-hide");
      }
    }
  }

  // click anywhere outside - close all
  document.addEventListener("click", closeAllSelect);

  // filter
  function filter() {
    let customSelectWithSearch, customSelectWithSearchLenght;
    let selectItems;
    let inputEl;
    let item, itemLenght;
    let filter;
    let text;
    let i, j;

    customSelectWithSearch = document.getElementsByClassName("custom-select-with-search");
    customSelectWithSearchLenght = customSelectWithSearch.length;

    for (i = 0; i < customSelectWithSearchLenght; i++) {
      selectItems = customSelectWithSearch[i].getElementsByClassName("select-items")[0];
      inputEl = selectItems.getElementsByTagName("input")[0];
      item = selectItems.getElementsByTagName("div");
      itemLenght = item.length;

      filter = inputEl.value.toUpperCase();

      for (j = 0; j < itemLenght; j++) {
        text = item[j].textContent || item[j].innerText;

        if (text.toUpperCase().indexOf(filter) > -1) {
          item[j].style.display = "";
        } else {
          item[j].style.display = "none";
        }
      }
    }
  }

});
