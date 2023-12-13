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
import Nav from "react-bootstrap/Nav";

function App() {
  const tasks = []; //TODO: fill the array and call tasks
  //array of tasks that gets filled with task values here before displaying
  // {tasks.map((heading, index) => <div key={index}>{heading}</div>)}
  return (
    //display a task
    <div className="App">
      <div>
        <Menu />
      </div>
      {/* <Task
        name={"task name"}
        status={"incomplete"}
        date={"00/00/0000"}
        time={"morning"}
        repeat={"repeating"}
        reward={"candy bar"}
        priority={"high"}
        habit={"false"}
      /> */}
      <TaskPage />
    </div>
  );
  //header tabs
  function Menu() {
    //dashboard will become home once i perfect tasks
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="link-1">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/home">Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Habits</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Calendar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Rewards</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  //   function Dashboard() {
  //     return (
  //       <div className="Task">
  //         <Accordion defaultActiveKey="0">
  //           <Accordion.Item eventKey="0">
  //             <Accordion.Header>Daily Tasks</Accordion.Header>
  //             <Accordion.Body>
  //               <Row xs={1} md={4} className="g-4">
  //                 {Array.from({ length: 4 }).map((_, idx) => (
  //                   <Col key={idx}>
  //                     <Card style={{ width: "18rem" }}>
  //                       <Card.Header as="h4">{name}</Card.Header>
  //                       <Card.Body>
  //                         <Card.Title>Status: {status}</Card.Title>
  //                         <Card.Text>notes/description</Card.Text>
  //                       </Card.Body>
  //                       <ListGroup className="list-group-flush">
  //                         <ListGroup.Item>Date: {date}</ListGroup.Item>
  //                         <ListGroup.Item>Repeat: {repeat}</ListGroup.Item>
  //                         <ListGroup.Item>Priority: {priority}</ListGroup.Item>
  //                         <ListGroup.Item>Habit? {habit}</ListGroup.Item>
  //                         <ListGroup.Item>Reward: {reward}</ListGroup.Item>
  //                       </ListGroup>
  //                       <Button variant="primary">Mark as Complete</Button>
  //                     </Card>
  //                   </Col>
  //                 ))}
  //               </Row>
  //             </Accordion.Body>
  //           </Accordion.Item>
  //           <Accordion.Item eventKey="1">
  //             <Accordion.Header>To-Do</Accordion.Header>
  //             <Accordion.Body>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //               enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  //               reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //               sunt in culpa qui officia deserunt mollit anim id est laborum.
  //             </Accordion.Body>
  //           </Accordion.Item>
  //         </Accordion>
  //       </div>
  //     );
  //   }
}

export default App;

function TaskPage() {
  return (
    <div>
      
    </div>
    <div>
      <Row xs='auto' md='auto' className="g-4">
        <>
          {Array.from({ length: 6 }).map((_, idx) => (
            <>
              <Col key={idx}></Col>
              <div>
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
            </>
          ))}
        </>
      </Row>
    </div>
  );
}

function Task({ name, status, date, time, repeat, reward, priority, habit }) {
  return (
    <div className="Task">
      <Card style={{ width: "18rem" }}>
        <Card.Header as="h4">{name}</Card.Header>
        <Card.Body>
          <Card.Title>Status: {status}</Card.Title>
          <Card.Text>notes/description</Card.Text>
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
    </div>
  );
}
