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
      <h2>Оставьте заявку</h2>

      <label>
        Имя:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
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
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Отправить заявку</button>
    </form>
  );
}