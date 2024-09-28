import React, { useState } from 'react';

export default function ContactForm() {
  // Используем хуки для управления состоянием формы
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
  });

  // Список доступных услуг
  const services = ['Услуга 1', 'Услуга 2', 'Услуга 3', 'Услуга 4', 'Услуга 5'];

  // Обработчик изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете обработать отправку данных, например, отправить на сервер
    console.log('Отправка формы:', formData);
    alert('Форма отправлена!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
  {/* Форма с классом 'contact-form', которая вызывается при отправке через событие onSubmit, 
      вызывая функцию handleSubmit для обработки данных. */}

  <h2>Оставьте заявку</h2>
  {/* Заголовок формы, который информирует пользователя о цели формы. */}

  <label>
    Имя:
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      required
    />
    {/* Поле для ввода имени.
        - type="text": указывает, что это текстовое поле.
        - name="firstName": определяет ключ для этого поля в объекте formData.
        - value={formData.firstName}: привязка значения к состоянию (formData.firstName), которое изменяется динамически.
        - onChange={handleChange}: вызывается при каждом изменении значения в поле, обновляя состояние.
        - required: делает поле обязательным для заполнения. */}
  </label>

  <label>
    Фамилия:
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      required
    />
    {/* Поле для ввода фамилии. Логика аналогична полю для имени. */}
  </label>

  <label>
    Номер телефона:
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />
    {/* Поле для ввода номера телефона.
        - type="tel": указывает, что это поле для телефонного номера (может включать цифры, тире, пробелы).
        - name="phone": определяет ключ для этого поля в объекте formData.
        - value={formData.phone}: привязка значения к состоянию.
        - onChange={handleChange}: обновляет состояние при изменении значения.
        - required: делает поле обязательным. */}
  </label>

  <label>
    Email:
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    {/* Поле для ввода email-адреса.
        - type="email": указывает, что это поле для email (браузер автоматически проверяет правильность формата email).
        - name="email": определяет ключ для этого поля в объекте formData.
        - value={formData.email}: привязка значения к состоянию.
        - onChange={handleChange}: обновляет состояние при изменении значения.
        - required: делает поле обязательным для заполнения. */}
  </label>

  <label>
    Выберите услугу:
    <select
      name="service"
      value={formData.service}
      onChange={handleChange}
      required
    >
      <option value="">-- Выберите услугу --</option>
      {/* Значение по умолчанию для выпадающего списка. Пользователь видит текст "-- Выберите услугу --", 
          но значение остаётся пустым, пока не будет сделан выбор. */}
      {services.map((service, index) => (
        <option key={index} value={service}>
          {service}
        </option>
      ))}
      {/* Проходимся по массиву services и создаём опции для выпадающего списка.
          - key={index}: задаёт уникальный ключ для каждой опции (по индексу).
          - value={service}: значение, которое будет отправлено при выборе этого варианта.
          - {service}: текст, который увидит пользователь в выпадающем списке. */}
    </select>
  </label>

  <button type="submit">Отправить заявку</button>
  {/* Кнопка отправки формы.
      - type="submit": отправляет форму при клике, срабатывает событие onSubmit. */}
</form>
  );
}