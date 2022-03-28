async function fetchDataUser() {
  const response = await fetch("https://test-final.b8one.academy/user");
  const responseJson = await response.json();
  return responseJson;
}

async function fetchDataMenu() {
  const response = await fetch("https://test-final.b8one.academy/menu");
  const responseJson = await response.json();
  return responseJson;
}

async function fetchDataProducts() {
  const response = await fetch("https://test-final.b8one.academy/products/more-sold");
  const responseJson = await response.json();
  return responseJson;
}

async function fetchDataRanking() {
  const response = await fetch("https://test-final.b8one.academy/resellers/ranking");
  const responseJson = await response.json();
  return responseJson;
}

async function fetchDataSales() {
  const response = await fetch("https://test-final.b8one.academy/sales");
  const responseJson = await response.json();
  return responseJson;
}



function populateUser(user) {
  const organizationName = document.querySelector(".header__logo__span");
  organizationName.insertAdjacentText("beforeend", user.organization);

  const userImage = document.querySelector('.header__notification__user');
  const img = document.createElement("img");
  img.setAttribute("src", user.photo);
  img.setAttribute("alt", "avatar do usuário");
  img.setAttribute("id", 'user_image');
  img.setAttribute("referrerpolicy", "no-referrer");
  userImage.insertAdjacentElement("beforebegin", img);

  const userName = document.getElementById("user_name");
  userName.insertAdjacentText("beforeend", user.username);
}



