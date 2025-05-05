import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Kapcsolat</h1>
      <p>Ha bármilyen kérdésed van, vedd fel velünk a kapcsolatot az alábbi űrlap segítségével!</p>
      <form className="contact-form">
        <input type="text" placeholder="Név" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Üzenet" rows="5" required></textarea>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}

export default Contact;
