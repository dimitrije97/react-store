import React from 'react'
import { Card, Col } from 'react-bootstrap'

function Item({item}) {
    return (
        <Card onClick={() => alert(item.Naziv)} border="primary" style={{ width: '18rem' }} className="m-2">
            <Card.Header>
                {item.Naziv} {item.Cena} din
            </Card.Header>
            <Card.Img height="150em" variant="bottom" src={item.Slika}/>
        </Card>
    )
}

export default Item