const menuItens = [
  {
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
  },
  {
    svg: `<svg class="nav__link__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.087 2.02852C11.1249 0.927887 12.8751 0.927887 13.913 2.02852C14.5279 2.68061 15.4326 2.97456 16.3133 2.80843C17.7999 2.52803 19.2159 3.55679 19.4086 5.05724C19.5228 5.94621 20.0819 6.7158 20.8921 7.09907C22.2596 7.74599 22.8004 9.41058 22.0744 10.7377C21.6442 11.524 21.6442 12.4753 22.0744 13.2616C22.8004 14.5887 22.2596 16.2533 20.8921 16.9002C20.0819 17.2835 19.5228 18.0531 19.4086 18.9421C19.2159 20.4425 17.7999 21.4713 16.3133 21.1909C15.4326 21.0247 14.5279 21.3187 13.913 21.9708C12.8751 23.0714 11.1249 23.0714 10.087 21.9708C9.47213 21.3187 8.56741 21.0247 7.68666 21.1909C6.2001 21.4713 4.7841 20.4425 4.59141 18.9421C4.47724 18.0531 3.91809 17.2835 3.1079 16.9002C1.74043 16.2533 1.19956 14.5887 1.92562 13.2616C2.35579 12.4753 2.35579 11.524 1.92562 10.7377C1.19956 9.41058 1.74043 7.74599 3.1079 7.09907C3.91809 6.7158 4.47724 5.94621 4.59141 5.05724C4.7841 3.55679 6.2001 2.52803 7.68666 2.80843C8.56741 2.97456 9.47213 2.68061 10.087 2.02852Z" fill="#CDD2EB"/>
            <path d="M8.46967 14.4694C8.17678 14.7623 8.17678 15.2371 8.46967 15.53C8.76256 15.8229 9.23744 15.8229 9.53033 15.53L8.46967 14.4694ZM15.5303 9.53002C15.8232 9.23713 15.8232 8.76226 15.5303 8.46936C15.2374 8.17647 14.7626 8.17647 14.4697 8.46936L15.5303 9.53002ZM9.53033 15.53L15.5303 9.53002L14.4697 8.46936L8.46967 14.4694L9.53033 15.53Z" fill="#425DC7"/>
            <path d="M11.25 8.39982C11.25 9.31109 10.5113 10.0498 9.60001 10.0498C8.68874 10.0498 7.95001 9.31109 7.95001 8.39982C7.95001 7.48855 8.68874 6.74982 9.60001 6.74982C10.5113 6.74982 11.25 7.48855 11.25 8.39982Z" stroke="#425DC7" stroke-width="1.5"/>
            <path d="M16.05 15.5996C16.05 16.5109 15.3113 17.2496 14.4 17.2496C13.4887 17.2496 12.75 16.5109 12.75 15.5996C12.75 14.6884 13.4887 13.9496 14.4 13.9496C15.3113 13.9496 16.05 14.6884 16.05 15.5996Z" stroke="#425DC7" stroke-width="1.5"/>
          </svg>`,
    submenu: [
      "Gerador de link",
      "Vitrine digital",
      "Carrinhos compartilháveis",
      "Carrinhos abandonados"
    ]
  },
  {
    svg: `<svg class="nav__link__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.625 2.99963L3.75 6.59958V19.1994C3.75 19.6768 3.95193 20.1346 4.31138 20.4722C4.67082 20.8097 5.15833 20.9994 5.66667 20.9994H19.0833C19.5917 20.9994 20.0792 20.8097 20.4386 20.4722C20.7981 20.1346 21 19.6768 21 19.1994V6.59958L18.125 2.99963H6.625Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.75 6.59979H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.2086 10.1994C16.2086 11.1549 15.8047 12.0713 15.0858 12.7469C14.3669 13.4225 13.3919 13.8021 12.3753 13.8021C11.3586 13.8021 10.3836 13.4225 9.66469 12.7469C8.9458 12.0713 8.54193 11.1549 8.54193 10.1994" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
  },
  {
    svg: `<svg class="nav__link__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.9992C17.5228 21.9992 22 17.5221 22 11.9994C22 6.4766 17.5228 1.99951 12 1.99951C6.47715 1.99951 2 6.4766 2 11.9994C2 17.5221 6.47715 21.9992 12 21.9992Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 7.99939H11.1667C9.97 7.99939 9 8.89481 9 9.99936C9 11.104 9.97 11.9993 11.1667 11.9993H12.8333C14.03 11.9993 15 12.8947 15 13.9993C15 15.1039 14.03 15.9993 12.8333 15.9993H9" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5.99951V7.99951" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15.9993L12 17.9993" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    submenu: [
      "Pagamentos",
      "Comissões",
      "Bônus de Perfomance"
    ]
  },
  {
    svg: `<svg class="nav__link__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_701_3999)">
            <path d="M19.4 14.9993C19.2669 15.3009 19.2272 15.6355 19.286 15.9599C19.3448 16.2843 19.4995 16.5836 19.73 16.8193L19.79 16.8793C19.976 17.065 20.1235 17.2856 20.2241 17.5284C20.3248 17.7712 20.3766 18.0314 20.3766 18.2943C20.3766 18.5571 20.3248 18.8173 20.2241 19.0601C20.1235 19.3029 19.976 19.5235 19.79 19.7092C19.6043 19.8952 19.3837 20.0427 19.1409 20.1434C18.8981 20.244 18.6378 20.2958 18.375 20.2958C18.1122 20.2958 17.8519 20.244 17.6091 20.1434C17.3663 20.0427 17.1457 19.8952 16.96 19.7092L16.9 19.6492C16.6643 19.4187 16.365 19.2641 16.0406 19.2052C15.7162 19.1464 15.3816 19.1861 15.08 19.3192C14.7842 19.446 14.532 19.6565 14.3543 19.9248C14.1766 20.1931 14.0813 20.5074 14.08 20.8292V20.9992C14.08 21.5296 13.8693 22.0383 13.4942 22.4134C13.1191 22.7885 12.6104 22.9992 12.08 22.9992C11.5496 22.9992 11.0409 22.7885 10.6658 22.4134C10.2907 22.0383 10.08 21.5296 10.08 20.9992V20.9092C10.0723 20.5782 9.96512 20.2572 9.77251 19.9879C9.5799 19.7186 9.31074 19.5135 9 19.3992C8.69838 19.2661 8.36381 19.2264 8.03941 19.2852C7.71502 19.3441 7.41568 19.4987 7.18 19.7292L7.12 19.7892C6.93425 19.9752 6.71368 20.1227 6.47088 20.2234C6.22808 20.324 5.96783 20.3758 5.705 20.3758C5.44217 20.3758 5.18192 20.324 4.93912 20.2234C4.69632 20.1227 4.47575 19.9752 4.29 19.7892C4.10405 19.6035 3.95653 19.3829 3.85588 19.1401C3.75523 18.8973 3.70343 18.6371 3.70343 18.3743C3.70343 18.1114 3.75523 17.8512 3.85588 17.6084C3.95653 17.3656 4.10405 17.145 4.29 16.9593L4.35 16.8993C4.58054 16.6636 4.73519 16.3643 4.794 16.0399C4.85282 15.7155 4.81312 15.3809 4.68 15.0793C4.55324 14.7835 4.34276 14.5313 4.07447 14.3536C3.80618 14.176 3.49179 14.0806 3.17 14.0793H3C2.46957 14.0793 1.96086 13.8686 1.58579 13.4935C1.21071 13.1185 1 12.6098 1 12.0794C1 11.5489 1.21071 11.0402 1.58579 10.6652C1.96086 10.2901 2.46957 10.0794 3 10.0794H3.09C3.42099 10.0716 3.742 9.9645 4.0113 9.7719C4.28059 9.57929 4.48572 9.31013 4.6 8.9994C4.73312 8.69779 4.77282 8.36321 4.714 8.03882C4.65519 7.71443 4.50054 7.4151 4.27 7.17942L4.21 7.11942C4.02405 6.93368 3.87653 6.71311 3.77588 6.47031C3.67523 6.22752 3.62343 5.96727 3.62343 5.70444C3.62343 5.44162 3.67523 5.18137 3.77588 4.93857C3.87653 4.69578 4.02405 4.47521 4.21 4.28946C4.39575 4.10351 4.61632 3.956 4.85912 3.85535C5.10192 3.7547 5.36217 3.7029 5.625 3.7029C5.88783 3.7029 6.14808 3.7547 6.39088 3.85535C6.63368 3.956 6.85425 4.10351 7.04 4.28946L7.1 4.34946C7.33568 4.58 7.63502 4.73464 7.95941 4.79346C8.28381 4.85228 8.61838 4.81257 8.92 4.67946H9C9.29577 4.5527 9.54802 4.34222 9.72569 4.07393C9.90337 3.80565 9.99872 3.49126 10 3.16948V2.99948C10 2.46906 10.2107 1.96036 10.5858 1.58529C10.9609 1.21022 11.4696 0.999512 12 0.999512C12.5304 0.999512 13.0391 1.21022 13.4142 1.58529C13.7893 1.96036 14 2.46906 14 2.99948V3.08948C14.0013 3.41126 14.0966 3.72565 14.2743 3.99393C14.452 4.26222 14.7042 4.4727 15 4.59946C15.3016 4.73257 15.6362 4.77228 15.9606 4.71346C16.285 4.65464 16.5843 4.5 16.82 4.26946L16.88 4.20947C17.0657 4.02352 17.2863 3.876 17.5291 3.77535C17.7719 3.67471 18.0322 3.6229 18.295 3.6229C18.5578 3.6229 18.8181 3.67471 19.0609 3.77535C19.3037 3.876 19.5243 4.02352 19.71 4.20947C19.896 4.39521 20.0435 4.61578 20.1441 4.85858C20.2448 5.10137 20.2966 5.36162 20.2966 5.62445C20.2966 5.88727 20.2448 6.14752 20.1441 6.39031C20.0435 6.63311 19.896 6.85368 19.71 7.03942L19.65 7.09942C19.4195 7.3351 19.2648 7.63443 19.206 7.95882C19.1472 8.28321 19.1869 8.61779 19.32 8.9194V8.9994C19.4468 9.29516 19.6572 9.54741 19.9255 9.72508C20.1938 9.90275 20.5082 9.9981 20.83 9.99938H21C21.5304 9.99938 22.0391 10.2101 22.4142 10.5852C22.7893 10.9602 23 11.4689 23 11.9994C23 12.5298 22.7893 13.0385 22.4142 13.4135C22.0391 13.7886 21.5304 13.9993 21 13.9993H20.91C20.5882 14.0006 20.2738 14.096 20.0055 14.2736C19.7372 14.4513 19.5268 14.7035 19.4 14.9993V14.9993Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14.9994C13.6569 14.9994 15 13.6562 15 11.9994C15 10.3425 13.6569 8.99939 12 8.99939C10.3431 8.99939 9 10.3425 9 11.9994C9 13.6562 10.3431 14.9994 12 14.9994Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_701_3999">
            <rect width="24" height="23.9997" fill="white" transform="translate(0 -0.000488281)"/>
            </clipPath>
            </defs>
        </svg>`,
    submenu: [
      "Membros",
      "Gerais",
      "Customizações",
      "White Label"
    ]
  },
  {
    svg: `<svg class="nav__link__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3.74915H3.75V10.4991H10.5V3.74915Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.25 13.4991H13.5V20.2491H20.25V13.4991Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.4991H3.75V20.2491H10.5V13.4991Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8447 10.2522C17.8447 10.6664 17.5089 11.0022 17.0947 11.0022C16.6805 11.0022 16.3447 10.6664 16.3447 10.2522L16.3447 7.74915H14C13.5858 7.74915 13.25 7.41336 13.25 6.99915C13.25 6.58493 13.5858 6.24915 14 6.24915H16.3447L16.3447 3.74915C16.3447 3.33493 16.6805 2.99915 17.0947 2.99915C17.5089 2.99915 17.8447 3.33493 17.8447 3.74915V6.24915H20.5031C20.9173 6.24915 21.2531 6.58493 21.2531 6.99915C21.2531 7.41336 20.9173 7.74915 20.5031 7.74915H17.8447V10.2522Z" fill="#425DC7"/>
          </svg>`,
    submenu: [
      "Hubly Store",
      "Retailer Form",
      "Retailer Cluster",
      "Retailer Invoice"
    ]
  }
]


