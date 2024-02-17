<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <link rel="stylesheet" href="stylesheet.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <!------------------------хэдер------------------------>
    <header class="header">
      <div class="left-header">
        <!---------------------левая часть--------------->
        <div class="burger">
          <button class="burger__button button">
            <img class="burger" src="img\ic_burger.svg" alt="бургер" />
          </button>
        </div>
        <div class="logo">
          <button class="logo__button button">
            <img class="logo" src="img/Group.svg" alt="лого" />
          </button>
        </div>
      </div>
      <div class="right-header">
        <!-----------------------правая часть ----------------->
        <div class="call">
          <button class="call__button button">
            <img class="call" src="img\ic_call.svg" alt="звонок" />
          </button>
        </div>
        <div class="chat">
          <button class="chat__button button">
            <img class="chat" src="img\ic_chat.svg" alt="чат" />
          </button>
        </div>
        <div class="profile">
          <button class="profile__button button">
            <img class="profile" src="img\ic_profile.svg" alt="профиль" />
          </button>
        </div>
        <div class="repair">
          <button class="repair__button button">
            <img class="repair" src="img\ic_repair.svg" alt="ремонт" />
          </button>
        </div>
        <div class="checkstatus">
          <button class="checkstatus__button button">
            <img
              class="checkstatus"
              src="img\ic_checkstatus.svg"
              alt="чекстатус"
            />
          </button>
        </div>
      </div>
    </header>
    <!---------------------------main--------------------->
    <main class="main">
      <div class="main-header">
        <h1 class="main-header__h1">Услуги и сервисы</h1>
        <label class="main-header__label" for="#repair__button--computer"
          >Оставить заявку</label
        >
        <div id="repair__button--computer" class="repair__button--computer">
          <img src="img\ic_repair.svg" alt="ремонт" />
        </div>
        <label class="main-header__label" for="#checkstatus__button--computer"
          >Оставить заявку</label
        >
        <div
          id="checkstatus__button--computer"
          class="checkstatus__button--computer"
        >
          <img src="img\ic_repair.svg" alt="ремонт" />
        </div>
      </div>
      <!------------------------меню------------------------>
      <nav class="nav">
        <ul class="slide-menu">
          <li class="slide-menu__button slide-menu__button--active">
            <a href="#">Ремонтируемые бренды</a>
          </li>
          <li class="slide-menu__button">
            <a href="#">Ремонтируемые устройства</a>
          </li>
          <li class="slide-menu__button">
            <a href="#">Цены на услуги</a>
          </li>
          <li class="slide-menu__button">
            <a href="#">Адреса сервисных центров</a>
          </li>
          <li class="slide-menu__button">
            <a href="#">Специальные цены</a>
          </li>
          <li class="slide-menu__button"><a href="#">Отзывы</a></li>
        </ul>
      </nav>
      <!------------------------контент------------------------>
      <div class="content">
        <div class="content-text">
          <p class="content-text__text">
            Мы являемся авторизованным сервисным центром по ремонту техники
            Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с
            официальной гарантией производителя.
          </p>
          <p class="content-text__text">
            <span class="content-text__text--pad">
              Мы успешно работаем с 1992 года и заслужили репутацию надежного
              партнера
            </span>
            <span class="content__text--computer"
              >, что подтверждает большое количество постоянных клиентов. Мы
              гордимся тем, что к нам обращаются по рекомендациям и, в свою
              очередь, советуют нас родным и близким.
            </span>
          </p>
          <div class="expand">
            <button class="expand__button">Читать далее</button>
          </div>
        </div>
        <div class="content-image">
          <img
            class="content-image__image"
            src="img/_MG_3223.jpeg"
            alt="Логотип"
          />
        </div>
      </div>
    </main>
  </body>
</html>
