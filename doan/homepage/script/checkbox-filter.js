const filter1 = document.getElementById("filter1");
const filter2 = document.getElementById("filter2");
const filter3 = document.getElementById("filter3");
const applyFilterBtn = document.getElementById("applyFilter");
const clearFilterBtn = document.getElementById("clearFilter");

// Get the content to filter
const content = document.getElementById("content");

// Add event listeners to the apply/clear filter buttons
applyFilterBtn.addEventListener("click", applyFilter);
clearFilterBtn.addEventListener("click", clearFilter);

// Function to apply filter
function applyFilter() {
    // Get the values of the selected filters
    const filter1Value = filter1.checked;
    const filter2Value = filter2.checked;
    const filter3Value = filter3.checked;
  
    // Loop through each item in the content and check if it matches the filter
    for (let i = 0; i < content.children.length; i++) {
      const item = content.children[i];
      const itemFilter1 = item.innerText.includes("filter1");
      const itemFilter2 = item.innerText.includes("filter2");
      const itemFilter3 = item.innerText.includes("filter3");
  
      // Check if the item matches the filter and show/hide it accordingly
      if (
        (filter1Value && itemFilter1) ||
        (filter2Value && itemFilter2) ||
        (filter3Value && itemFilter3)
      ) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  
    // Get all items that are visible (i.e., not hidden by the filter)
    const visibleItems = Array.from(content.children).filter((item) => !item.classList.contains("hide"));
  
    // Loop through each visible item and hide it if it does not satisfy all selected filters
    for (let i = 0; i < visibleItems.length; i++) {
      const item = visibleItems[i];
      const itemFilter1 = item.innerText.includes("filter1");
      const itemFilter2 = item.innerText.includes("filter2");
      const itemFilter3 = item.innerText.includes("filter3");
  
      if (
        (filter1Value && !itemFilter1) ||
        (filter2Value && !itemFilter2) ||
        (filter3Value && !itemFilter3)
      ) {
        item.classList.add("hide");
      }
    }
  }

// Function to clear filter and show all items
function clearFilter() {
  // Uncheck all filter checkboxes
  filter1.checked = false;
  filter2.checked = false;
  filter3.checked = false;

  // Show all items
  for (let i = 0; i < content.children.length; i++) {
    const item = content.children[i];
    item.classList.remove("hide");
  }
}