function populateMenu(menu){

  const ListUl = document.querySelector(".nav__list");

  const menuArray = menu.map((item, index) => {

    if(item.hasChildren){
      return `
      <li class="dropdown-btn nav__item">
        <a href="#" class="nav__link">
          <div>
            ${menuItens[index].svg} 
            <span>${item.name}</span> 
          </div>
          <svg class="nav__link__dropdown" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50024 9.74933L12.0002 14.2493L16.5002 9.74933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
      <div class="dropdown-container hide">
      ${menuItens[index].submenu.map(el => `<a href="#">${el}</a>`).join(" ")}
      </div>
    `
    }else {
      return `
          <li class="nav__item">
            <a href="#" class="nav__link">
              <div>
                ${menuItens[index].svg} 
                <span>${item.name}</span> 
              </div>
            </a>
          </li> 
        `
    }
  });
  const listHtml = menuArray.join(" ");
  ListUl.insertAdjacentHTML("beforeend", listHtml);
}


function loadMenu(){
  const dropdown = document.getElementsByClassName("dropdown-btn"); 
  const drop2 = document.querySelectorAll('.dropdown')
  let i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function(){
      this.classList.toggle("nav__link--active");
      let dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle('hide')
    });
  }
}


function dataSumaryMenuActive(){
  const periodesBtn = document.querySelectorAll('.data-summary__nav__item')
  const period = document.querySelector('.period__selected')

  let options = {day: 'numeric', month: 'long', year: 'numeric' };
  let from = new Date();


  periodesBtn.forEach(el => {
    el.addEventListener('click', function(){
      periodesBtn.forEach(item => item.classList.remove('data-summary--active'))
      this.classList.add('data-summary--active')

      let to = new Date(); 
  
      switch(el.innerText){
        case 'Últimos 7 dias':
          to.setDate(to.getDate() + 7);
          period.innerText = from.toLocaleDateString('pt-BR', options) + ' à ' + 
                              to.toLocaleDateString('pt-BR', options)
          break;
        case 'Últimos 15 dias':
          to.setDate(to.getDate() + 15);
          period.innerText = from.toLocaleDateString('pt-BR', options) + ' à ' + 
                              to.toLocaleDateString('pt-BR', options)
          break;
        case 'Último mês':
          to.setDate(to.getDate() - 30);
          period.innerText = to.toLocaleDateString('pt-BR', options) + ' à ' + 
                              from.toLocaleDateString('pt-BR', options)
          break;
        case 'Último ano':
          to.setDate(to.getDate() - 365);
          period.innerText = to.toLocaleDateString('pt-BR', options) + ' à ' + 
                              from.toLocaleDateString('pt-BR', options)
          break;  
      }
    })
  })
}



