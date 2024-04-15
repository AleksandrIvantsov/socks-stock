import { ContactListItem } from 'components';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick, onSize }) => {
  return (
    <div className={css.container}>
      <div className={css.buttons}>
        <div className={css.menBtns}>
          <div>
            <h2>Чоловічі</h2>
            <button type="button" onClick={() => onClick('М-101')}>
              М-101 високі
            </button>
            <button type="button" onClick={() => onClick('М-102')}>
              М-102 високі сітка
            </button>
            <button type="button" onClick={() => onClick('М-103')}>
              М-103 класика
            </button>
            <button type="button" onClick={() => onClick('М-104')}>
              М-104 напіввовна
            </button>
            <button type="button" onClick={() => onClick('М-108')}>
              М-108 короткі сітка
            </button>
            <button type="button" onClick={() => onClick('М-109')}>
              М-109 махра
            </button>
            <button type="button" onClick={() => onClick('М-112')}>
              М-112 короткі
            </button>
            <button type="button" onClick={() => onClick('М-115')}>
              М-115 слідки
            </button>
            <button type="button" onClick={() => onClick('М-120')}>
              М-120 термо
            </button>
          </div>
          <div>
            <h2>Чоловічі гребінна</h2>
            <button type="button" onClick={() => onClick('М-105')}>
              М-105 короткі сітка
            </button>
            <button type="button" onClick={() => onClick('М-110')}>
              М-110 спорт високі
            </button>
            <button type="button" onClick={() => onClick('М-111')}>
              М-111 спорт середні
            </button>
            <button type="button" onClick={() => onClick('М-113')}>
              М-113 високі сітка
            </button>
            <button type="button" onClick={() => onClick('М-116')}>
              М-116 слідки
            </button>
            <button type="button" onClick={() => onClick('М-117')}>
              М-117 спорт середні сітка
            </button>
            <button type="button" onClick={() => onClick('М-119')}>
              М-119 класика
            </button>
            <button type="button" onClick={() => onClick('М-122')}>
              М-122 короткі
            </button>
            <button type="button" onClick={() => onClick('М-128')}>
              М-128 махра середні
            </button>
            <button type="button" onClick={() => onClick('М-129')}>
              М-129 махра кл. і Санта
            </button>
            <button type="button" onClick={() => onClick('М-131')}>
              М-131 короткі махр слід
            </button>
            <button type="button" onClick={() => onClick('М-132')}>
              М-132 спорт середні махр слід
            </button>
            <button type="button" onClick={() => onClick('М-133')}>
              М-133 класика середні
            </button>
          </div>
          <div>
            <h2>Розміри чоловічих</h2>
            <button type="button" onClick={() => onSize('23')}>
              23 (37-38)
            </button>
            <button type="button" onClick={() => onSize('25')}>
              25 (39-40)
            </button>
            <button type="button" onClick={() => onSize('27')}>
              27 (41-42)
            </button>
            <button type="button" onClick={() => onSize('29')}>
              29 (43-44)
            </button>
            <button type="button" onClick={() => onSize('31')}>
              31 (45-46)
            </button>
            <button type="button" onClick={() => onSize('23-25')}>
              23-25 (37-40)
            </button>
            <button type="button" onClick={() => onSize('25-27')}>
              25-27 (39-41)
            </button>
            <button type="button" onClick={() => onSize('27-29')}>
              27-29 (41-43)
            </button>
            <button type="button" onClick={() => onSize('29-31')}>
              29-31 (43-45)
            </button>
          </div>
        </div>
        <div className={css.womenBtns}>
          <div>
            <h2>Жіночі</h2>
            <button type="button" onClick={() => onClick('Ж-101')}>
              Ж-101 короткі
            </button>
            <button type="button" onClick={() => onClick('Ж-102')}>
              Ж-102 високі сітка
            </button>
            <button type="button" onClick={() => onClick('Ж-103')}>
              Ж-103 класика
            </button>
            <button type="button" onClick={() => onClick('Ж-104')}>
              Ж-104 короткі сітка
            </button>
            <button type="button" onClick={() => onClick('Ж-106')}>
              Ж-106 термо
            </button>
            <button type="button" onClick={() => onClick('Ж-107')}>
              Ж-107 махра
            </button>
            <button type="button" onClick={() => onClick('Ж-112')}>
              Ж-112 класика малюнок
            </button>
            <button type="button" onClick={() => onClick('Ж-113')}>
              Ж-113 слідки
            </button>
            <button type="button" onClick={() => onClick('Ж-117')}>
              Ж-117 утеплені
            </button>
            <button type="button" onClick={() => onClick('Ж-118')}>
              Ж-118 підслідники
            </button>
          </div>
          <div>
            <h2>Жіночі гребінна</h2>
            <button type="button" onClick={() => onClick('Ж-110')}>
              Ж-110 спорт високі
            </button>
            <button type="button" onClick={() => onClick('Ж-111')}>
              Ж-111 спорт середні
            </button>
            <button type="button" onClick={() => onClick('Ж-121')}>
              Ж-121 класика
            </button>
            <button type="button" onClick={() => onClick('Ж-124')}>
              Ж-124 ажурні
            </button>
            <button type="button" onClick={() => onClick('Ж-125')}>
              Ж-125 махра середні
            </button>
            <button type="button" onClick={() => onClick('Ж-127')}>
              Ж-127 класика середні
            </button>
            <button type="button" onClick={() => onClick('Ж-128')}>
              Ж-128 короткі махр слід
            </button>
            <button type="button" onClick={() => onClick('Ж-129')}>
              Ж-129 спорт середні махр слід
            </button>
            <button type="button" onClick={() => onClick('Ж-130')}>
              Ж-130 без резинки
            </button>
            <button type="button" onClick={() => onClick('Ж-131')}>
              Ж-131 fashion
            </button>
            <button type="button" onClick={() => onClick('Ж-140')}>
              Ж-140 короткі
            </button>
          </div>
        </div>
        <div className={css.childBtns}>
          <div>
            <h2>Дитячі</h2>
            <button type="button" onClick={() => onClick('Д-101')}>
              Д-101 махра
            </button>
            <button type="button" onClick={() => onClick('Д-102')}>
              Д-102 класика
            </button>
            <button type="button" onClick={() => onClick('Д-103')}>
              Д-103 короткі сітка
            </button>
          </div>
          <div>
            <h2>Розміри дитячих</h2>
            <button type="button" onClick={() => onSize('18-20')}>
              18-20
            </button>
            <button type="button" onClick={() => onSize('20-22')}>
              20-22
            </button>
          </div>
        </div>
      </div>
      <div>
        <ContactListItem contacts={contacts} />
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
