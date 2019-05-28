import React, { Component } from 'react'
import { Row, Col,Card} from 'react-bootstrap';

export default class DetailIklan extends Component {
render(){
    return(
        <Row>
                 
            
            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#fcfcfc',width:'100%'}}>
               <div className="content">
                <div style={{marginLeft:10, marginRight:10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:0,padding:5,fontWeight:'bold',fontSize:'100%'}}>Property Menarik Lainnya</span>                 
                     
                     <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,paddingRight:5}}>
                       <Card style={{ width: '99%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick 
                            </Card.Text>
                          </Card.Body>
                        </Card>
                     </Col>
                     <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,paddingLeft:5}}>
                       <Card style={{ width: '99%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick 
                            </Card.Text>
                          </Card.Body>
                        </Card>
                     </Col>
                   </Row>
                 <br/>
                </div>
               </div>
            </Col>

        </Row>

    )
}
}