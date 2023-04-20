const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');
const itemsContainer = document.querySelector('.items');

gridBtn.addEventListener('click', () => {
  listBtn.classList.remove('active');
  gridBtn.classList.add('active');
  itemsContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
  gridBtn.classList.remove('active');
  listBtn.classList.add('active');
  itemsContainer.classList.add('list');
});