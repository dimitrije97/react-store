import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../components/Item/Item';
import { setItems } from '../../redux/actions';
import WarehouseService from '../../services/warehouse-service';

import './Items.css'

function Items() {

    const dispatch = useDispatch();

    const warehouseStore = useSelector(state => state.warehouseStore);

    useEffect(() => {
        WarehouseService.getItems().then(res => {
            dispatch(setItems(res.data))
        })
    }, [])

    const allItems = warehouseStore.items ? warehouseStore.items.map(item => <Item item={item} key={item.IDRecept} />) : null;

    return (
        <div className="bg">
            <Row className="justify-content-center">
                {allItems}
            </Row>
        </div>
    )
}

export default Items
