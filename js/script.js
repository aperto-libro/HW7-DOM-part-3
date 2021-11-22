const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const ul = document.querySelector('.list');

button.addEventListener('click', addListItem);
ul.addEventListener('click', changeList);

function createListItem() {
  let li = document.createElement('li');
  li.innerHTML = `&#6145 ${input.value}<button class="remove-button">&#10006;</button>`;
  li.className = 'list-item';
  ul.append(li);
}

function addListItem() {
  if (input.value) {
    createListItem();
    input.value = '';
    input.placeholder = 'Enter new ToDo';
  } else {
    input.placeholder = "This field can't be empty!";
  }
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
      break;
  }
}
