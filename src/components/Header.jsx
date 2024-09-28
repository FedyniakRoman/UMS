// import React from "react"
// import '../index.css';
// import whats from '../media/whats.png'; 
// import telegram from '../media/telegram.png';
// import { AlignJustify } from 'lucide-react';



// export default function Header(){

    
    

//     return(
//         <div className="header-container">
//             <h1>UMS</h1>
//             <h3>Umzüge und Möbelmontageservise</h3>
//             <div className="header-contacts">
//                 <p>017622504198
//                 </p>
//                 <img src={whats} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} />  {/* Использование иконки */}
//                 <img src={telegram} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} />  {/* Использование иконки */}
//                 <AlignJustify />
//             </div>
//         </div>
//     )
// }
//----------------------------



// import React from "react"; 
// // Импорт React — необходим для использования JSX и создания компонентов в React.

// import '../index.css'; 
// // Импорт файла стилей, который содержит CSS-правила для оформления компонентов.

// import whats from '../media/whats.png'; 
// // Импорт изображения иконки WhatsApp из папки 'media', чтобы потом использовать его в компоненте.

// import telegram from '../media/telegram.png'; 
// // Импорт изображения иконки Telegram из папки 'media', чтобы потом использовать его в компоненте.

// import { AlignJustify } from 'lucide-react'; 
// // Импорт иконки 'AlignJustify' из библиотеки 'lucide-react', чтобы использовать её как элемент интерфейса.

// export default function Header() { 
// // Объявление и экспорт компонента Header по умолчанию. Этот компонент будет использоваться в других частях приложения.

//   return ( 
//     // Начало рендеринга JSX. JSX позволяет писать HTML-подобный код в JavaScript.

//     <div className="header-container"> 
//     // Контейнер для шапки сайта с классом 'header-container', который будет использовать CSS-стили для внешнего вида.

//       <h1>UMS</h1> 
//       // Заголовок уровня 1 с названием компании "UMS".

//       <h3>Umzüge und Möbelmontageservise</h3> 
//       // Заголовок уровня 3 с описанием услуг компании.

//       <div className="header-contacts"> 
//       // Контейнер для контактной информации с классом 'header-contacts', где размещаются контакты и иконки.

//         <p>017622504198</p> 
//         // Номер телефона компании, который будет отображаться в виде текста.

//         <a href="https://wa.me/4917622504198" target="_blank" rel="noopener noreferrer"> 
//         // Ссылка на чат WhatsApp с номером компании. При нажатии открывается WhatsApp в новой вкладке ('target="_blank"').
//         // 'rel="noopener noreferrer"' защищает от некоторых видов атак при открытии ссылки в новой вкладке.

//           <img src={whats} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} /> 
//           // Изображение иконки WhatsApp. Атрибут src указывает путь к изображению, alt добавляет описание для доступности,
//           // style задает размеры изображения (40x40 пикселей).

//         </a> 
//         // Закрытие тега ссылки для WhatsApp.

//         <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"> 
//         // Ссылка на Telegram. Открывает Telegram-чат при нажатии. 'username' нужно заменить на реальное имя пользователя.
//         // Ссылка также открывается в новой вкладке с дополнительной защитой.

//           <img src={telegram} alt="Telegram Icon" style={{ width: '40px', height: '40px' }} /> 
//           // Изображение иконки Telegram, аналогично WhatsApp. Определены размеры изображения и описание для доступности.

//         </a> 
//         // Закрытие тега ссылки для Telegram.

//         <AlignJustify /> 
//         // Иконка 'AlignJustify' из библиотеки 'lucide-react'. Она вставляется как компонент, без использования тега <img>.
//         // Это может быть иконка меню или какой-то другой элемент интерфейса.

//       </div> 
//       // Закрытие div с классом 'header-contacts', содержащего контакты и иконки.

//     </div> 
//     // Закрытие div с классом 'header-container', содержащего всю шапку сайта.

//   ); 
//   // Закрытие return, завершение JSX-разметки.

// } 
// // Закрытие функции Header.


import React from "react";
import '../index.css';
import whats from '../media/whats.png';
import telegram from '../media/telegram.png';
import { AlignJustify } from 'lucide-react';

export default function Header() {
  return (
    <div className="header-container">
      <h1>UMS</h1>
      <h3>Umzüge und Möbelmontageservise</h3>
      <div className="header-contacts">
        <p>017622504198</p>
        <a href="https://wa.me/4917622504198" target="_blank" rel="noopener noreferrer">
          <img src={whats} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://web.telegram.org/k/#@umsgarant_de" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram Icon" style={{ width: '40px', height: '40px' }} />
        </a>
        <AlignJustify />
      </div>
    </div>
  );
}