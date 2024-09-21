import React from "react"
import '../index.css';
import whats from '../media/whats.png'; 
import telegram from '../media/telegram.png';
import { AlignJustify } from 'lucide-react';



export default function Header(){

    
    

    return(
        <div className="header-container">
            <h1>UMS</h1>
            <h3>Umzüge und Möbelmontageservise</h3>
            <div className="header-contacts">
                <p>017622504198
                </p>
                <img src={whats} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} />  {/* Использование иконки */}
                <img src={telegram} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} />  {/* Использование иконки */}
                <AlignJustify />
            </div>
        </div>
    )
}