function populateSales(sales){
  const revenues = document.getElementById("revenues")
  const totalSales = document.getElementById("totalSales")
  const averageTicket = document.getElementById("averageTicket")

  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const revenue = formatter.format(sales.revenues/100); 
  const average = formatter.format(sales.averageTicket/100); 

  revenues.insertAdjacentText("beforeend", revenue)
  totalSales.insertAdjacentText("beforeend", sales.totalSales)
  averageTicket.insertAdjacentText("beforeend", average)
}


function populateProducts(products) {
 
  const listTwo = products.slice(5,10).concat(products.slice(0,5))
  const listTree = products.slice(4,10).concat(products.slice(0,4))
  const listAllProducts = products.concat(listTwo).concat(listTree)


  const productsArray = listAllProducts.map((product, index) => {

    const valueToString = (product.price).toString()
    const result = valueToString.slice(0,4)
    let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    let valor = parseFloat(result);
    let price = formatter.format(valor); 

    return `
        <ul class="table__item">
          <li class="item-quantity">${index+1}</li>
          <li class="table__item__description">
            <img class="description__img" src=${product.image} alt="imagem do produto" referrerpolicy="no-referrer">
            <span class="description__span">${product.name}</span>
          </li>
          <li>${'#'+ product.orderId}</li>
          <li>${product.department}</li>
          <li class="item__value">${price}</li>
        </ul>
      `;
  });

  createPagination(productsArray)
}



