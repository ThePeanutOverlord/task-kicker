import logo from "./logo.svg";
import "./App.css";
import React, { StrictMode } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const tasks = []; //TODO: fill the array and call tasks
  //array of tasks that gets filled with task values here before displaying
  // {tasks.map((heading, index) => <div key={index}>{heading}</div>)}
  return (
    //display a task
    <div className="App">
      <Task
        name={"task name"}
        status={"incomplete"}
        date={"00/00/0000"}
        time={"morning"}
        repeat={"repeating"}
        reward={"candy bar"}
        priority={"high"}
        habit={"false"}
      />
    </div>
  );

  // render() {
  //   const headingsArray = [] // data from your backend

  //   return (
  //     <div className="parentDiv">
  //       {headingsArray.map((heading, index) => <div key={index}>{heading}</div>)}
  //     </div>
  //   )
  // }
}

export default App;

function Task({ name, status, date, time, repeat, reward, priority, habit }) {
  // const [name, setName] = useState("name");
  // const [status, setStatus] = useState(false);
  // const [date, setDate] = useState("00/00/0000");
  // const [time, setTime] = useState("midday");
  // const [repeat, setRepeat] = useState(false);
  // const [reward, setReward] = useState(null);
  // const [priority, setPriority] = useState("medium");
  // const [habit, setHabit] = useState(false);

  //   <h1>{name}</h1>
  // <h2>{status}</h2>
  // <h3>{date}</h3>
  // <h3>{time}</h3>
  // <h3>{repeat}</h3>
  // <h3>{priority}</h3>
  // <h3>{habit}</h3>
  // <h3>{reward}</h3>//TODO we're gonna need labels for each of this or an icon maybe??
  return (
    <div className="Task">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Daily Tasks</Accordion.Header>
          <Accordion.Body >
            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{ width: "18rem" }}>
                  <Card.Header as="h4">{name}</Card.Header>
                    <Card.Body>
                      <Card.Title>Status: {status}</Card.Title>
                      <Card.Text>
                        notes/description 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Date: {date}</ListGroup.Item>
                      <ListGroup.Item>Repeat: {repeat}</ListGroup.Item>
                      <ListGroup.Item>Priority: {priority}</ListGroup.Item>
                      <ListGroup.Item>Habit? {habit}</ListGroup.Item>
                      <ListGroup.Item>Reward: {reward}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary">Mark as Complete</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>To-Do</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
