import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ModalComponent from "../ModalComponent/ModalComponent";

function Item({item}) {

    const [show, changeShow] = useState(false);

    const toggle = () => { changeShow(!show) }


    return (
        <>
        {/* <ModalComponent item = { item } show = { show } toggle = { toggle } /> */}
        <Card onClick={ toggle } border="primary" style={{ width: '18rem' }} className="m-2">
            <Card.Header>
                {item.Naziv} {item.Cena} din
            </Card.Header>
            <Card.Img height="150em" variant="bottom" src={item.Slika}/>
        </Card>
        </>
    )
}

export default Item
