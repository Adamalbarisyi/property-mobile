import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';
import { ListGroupItem,ListGroup } from "react-bootstrap";

export default class JawaTengah extends Component {
render(){
    return(
        <Row style={{width:'100%',margin:0}}>
             <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#fcfcfc',marginBottom:20}}>
               <div className="content" style={{marginTop:0,marginLeft:0,marginBottom:0,marginRight:-10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:-10,marginBottom:5,marginLeft:10,fontWeight:'bold',fontSize:'100%'}}>Jawa Tengah</span>                 
                  <ListGroup style={{width:'100%'}}>
                      <ListGroupItem href="#link1">Banjarnegara</ListGroupItem>
                      <ListGroupItem href="#link2">Banyumas</ListGroupItem>
                      <ListGroupItem href="#link3">Batang</ListGroupItem>
                      <ListGroupItem href="#link4">Blora</ListGroupItem>
                      <ListGroupItem href="#link5">Boyolali</ListGroupItem>
                      <ListGroupItem href="#link6">Brebes</ListGroupItem>
                      <ListGroupItem href="#link7">Cilacap</ListGroupItem>
                      <ListGroupItem href="#link8">Demak</ListGroupItem>
                      <ListGroupItem href="#link9">Grobogan</ListGroupItem>
                      <ListGroupItem href="#link10">Jepara</ListGroupItem>
                      <ListGroupItem href="#link11">Karanganyar</ListGroupItem>
                      <ListGroupItem href="#link12">Kebumen</ListGroupItem>
                      <ListGroupItem href="#link13">Kendal</ListGroupItem>
                      <ListGroupItem href="#link14">Klaten</ListGroupItem>
                      <ListGroupItem href="#link15">Kudus</ListGroupItem>
                      <ListGroupItem href="#link16">Magelang</ListGroupItem>
                      <ListGroupItem href="#link17">Pati</ListGroupItem>
                      <ListGroupItem href="#link18">Pekalongan</ListGroupItem>
                      <ListGroupItem href="#link19">Pemalang</ListGroupItem>
                      <ListGroupItem href="#link20">Purbalingga</ListGroupItem>
                      <ListGroupItem href="#link21">Purworejo</ListGroupItem>
                      <ListGroupItem href="#link22">Rembang</ListGroupItem>
                      <ListGroupItem href="#link23">Semarang</ListGroupItem>
                      <ListGroupItem href="#link24">Sragen</ListGroupItem>
                      <ListGroupItem href="#link25">Sukoharjo</ListGroupItem>
                      <ListGroupItem href="#link26">Tegal</ListGroupItem>
                      <ListGroupItem href="#link27">Temanggung</ListGroupItem>
                      <ListGroupItem href="#link28">Wonogiri</ListGroupItem>
                      <ListGroupItem href="#link29">Wonosobo</ListGroupItem>
                      <ListGroupItem href="#link30">Kota Magelang</ListGroupItem>
                      <ListGroupItem href="#link31">Kota Pekalongan</ListGroupItem>
                      <ListGroupItem href="#link32">Kota Salatiga</ListGroupItem>
                      <ListGroupItem href="#link33">Kota Semarang</ListGroupItem>
                      <ListGroupItem href="#link34">Kota Surakarta</ListGroupItem>
                      <ListGroupItem href="#link35">Kota Tegal</ListGroupItem>
                  
                  
                  
                  </ListGroup>
                   </Row>
                </div>
            </Col>
        </Row>

    )
}
}