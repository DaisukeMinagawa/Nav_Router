import React from 'react'
import { Button } from 'react-bootstrap';

const HomePage = ({
    open = false
}) => {
    return (
        /* ここにHeaderで使ったisOpenを使って、Headerのopenとcloseを切り替えたい。 */
        <div className={open ? "open" : "close"}>
            <Button>Button</Button>
        </div>
    )
}

export default HomePage;