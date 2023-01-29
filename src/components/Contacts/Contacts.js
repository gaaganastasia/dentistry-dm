import './Contacts.css';
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <section className='contacts' id="contacts">
      <h1 className='contacts__title'>Контакты</h1>
      <div className='contacts__content'>
        <div className='contacts__info'>
          <p className='contacts__text'>ООО Данила - Мастер</p>
          <div className='contacts__row'>
            <div className='contacts__icon contacts__icon_call'></div>
            <p className='contacts__text'>8(495) 654-00-51</p>
          </div>
          <div className='contacts__row'>
            <div className='contacts__icon contacts__icon_loc'></div>
            <p className='contacts__text'>г.Москва, ул.Белореченская, д.12 м.Люблино (вход с ул.Новороссийская)</p>
          </div>
          <div className='contacts__row'>
            <div className='contacts__icon contacts__icon_mail'></div>
            <p className='contacts__text'>danilamaster0607@mail.ru</p>
          </div>
          <div className='contacts__row'>
            <div className='contacts__icon contacts__icon_time'></div>
            <p className='contacts__text'>Пн.- Вс. с 10:00 до 20:00</p>
          </div>
          <p className='contacts__question contacts__question_desktop'>У вас остались вопросы — напишите нам</p>
          <a href='https://api.whatsapp.com/send/?phone=74956540051' target="_blank" rel="noreferrer" className='contacts__btn contacts__btn_desktop'>
            <div className='contacts__btn-icon'></div>
            <p className='contacts__btn-text'>Записаться</p>
          </a>
        </div>
        <iframe className='contacts__map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd0344eb5c2e2e677deb06b2f15468d74ed7b66161f2e5512208390229622790&amp;source=constructor" width="730" height="440" frameBorder="0"></iframe>
        <p className='contacts__question contacts__question_mobile'>У вас остались вопросы — напишите нам</p>
        <a href='https://api.whatsapp.com/send/?phone=74956540051' target="_blank" rel="noreferrer" className='contacts__btn contacts__btn_mobile'>
          <div className='contacts__btn-icon'></div>
          <p className='contacts__btn-text'>Записаться</p>
        </a>
      </div>
    </section>
  );
}

export default Contacts;