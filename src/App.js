import React from "react";
import { Col, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Items from "./pages/Items/Items";
import store from "./redux/store";

import './App.css';

function App() {

    return (
        <Provider store={store}>
            <Header />

            <Row className="window">
                <Col sm={3}><button className="btn btn-info form-control"></button></Col>
                <Col sm={9}><Items /></Col>
            </Row>
        </Provider>
    )
}

export default App;