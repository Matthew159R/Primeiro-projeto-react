import React from 'react'
import './App.css'

function Footer (props) {
    return (
        <footer>
        <div className='contact'>
            <h3>Nosso contato</h3>
            <p>Tel: {props.contact.tel}</p>
            <p>WhatsApp: {props.contact.whatsApp}</p>
            <p>Facebook: {props.contact.facebook}</p>
            <p>Instagram: {props.contact.instagram}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        <div className='newslatter'>
            <h3>Assine</h3>
            <form>
                <input id='email' placeholder='Seu email'/>
                <button>Enviar</button>
            </form>
            <p>Enviamos conteúdos diários sobre cafés!</p>
        </div>
        <p className='textFooter'>{props.textFooter}</p>
    </footer>
    );
}

export default Footer;


