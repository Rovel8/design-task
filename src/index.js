import "../styles/styles.css"
import "../index.html"

const catalog = document.getElementById('catalog')
const health = document.getElementById('health')
const beauty = document.getElementById('beauty')
const enjoy = document.getElementById('enjoy')
const car = document.getElementById('car')
const burger = document.querySelector('.aside__burger')
const menu = document.querySelector('.aside')
const logo = document.querySelector('.aside__title')
const label = document.querySelectorAll('.item-nav__label')
const title = document.querySelector('.main__title')

const elements = [catalog, health, beauty, enjoy, car]

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('open')
    logo.classList.toggle('show-menu')
    label.forEach(item => {
        item.classList.toggle('show-menu')
    })
})

let previousElement;
let selectedElement;

elements.map(item => {
    item.addEventListener('click', (e) => {
        if(item.style.color !== '#34ABE0'){
            if(!selectedElement){
                selectedElement = item
            }else if(selectedElement !== item){
                previousElement = selectedElement
                let prevId = previousElement.id
                previousElement.childNodes[1].src = `/default/${prevId}.svg`
                previousElement.style.color = ''
                previousElement.style.borderLeft = 'none'
                selectedElement = item
            }
            selectedElement.childNodes[1].src = `/active/${item.id}-active.svg`
            selectedElement.style.borderLeft = '2px solid #34ABE0'
            selectedElement.style.color = '#34ABE0'
            title.textContent = selectedElement.textContent
        }
        
    })
})