const itemList = document.getElementById('item-list');
const sortSelect = document.getElementById('sort-by');
const filterSelect = document.getElementById('filter-by');

const items = [
  {name: 'Item 1', price: 10, year: 2020, category: 'category1'},
  {name: 'Item 2', price: 20, year: 2019, category: 'category2'},
  {name: 'Item 3', price: 5, year: 2021, category: 'category2'},
  {name: 'Item 4', price: 15, year: 2018, category: 'category3'},
];

function renderItems(filteredItems) {
  itemList.innerHTML = '';
  for (let item of filteredItems) {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} - ${item.year}`;
    itemList.appendChild(li);
  }
}

function sortAndFilterItems() {
  const sortBy = sortSelect.value;
  const filterBy = filterSelect.value;
  let filteredItems = items;
  if (filterBy) {
    filteredItems = items.filter(item => item.category === filterBy);
  }
  filteredItems.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    } else if (a[sortBy] > b[sortBy]) {
      return 1;
    } else {
      return 0;
    }
  });
  renderItems(filteredItems);
}

sortSelect.addEventListener('change', sortAndFilterItems);
filterSelect.addEventListener('change', sortAndFilterItems);

sortAndFilterItems();