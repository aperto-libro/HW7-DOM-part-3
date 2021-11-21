const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const ul = document.querySelector('.list');

button.addEventListener('click', addListItem);
ul.addEventListener('click', changeList);

function createListItem() {
  let li = document.createElement('li');
  li.innerHTML = `—  ${input.value}<button class="remove-button">Remove</button>`;
  li.className = 'list-item to-do';
  ul.append(li);
}

function addListItem() {
  if (!input.value) return;
  createListItem();
  input.value = '';
}

function removeElem(el) {
  el.parentNode.remove();
}

function toggleElem(el) {
  el.classList.toggle('to-do');
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
      break;
  }
}
