import React from 'react'
import styles from './Nav.module.css'
import img from './imgs/LogoSenai.svg'
import nav from './imgs/nav.svg'
import user from './imgs/user.svg'
import heart from './imgs/heart.svg'

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <img src={img} />
            <img src={nav} className='nav'/>
            <label>
                <input
                type="text"
                placeholder='Procure pelo nome do curso'
                className={styles.pesquisar}/>
            </label>
            <img src={user}/>
            <p>Olá, faça login ou cadastre-se</p>
            <img src={heart}/>
        </nav>
    )
}

export default NavBar