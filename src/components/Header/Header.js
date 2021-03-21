import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/actions";
import WarehouseService from "../../services/warehouse-service";

function Header() {

    // const dispatch = useDispatch();

    // const warehouseStore = useSelector(state => state.warehouseStore)

    // useEffect(() => {
    //     WarehouseService.getItems().then(res => {
    //         dispatch(setItems(res.data))
    //     })
    // }, [])

    // const allItems = warehouseStore.items.map(item => <h1>{item.Naziv}</h1>)

    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

export default Header
