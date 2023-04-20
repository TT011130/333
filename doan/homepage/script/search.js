const search = document.getElementById('search');
const category = document.getElementById('category');
const results = document.getElementById('results');

const data = [
  { name: 'Result 1', category: 'category1' },
  { name: 'Result 2', category: 'category2' },
  { name: 'Result 3', category: 'category3' },
  { name: 'Result 4', category: 'category1' },
  { name: 'Result 5', category: 'category2' },
  { name: 'Result 6', category: 'category3' },
  { name: 'Result 7', category: 'category1' },
  { name: 'Result 8', category: 'category2' },
  { name: 'Result 9', category: 'category3' },
];

function filterData() {
  let filteredData = data;
  if (category.value !== 'all') {
    filteredData = data.filter((item) => item.category === category.value);
  }
  const regex = new RegExp(search.value, 'gi');
  filteredData = filteredData.filter((item) => item.name.match(regex));
  showResults(filteredData);
}

function showResults(data) {
  let html = '';
  if (data.length > 0) {
    html = '<ul>';
    data.forEach((item) => {
      html += `<li>${item.name} - ${item.category}</li>`;
    });
    html += '</ul>';
  } else {
    html = 'No results found.';
  }
  results.innerHTML = html;
  results.style.display = 'block';
}

search.addEventListener('input', filterData);
category.addEventListener('change', filterData);