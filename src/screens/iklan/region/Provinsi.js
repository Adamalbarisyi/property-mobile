import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';
import { ListGroupItem,ListGroup } from "react-bootstrap";

export default class Provinsi extends Component {
render(){
    return(
        <Row style={{width:'100%',margin:0}}>
             <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#fcfcfc',marginBottom:20}}>
               <div className="content" style={{marginTop:0,marginLeft:0,marginBottom:0,marginRight:-10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:-10,marginBottom:5,marginLeft:10,fontWeight:'bold',fontSize:'100%'}}> Semua Provinsi</span>                 
                  <ListGroup style={{width:'100%'}}>
                      <ListGroupItem href="#link1">Yogyakarta</ListGroupItem>
                      <ListGroupItem href="#link2">Jabar</ListGroupItem>
                      <ListGroupItem href="#link3">Jatim</ListGroupItem>
                  </ListGroup>
                   </Row>
                </div>
            </Col>
        </Row>

    )
}
}