const home = document.querySelector('.side_menu_links a[href="/home"]');
const deportes = document.querySelector(".side_menu_links .core_sport_line");
const inLife = document.querySelector(".side_menu_links .core_sport_live");
const resultOfSport = document.querySelector('.side_menu_links a[href="/result"]');


const auth = document.querySelector('.for_auth');
const verification = document.querySelector('.modal_link[href="#verification"]');
const voucher = document.querySelector('.modal_link[href="#voucher"]');
const logo = document.querySelector('.logo');
logo.href = ''
home.style.display = 'none'

if(voucher){
  voucher.style.display = 'none'
}
if(verification){
  verification.style.display = 'none'
}

if(auth){
  auth.style.display = 'none'
}

resultOfSport.style.display = 'none'
inLife.style.display = 'none'
deportes.style.display = 'none'

const profile_svg =
  `<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
            <path d="M14.5 8.5C14.5 9.88071 13.3807 11 12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5Z" fill="#ffffff"/>
            <path d="M15.5812 16H8.50626C8.09309 16 7.87415 15.5411 8.15916 15.242C9.00598 14.3533 10.5593 13 12.1667 13C13.7899 13 15.2046 14.3801 15.947 15.2681C16.2011 15.5721 15.9774 16 15.5812 16Z" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2"/>
        </svg>`;

const live_svg = <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="line-menu-panel__item__icon svg-col-mid" viewBox="0 0 22.543 22.997" width="32" height="32" style='margin-right: 15px'><path d="M17.801 6.529a6.53 6.53 0 1 1-13.059-.003 6.53 6.53 0 0 1 13.059.003M10.361 22.997H0v-6.431l5.182-1.591zM12.182 22.997h10.361v-6.431l-5.182-1.591zM14.459 14.17l-3.188 1.841-3.187-1.841v4.016l3.187-1.84 3.188 1.84z" fill="#D1B475"/></svg>
const plus_svg = <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff" width='30' height='30'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-464.000000, -1087.000000)" fill="#ffffff"> <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>


