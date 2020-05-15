import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Options extends Component {
  
  state ={
    options: []
  }

  componentDidMount(){
    this.loadOptions();
  }
  
  loadUsers = () => {
    API.getOptions().then((results) =>
   
      this.setState({
        users: results.data
      })
    )
   .catch((err) => console.log(err));
  //console.log(users);
    }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          
              <h1>
                Options
              </h1>
           
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            {/* <Link to="/">← Back to Authors</Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Options;
