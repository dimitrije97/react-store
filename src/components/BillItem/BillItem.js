import React from "react";
import Button from 'react-bootstrap/Button'

function BillItem ({item, number}) {
    return (
        <tr>
            <td>{ number }</td>
            <td>{ item.Naziv }</td>
            <td>{ item.Cena }</td>
            <td><Button variant="danger" onClick = { () => {} }>X</Button></td>
         </tr>
    )
}

export default BillItem;