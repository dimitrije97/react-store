import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import store from "./redux/store";
function App() {



    return (
        <Provider store={store}>
            <Header />
            
            <Row>
                <Col sm={3}><button className="btn btn-info form-control"></button></Col>
                <Col sm={9}><button className="btn btn-warning form-control"></button></Col>
            </Row>
        </Provider>
    )
}

export default App;