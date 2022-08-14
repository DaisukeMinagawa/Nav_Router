import React from 'react'
import { Button } from 'react-bootstrap';
import { isOpen } from './Header';

const HomePage = () => {
    return (
        /* ここにHeaderで使ったisOpenを使って、Headerのopenとcloseを切り替えたい。 */
        <div className={isOpen ? open : close}>
            <Button>Button</Button>
        </div>
    )
}

export default HomePage;