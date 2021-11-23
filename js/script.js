const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const ul = document.querySelector('.list');

button.addEventListener('click', function () {
  if (input.value) {
    let data = createListItem(input.value);

    ul.append(data);
    input.value = '';
  }
});

ul.addEventListener('click', changeList);

function createListItem(elem) {
  let li = document.createElement('li');
  li.innerHTML = `&#6145 ${elem}<button class="remove-button">&#10006;</button>`;
  li.className = 'list-item';
  return li;
}

function removeElem(el) {
  el.closest('li').remove();
}

function toggleElem(el) {
  el.classList.toggle('done');
}

function changeList(event) {
  let target = event.target;

  switch (target.tagName) {
    case 'BUTTON':
      removeElem(target);
      break;
    case 'LI':
      toggleElem(target);
      break;
    default:
      console.log('error');
  }
}
