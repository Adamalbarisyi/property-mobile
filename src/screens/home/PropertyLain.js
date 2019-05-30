import React, { Component } from 'react'
import { Row, Col,Card} from 'react-bootstrap';
import { ListGroupItem,ListGroup } from "react-bootstrap";

export default class DetailIklan extends Component {
render(){
    return(
        <Row style={{width:'100%',margin:0}}>
            <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#fcfcfc',marginBottom:20}}>
               <div className="content" style={{marginTop:0,marginLeft:0,marginBottom:0,marginRight:-10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:-10,marginBottom:5,padding:5,fontWeight:'bold',fontSize:'100%'}}>Property Menarik Lainnya</span>                 
                     
                     <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,paddingLeft:-5,paddingRight:5}}>
                        <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body >
                            <Card.Title style={{fontSize:18,marginLeft:-10}}>Tanah Dijual</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted" style={{marginLeft:-10}}>Yogyakarta</Card.Subtitle>
                             <Card.Title style={{color:'#db4d4d', fontWeight:500,fontSize:14,marginTop:10, float: 'left',marginLeft:-10}}>
                        Rp 4.000.000
                            <h2 style={{fontSize:12, color: '#95a5a6', float: 'right',marginLeft:5,marginBottom:0}}>Nego</h2>
                        </Card.Title>
                            
                          </Card.Body>
                        </Card>
                     </Col>
                      <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,paddingLeft:-5}}>
                        <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body >
                            <Card.Title style={{fontSize:18,marginLeft:-10}}>Tanah Dijual</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted" style={{marginLeft:-10}}>Yogyakarta</Card.Subtitle>
                             <Card.Title style={{color:'#db4d4d', fontWeight:500,fontSize:14,marginTop:10, float: 'left',marginLeft:-10}}>
                        Rp 4.000.000
                            <h2 style={{fontSize:12, color: '#95a5a6', float: 'right',marginLeft:5,marginBottom:0}}>Nego</h2>
                        </Card.Title>
                            
                          </Card.Body>
                        </Card>
                     </Col>
                   </Row>
                </div>
            </Col>
        </Row>

    )
}
}