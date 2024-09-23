import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is another header! Wow</h1>
            John Kuss Hello World
            <img
                src="../images/somethingterrible.jpg"
                alt="A haunting image. I often wake in a cold sweat, pierced by that dæmon's stare..."
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ol>
                <li>Item one</li>
                <li>Item three</li>
                <li>Item three</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 100,
                                    height: 200,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: 100,
                                    height: 200,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
