const header = [
    { src: 'img/point_1.svg', alt: 'point_1', line1: 'м. Кропоткинская', line2: 'Соймоновский проезд, д.7 с.1' },
    { src: 'img/point_2.svg', alt: 'point_2', line1: 'Пн - Пт 11 - 20', line2: 'Сб - Вск 11 - 18' },
    { src: 'img/point_3.svg', alt: 'point_3', line1: '+7 800 000 00 00', line2: '+7 800 000 00 00' },
    { src: 'img/point_4.svg', alt: 'point_4', line1: '', line2: '' }
];

function createHeader(item) {
    return `
        <div class="nav-item">
            <div class="nav-item__img"><img src="${item.src}" alt="${item.alt}"></div>
            <div class="nav-item__text">
                <p>${item.line1}</p>
                <p>${item.line2}</p>
            </div>
        </div>
    `
}

const head = header.map((item) => createHeader(item));
const headHtml = head.join(' ');

document.querySelector(".h-wrap__nav").innerHTML = headHtml;



const info = [
    { src: 'img/icon_1.svg', alt: 'icon_1', line1: 'Только', line2: 'натуральный состав' },
    { src: 'img/icon_2.svg', alt: 'icon_2', line1: 'Актуальное', line2: 'наличие на сайте' },
    { src: 'img/icon_3.svg', alt: 'icon_3', line1: 'Быстрая', line2: 'отправка' },
    { src: 'img/icon_4.svg', alt: 'icon_4', line1: 'Удобное', line2: 'расположение' },
    { src: 'img/icon_5.svg', alt: 'icon_5', line1: 'Помощь', line2: 'в подборе товаров' }
];

function createBody(item) {
    return `
        <div class="info-bl__item"><img src="${item.src}" alt="${item.alt}">
            <div class="info-bl__item-text">${item.line1} <br>
            ${item.line2}</div>
        </div>
    `
}

const body = info.map((item) => createBody(item));
const bodyHtml = body.join(' ');

document.querySelector(".info-bl").innerHTML = bodyHtml;



const btn = [
    { text: 'Пряжа', href: "#" },
    { text: 'Спицы', href: "#" },
    { text: 'Крючки', href: "#" },
    { text: 'Аксессуары', href: "#" },
    { text: 'Подарочные сертификаты', href: "#" },
    { text: 'МК и описания', href: "#" },
    { text: 'Модели', href: "#" },
];

function createNav(nav_btn) {
    return `
        <div class="h-link-wrap__item">
            <a href="${nav_btn.href}">${nav_btn.text}</a>
        </div>
    `
}

const menu = btn.map((nav_btn) => createNav(nav_btn));
const html = menu.join(' ');

document.querySelector(".h-link-wrap").innerHTML = html;



const sld = [
    { src: 'img/slider1_1.jpg', alt: 'img_1' },
    { src: 'img/slider1_2.jpg', alt: 'img_2' },
    { src: 'img/slider1_3.jpg', alt: 'img_3' },
    { src: 'img/slider1_4.jpg', alt: 'img_4' },
    { src: 'img/slider1_5.jpg', alt: 'img_5' }
];

function createSlider(item) {
    return `
        <li class="sim-slider-element"><img src="${item.src}" alt="${item.alt}"></li>
    `
}

const slider = sld.map((item) => createSlider(item));
const SliderHtml = slider.join(' ');

document.querySelector(".sim-slider-list").innerHTML = SliderHtml;



function createDowmElem() {
    return `
	<div class="sim-slider-arrow-left"></div>
	<div class="sim-slider-arrow-right"></div>
	<div class="sim-slider-dots"><span class="sim-dot"></span></div>
	`
};

const downElem = createDowmElem();

document.querySelector('#slider1-down-elements').innerHTML = downElem;