const slots_svg =<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="line-menu-panel__item__icon svg-col-mid" viewBox="0 0 40.219 35.365"  height="32" style='margin-right: 10px'><path d="M4.65 23.146h6.381v-9.232H4.65v9.232zm3.191-2.818l-2.098-1.915.509-1.181h3.177l.509 1.181-2.097 1.915zM12.884 23.146h6.381v-9.232h-6.381v9.232zm3.191-2.818l-2.097-1.915.508-1.181h3.178l.508 1.181-2.097 1.915zM21.119 23.146H27.5v-9.232h-6.381v9.232zm3.19-2.818l-2.098-1.915.509-1.181h3.178l.509 1.181-2.098 1.915z" fill="#D1B475"/><path d="M28.892 9.025h-3.117a.58.58 0 0 1 .061.22c.053.286-.107.617-.483.617a.467.467 0 0 1-.466-.333.416.416 0 0 1-.072-.061l-.019-.021a.526.526 0 0 1-.301-.247.496.496 0 0 1-.291-.057l-.033-.005a.386.386 0 0 1-.213-.113h-.563a.53.53 0 0 1-.472.332c-.015.015-.033.028-.048.043a.435.435 0 0 1-.291.143c-.022.04-.042.081-.075.115l-.041.041a.516.516 0 0 1-.723 0 .51.51 0 0 1-.033-.674H10.528c-.003.042-.013.083-.021.123a.524.524 0 0 1-.081.619.515.515 0 0 1-.694.023.55.55 0 0 1-.16-.173c-.031-.013-.063-.023-.092-.04-.056-.03-.108-.064-.164-.095a.67.67 0 0 1-.117-.084c-.092-.031-.182-.068-.272-.103a.883.883 0 0 1-.369-.27h-.656c-.003.03-.006.062-.013.091a.826.826 0 0 1-.632.663.654.654 0 0 1-.451.166c-.548 0-.762-.513-.647-.919h-2.9A3.257 3.257 0 0 0 0 12.284v19.822c0 1.8 1.459 3.258 3.259 3.258h25.634a3.258 3.258 0 0 0 3.258-3.258V12.284a3.26 3.26 0 0 0-3.259-3.259m-5.648 22.05H8.906v-1.738h14.338v1.738zm5.92-6.245H2.987V12.284h26.177V24.83z" fill="#D1B475"/><path d="M31.734 20.267h1.656v9.423h-1.656zM19.169 10.852a.669.669 0 0 1-.309-.076l-2.785-1.455-2.787 1.455a.664.664 0 0 1-.963-.698l.523-3.1-2.246-2.201a.663.663 0 0 1 .369-1.131l3.109-.461L15.478.37c.115-.227.346-.37.598-.37s.482.143.594.369l1.4 2.815 3.109.461a.663.663 0 0 1 .367 1.131l-2.245 2.201.523 3.1a.665.665 0 0 1-.655.775m-3.093-2.944c.104 0 .21.025.307.075l1.91.997-.357-2.125a.66.66 0 0 1 .189-.584l1.539-1.508-2.131-.316a.665.665 0 0 1-.498-.361l-.959-1.93-.959 1.929a.666.666 0 0 1-.498.362l-2.131.316 1.539 1.508a.667.667 0 0 1 .189.584l-.358 2.125 1.91-.997a.67.67 0 0 1 .308-.075" fill="#D1B475"/><path d="M10.859 11.175a.525.525 0 0 1-.242-.06l-2.19-1.143-2.19 1.144a.525.525 0 0 1-.55-.04.527.527 0 0 1-.207-.509l.411-2.437-1.765-1.731a.524.524 0 0 1 .29-.889l2.444-.363 1.1-2.212a.524.524 0 0 1 .935-.001l1.102 2.213 2.443.362a.522.522 0 0 1 .289.889l-1.766 1.729.412 2.437a.52.52 0 0 1-.208.509.508.508 0 0 1-.308.102M8.427 8.861a.52.52 0 0 1 .242.06l1.501.783-.282-1.67a.522.522 0 0 1 .149-.459l1.21-1.185-1.674-.249a.525.525 0 0 1-.392-.285L8.427 4.34l-.754 1.516a.518.518 0 0 1-.391.284l-1.674.249 1.209 1.185a.52.52 0 0 1 .149.459l-.282 1.67 1.502-.783a.526.526 0 0 1 .241-.059M26.155 11.175a.515.515 0 0 1-.241-.06l-2.189-1.144-2.191 1.144a.523.523 0 0 1-.757-.549l.411-2.437L19.423 6.4a.524.524 0 0 1-.132-.534.527.527 0 0 1 .42-.355l2.445-.362 1.1-2.212a.524.524 0 0 1 .936-.001l1.1 2.213 2.444.362a.524.524 0 0 1 .29.889L26.26 8.129l.41 2.437a.522.522 0 0 1-.515.609m-2.431-2.314c.082 0 .165.02.24.06l1.502.783-.281-1.67a.52.52 0 0 1 .148-.459l1.209-1.185-1.674-.249a.518.518 0 0 1-.391-.284l-.753-1.517-.755 1.517a.52.52 0 0 1-.391.284l-1.675.249 1.209 1.185a.52.52 0 0 1 .149.459l-.282 1.67 1.502-.783a.52.52 0 0 1 .243-.06" fill="#D1B475"/><path d="M12.115 5.848l-1.711 2.261.285 1.752 1.426-.082.769-.163.35-2.118.204-1.059zM19.669 5.848l-.855 1.062.428 2.278.632.53h1.245l.485-1.222-.162-.998-1.079-.977zM40.218 4.586a3.095 3.095 0 1 1-3.096-3.096 3.095 3.095 0 0 1 3.096 3.096" fill="#D1B475"/><path d="M36.05 3.975c-.134 0-.265.013-.393.032v22.378c.128.019.259.032.393.032a2.661 2.661 0 0 0 2.662-2.661V6.636a2.661 2.661 0 0 0-2.662-2.661" fill="#D1B475"/></svg>
const foot_menu = document.querySelector(".foot_menu")

const casinoImg = document.querySelector('.foot_menu .core_sport_line img[src="/img/line.svg"]');


const nav_casino = document.querySelector('.foot_menu a[href="/casino"]');
const nav_casino_text = document.querySelector('.foot_menu a[href="/casino"] div');
const nav_casino_img = document.querySelector('.foot_menu a[href="/casino"] svg');
const casino_element = nav_casino.closest('div');
nav_casino_text.style.fontSize = '1rem'
nav_casino_text.style.marginTop = '6px'
nav_casino_img.style.height = '25px'
nav_casino_img.style.marginTop = '1px'
nav_casino.style.height = '54px'

const all_a_in_nav_footer = document.querySelectorAll('.foot_menu div a')
all_a_in_nav_footer.forEach(anchor => {
  anchor.style.fontWeight = '400';
});

const all_a_in_side_menu = document.querySelectorAll('.side_menu_user a')
if(all_a_in_side_menu){
  all_a_in_side_menu.forEach(item => {
    item.style.fontSize = '20px'
  });
}
const all_a_in_side_links = document.querySelectorAll('.side_menu_links a')
all_a_in_side_links.forEach(item => {
  item.style.fontSize = '20px'
});
const nav_live = document.querySelector('.foot_menu .core_sport_live');
const live_element = nav_live.closest('div');
nav_live.href= 'https://1bingo.bet/casino/categories/livegames'


const profile = document.querySelector('.core_sport_line');
const profile_text = document.querySelector('.core_sport_line div:last-child');
const profile_img = document.querySelector('.core_sport_line img[src="/img/line.svg"]');
const profile_img_parent = profile_img.closest('div')
const burger = document.querySelector('.burger');
profile.href="#"
profile.addEventListener('click', function(event) {
  event.preventDefault();
  burger.click()
});
profile_text.textContent = 'Профиль'
profile_img_parent.innerHTML = profile_svg

