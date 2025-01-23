import { FC } from 'react';
import './_header.scss'

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 11H4V19H20V11ZM20 9V5H4V9H20ZM9 6H11V8H9V6ZM5 6H7V8H5V6Z" fill="#ffffff" />
                        </svg>
                    </div>

                    <ul className='header__menu'>
                        <li className='header__menu-item'>
                            <a href="#about" className='header__menu-link'>О себе</a>
                        </li>
                        <li className='header__menu-item'>
                            <a href="#skills" className='header__menu-link'>Навыки</a>
                        </li>
                        <li className='header__menu-item'>
                            <a href="#experience" className='header__menu-link'>Опыт</a>
                        </li>
                        <li className='header__menu-item'>
                            <a href="#projects" className='header__menu-link'>Проекты</a>
                        </li>
                        <li className='header__menu-item'>
                            <a href="#contact" className='header__menu-link'>Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
