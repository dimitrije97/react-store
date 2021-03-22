import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPickedItems } from "../../redux/actions";
import WarehouseService from "../../services/warehouse-service";

import BillItem from "../BillItem/BillItem";

function Bill() {

    const dispatch = useDispatch();
    const[price, setPrice] = useState(0);

    const itemsStore = useSelector(state => state.itemsStore);

    useEffect(() => {
        WarehouseService.getPickedItems().then(res => {
            dispatch(setPickedItems(res.data))
            setPrice(res.data.UkupnoZaduzenje)
        })
    }, [])
    

    const billItems =   itemsStore.pickedItems ? itemsStore.pickedItems.StavkeRacuna.map(pickedItem => <BillItem key = { pickedItem.recept.Idrecept } item = { pickedItem.recept } number = { pickedItem.kolicina } />) : null;

    return (
        <div className="m-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Količina</th>
                        <th>Naziv</th>
                        <th>Cena</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { billItems }
                </tbody>
                <tfoot>
                     <tr>
                        <td></td>
                        <td><Button variant = "info" onClick = { () => {}}>Plati</Button></td>
                        <td>{ price }</td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default Bill;