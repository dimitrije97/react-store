import React from "react";
import { Col, Row } from "react-bootstrap";
import { Provider } from "react-redux";

import store from "./redux/store";
import Header from "./components/Header/Header";
import Bill from "./components/Bill/Bill";

function App() {



    return (
        <Provider store={store}>
            <Header />
            <Row>
                <Col sm={3}><Bill /></Col>
                <Col sm={9}><button className="btn btn-warning form-control"></button></Col>
            </Row>
        </Provider>
    )
}

export default App;