import React from "react";
import Button from 'react-bootstrap/Button'

function BillItem ({item, number, remove}) {
    return (
        <tr>
            <td>{ number }</td>
            <td>{ item.Naziv }</td>
            <td>{ item.Cena * number }</td>
            <td><Button variant="danger" onClick = { () => remove(item.IDRecept) }>X</Button></td>
         </tr>
    )
}

export default BillItem;