profile_text.style.margin = '0'
profile_text.style.fontSize = '1rem'







const deposit = document.querySelector('.foot_menu_cupon');
const deposit_del = document.querySelector('.foot_menu .foot_menu_cupon svg');
const deposit_img = document.querySelector('.foot_menu_cupon div:first-child');
const deposit_text = document.createElement('div');
const deposit_block = deposit.closest('div');
const modal_link = document.querySelector('a[href="#withdraw"]');
deposit.style.display = 'none';


const deposit_button = document.createElement('button');
deposit_button.style.display = 'block';
deposit_button.style.borderRadius = '0';
deposit_button.style.background = 'none';
deposit_button.style.boxShadow = 'none';
deposit_button.style.border = 'none'
deposit_button.style.height = '54px';
deposit_button.style.width = '100%';
deposit_button.style.padding = '0';


deposit_button.addEventListener('click', function(event) {
  event.preventDefault();
  if(modal_link){
    modal_link.click();
  }else{
    burger.click()
  }
});

deposit_img.style.right = '0';
deposit_img.innerHTML = plus_svg;
deposit_img.style.display = 'block';
deposit_img.style.position = 'relative';
deposit_img.style.borderRadius = '0';
deposit_img.style.background = 'none';
deposit_img.style.padding = '0';
deposit_img.style.height = '34px';

deposit_del.style.width = '32px';
deposit_del.replaceWith(deposit_text);

deposit_text.style.right = '0';
deposit_text.textContent = 'Пополнить';
deposit_text.style.display = 'block';
deposit_text.style.position = 'relative';
deposit_text.style.borderRadius = '0';
deposit_text.style.background = 'none';
deposit_text.style.color = 'var(--mobile_navbar_color)';
deposit_text.style.margin = '1px 0 0 0';
deposit_text.style.fontSize = '1rem';
deposit_text.style.padding = '0';

deposit_button.appendChild(deposit_img);
deposit_button.appendChild(deposit_text);

deposit_block.appendChild(deposit_button);


const chat_block = document.querySelector('.foot_menu a[href="javascript:void()"]')
const chat = document.querySelector('.foot_menu a[href="javascript:void()"] div:last-child')
const chat_img = document.querySelector('.foot_menu a[href="javascript:void()"] svg')
chat_img.style.height = '28px'
chat.style.fontSize = '1rem'
chat.style.marginTop = '3px'
chat_block.style.height = '54px'

const live = document.querySelector('.foot_menu .core_sport_live div:last-child')
live.style.fontSize = '1rem'
live.style.marginTop = '5px'
const live_img = document.querySelector('.foot_menu .core_sport_live img[src="/img/live.svg"]')
live_img.style.width = '30px'
live_img.style.height = '30px'





foot_menu.style.display = 'grid'
foot_menu.style.gridTemplateColumns = 'repeat(5, 1fr)';
foot_menu.style.fontSize = '2rem'


function updateNavDisplay() {
  if (window.matchMedia("(min-width: 1100px)").matches) {

    casino_mobile_nav.style.display = 'none';
    foot_menu.style.display = 'none'
  } else {
    casino_mobile_nav.style.display = 'flex';
    foot_menu.style.display = 'grid'

  }
}


casino_element.style.gridRowStart = '1';
live_element.style.gridColumnStart = '2';
live_element.style.gridRowStart = '1';

const nav = document.querySelector('.casino_mobile_nav');

const casino_mobile_nav = document.createElement('div');


const firstLink = document.createElement('a');
firstLink.href = 'https://1bingo.bet/casino/categories/slotsgames'
firstLink.style.display = 'flex';
firstLink.style.alignItems = 'center';
firstLink.style.justifyContent = 'center';
firstLink.style.textDecoration = 'none';
firstLink.style.color = '#D1B475';
firstLink.style.width = '50%'
firstLink.innerHTML = slots_svg
firstLink.style.padding = '1rem 0'
const firstText = document.createElement('span');
firstText.textContent = 'СЛОТЫ';
firstText.style.fontSize = '1.3rem'

firstLink.appendChild(firstText);
casino_mobile_nav.appendChild(firstLink);

const secondLink = document.createElement('a');
secondLink.href = 'https://1bingo.bet/casino/categories/livegames'
secondLink.style.display = 'flex';
secondLink.style.alignItems = 'center';
secondLink.style.justifyContent = 'center';
secondLink.style.textDecoration = 'none';
secondLink.style.color = '#D1B475';
secondLink.style.padding = '1rem 0'
secondLink.style.width = '50%'
secondLink.innerHTML = live_svg
const secondText = document.createElement('span');
secondText.textContent = 'LIVE';
secondText.style.fontSize = '1.3rem'

secondLink.appendChild(secondText);



casino_mobile_nav.appendChild(secondLink);
nav.replaceWith(casino_mobile_nav);

const abtn = document.querySelector('.abtn')
if(abtn){
  abtn.href = '/casino/'
}

updateNavDisplay();

window.addEventListener('resize', updateNavDisplay);