function createPagination(products){
  
  const html={
    get(element){
      return document.querySelector(element)
    }
  }
  
  const state = {
    page: 1,
    perPage: 10,
    totalPages: 3
  }

  function selectedOption(){
    let select = document.querySelector('#select')

    select.addEventListener('change', () => {
      let optionValue = select.options[select.selectedIndex].value;
      state.perPage = +optionValue
      state.totalPages = Math.ceil(products.length / +optionValue)

      update()
      buttons.create()
      buttons.buttonListener()
    })
  }
  

  const list = {
    create(item){
      html.get('.products__table').insertAdjacentHTML("beforeend", item); 
    },
    update(){ 
      html.get('.products__table').innerHTML = "";

      let page = state.page -1
      let start = page * state.perPage
      let end = start + state.perPage

      const paginatedItem = products.slice(start, end)
      paginatedItem.forEach(list.create)
    }
  }

  const controls = {
    next(){
      state.page++

      const lastPage = state.page > state.totalPages
      if(lastPage){
        state.page--
      }
    },

    prev(){
      state.page--

      if(state.page < 1){
        state.page++
      }
    },

    goTo(page){
      if(page < 1){
        page = 1
      }

      state.page = +page
   
      if(page > state.totalPages){
        state.page = state.totalPages
      }
    },

    createListeners(){
      html.get('.next').addEventListener('click', ()=>{
        const botoes = document.querySelectorAll('.page-number')
        botoes.forEach(element => {
          botoes.forEach(item => item.classList.remove('page-number--active'))
        });
        controls.next()
        update()
      })

      html.get('.prev').addEventListener('click', ()=>{
        const botoes = document.querySelectorAll('.page-number')
        botoes.forEach(element => {
          botoes.forEach(item => item.classList.remove('page-number--active'))
        });
        controls.prev()
        update()
      })
    }
  }

  const buttons = {
    create(){
      html.get('.numbers').innerHTML = ''

      for(let i=1; i <= state.totalPages; i++ ){
        const button = document.createElement('div')
        button.setAttribute('class', 'page-number')
        button.innerHTML = i

        button.addEventListener('click', (evt)=>{
          const pag = evt.target.innerText
          controls.goTo(pag)
          update()
        })
     
        html.get('.numbers').appendChild(button)
      }   
    },
 
    buttonListener(){
      const botoes = document.querySelectorAll('.page-number')
      botoes.forEach(element => {
        element.addEventListener('click', function() {
          botoes.forEach(item => item.classList.remove('page-number--active'))
          this.classList.add('page-number--active')
        })
      });
    }
  }

  function update(){
    list.update()
  }

  controls.createListeners()
  buttons.create()
  buttons.buttonListener()
  update()
  selectedOption()
}



