//создание формы
const form = document.createElement('form')
const selectBox = document.createElement('select')

const options = document.querySelectorAll('td')
options.forEach(function(element,index) {
    selectBox[index] = new Option(element,index);
    selectBox[index].textContent = options[index].textContent
});

selectBox[0].setAttribute('checked', 'true')

const inputColor = document.createElement('input')
inputColor.setAttribute('type', 'color')
inputColor.setAttribute('value', '#FF0000')

const button = document.createElement('button')
button.textContent = 'Нажать'

//добавление элементов на страницу
document.body.append(form)
form.append(selectBox)
form.append(inputColor)
form.append(button)

//добавление обработчика на кнопку
document.querySelector('button').addEventListener('click', function (event) {
    event.preventDefault()
    let selectBox = document.querySelector('select')
    let currentIndex = selectBox.selectedIndex
    let currentColor = document.querySelector('input').value
    for (let item of options) {
        item.style.backgroundColor = currentColor
        options.item(currentIndex).style.backgroundColor = 'white'
    }
})
