const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    e.target.classList.add('active');
  });
});

const elementoH1 = document.querySelector('#saludo');

const textoBienvenida = 'Hola! Soy Jose Ovalle';
let currentText = "";

for (let index = 0 ; index < textoBienvenida.length; index ++)
{
  const letra = textoBienvenida[index];
  setTimeout(() => {
    currentText = currentText + letra;
    elementoH1.innerText = currentText;
  }, 100 * index);
}