/* avatares do ranking revendedores */
const avatarObject = {
  0: "./assets/images/avatares/hr.png",
  1: "./assets/images/avatares/dl.png",
  2: "./assets/images/avatares/bs.png",
  3: "./assets/images/avatares/mn.png",
  4: "./assets/images/avatares/yc.png",
  5: "./assets/images/avatares/hr.png",
  6: "./assets/images/avatares/dl.png",
  7: "./assets/images/avatares/bs.png",
  8: "./assets/images/avatares/mn.png",
  9: "./assets/images/avatares/yc.png",
}



function populateRanking(resellers){
  const list = document.getElementById('ranking__container')

  const listRessellers = resellers.concat(resellers)
  

  const resellersArray = listRessellers.map((reseller, index) => {
    return `
    <div class="ranking__list">
      <span class="ranking__list__position">${index+1}°</span>
      <div class="ranking__list__data">
        <img src=${avatarObject[index]} alt="" referrerpolicy="no-referrer">
        <div>
          <span class="ranking__list__data__name">${reseller.name}</span>
          <div class="ranking__list__data__pedidos">
           <span> ${reseller.ordersCount} pedidos</span>
             <span>
              ${reseller.percentage == '-6%' ? 
              ` <span class="span__value--negative">
                ${reseller.percentage}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.00024 6.5L8.00024 9.5L11.0002 6.5" stroke="#EB0045" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
                `
              : `
              <span class="span__value--positive">
                ${reseller.percentage}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>`
            }
            </span>
          </div>
        </div>
      </div>
    </div>
      `
  });
    
  const resellerHtml = resellersArray.join(" ");
  list.insertAdjacentHTML("beforeend", resellerHtml);
}




function openGraphic(evt, typeReport) {

  let i, tab__content, tab__nav__links;

  tab__content = document.getElementsByClassName("tab__content");
  for (i = 0; i < tab__content.length; i++) {
    tab__content[i].style.display = "none";
  }

  tab__nav__links = document.getElementsByClassName("tab__nav__links");
  for (i = 0; i < tab__nav__links.length; i++) {
    tab__nav__links[i].className = tab__nav__links[i].className.replace(" active", "");
  }

  if(typeReport === 'Revendedores' && window.matchMedia("(min-width:900px)").matches){
    document.getElementById("ranking").style.display = "block";
    document.getElementById("report__container--left").style.width = "calc(100% - 404px)";
    document.getElementById("report__container--left").style.marginRight = "64px";
  }else if(typeReport === 'Revendedores' && window.matchMedia("(max-width:900px)").matches){
    document.getElementById("ranking").style.display = "block";
    document.querySelector(".report").style.height = "auto";
    document.getElementById("report__container--left").style.width = "100%";
    document.getElementById("report__container--left").style.marginRight = "0";
  }else if(typeReport != 'Revendedores' && window.matchMedia("(max-width:900px)").matches){
    document.querySelector(".report").style.height = "415px";
    document.getElementById("ranking").style.display = "none";
    document.getElementById("report__container--left").style.width = "100%";
    document.getElementById("report__container--left").style.marginRight = "0";
  }else{
    document.querySelector(".report").style.height = "502px";
    document.getElementById("ranking").style.display = "none";
    document.getElementById("report__container--left").style.width = "100%";
    document.getElementById("report__container--left").style.marginRight = "0";
  }

  document.getElementById(typeReport).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();






async function main(){
  const dataUser = await fetchDataUser();
  const dataMenu = await fetchDataMenu();
  const dataSales = await fetchDataSales();
  const dataRnking = await fetchDataRanking();
  const dataProducts = await fetchDataProducts();


  populateUser(dataUser);
  populateMenu(dataMenu.menuTree);
  populateSales(dataSales);
  populateProducts(dataProducts.products)
  populateRanking(dataRnking.resellers);
  loadMenu();
  dataSumaryMenuActive();
}

main();

