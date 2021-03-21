import React from "react";

import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from "react-redux";
import { removePickedItem } from "../../redux/actions";
import BillItem from "../BillItem/BillItem";

function Bill() {

    const dispatch = useDispatch();
    const itemsStore = useSelector(state => state.itemsStore);

    const billItems =   itemsStore.pickedItems ? itemsStore.pickedItems.map(pickedItem => <BillItem key = { pickedItem.item.IDRecept } item = { pickedItem.item } number = { pickedItem.number } remove = { remove } />) : null;

    const price = () => {
        let price = 0;
        itemsStore.pickedItems.map(pickedItem => {
            price += pickedItem.item.Ceba * pickedItem.number;
        })
        return price;
    }

    const remove = id => {
        dispatch(removePickedItem(id));
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>Naziv</th>
                        <th>Cena</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { billItems }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        { price }
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Bill;