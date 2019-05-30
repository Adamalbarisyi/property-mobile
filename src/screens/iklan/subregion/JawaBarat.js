import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';
import { ListGroupItem,ListGroup } from "react-bootstrap";

export default class JawaBarat extends Component {
render(){
    return(
        <Row style={{width:'100%',margin:0}}>
             <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#fcfcfc',marginBottom:20}}>
               <div className="content" style={{marginTop:0,marginLeft:0,marginBottom:0,marginRight:-10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:-10,marginBottom:5,marginLeft:10,fontWeight:'bold',fontSize:'100%'}}>Jawa Barat</span>                 
                  <ListGroup style={{width:'100%'}}>
                      <ListGroupItem className="list-item" href="#link1">bekasikab</ListGroupItem>
                      <ListGroupItem className="list-item" href="#link2">bekasikot</ListGroupItem>
                      <ListGroupItem className="list-item" href="#link3">bogorkab</ListGroupItem>
                      <ListGroupItem className="list-item" href="#link4">bogorkot</ListGroupItem>
                      <ListGroupItem className="list-item" href="#link5">depokkot</ListGroupItem>
                      <ListGroupItem className="list-item" href="#link6">purwakartakota</ListGroupItem>

                      {/* <ListGroupItem href="#link1">Bandung</ListGroupItem>
                      <ListGroupItem href="#link2">Bandung Barat</ListGroupItem>
                      <ListGroupItem href="#link3">Bekasi</ListGroupItem>
                      <ListGroupItem href="#link4">Bogor</ListGroupItem>
                      <ListGroupItem href="#link5">Ciamis</ListGroupItem>
                      <ListGroupItem href="#link6">Cianjur</ListGroupItem>
                      <ListGroupItem href="#link7">Cirebon</ListGroupItem>
                      <ListGroupItem href="#link8">Garut</ListGroupItem>
                      <ListGroupItem href="#link9">Indramayu</ListGroupItem>
                      <ListGroupItem href="#link10">Karawang</ListGroupItem>
                      <ListGroupItem href="#link11">Kuningan</ListGroupItem>
                      <ListGroupItem href="#link12">Majalengka</ListGroupItem>
                      <ListGroupItem href="#link13">Pengandaran</ListGroupItem>
                      <ListGroupItem href="#link14">Purwakarta</ListGroupItem>
                      <ListGroupItem href="#link15">Subang</ListGroupItem>
                      <ListGroupItem href="#link16">Sukabumi</ListGroupItem>
                      <ListGroupItem href="#link17">Sumedang</ListGroupItem>
                      <ListGroupItem href="#link18">Tasikmalaya</ListGroupItem>
                      <ListGroupItem href="#link19">Kota Bandung</ListGroupItem>
                      <ListGroupItem href="#link20">Kota Banjar</ListGroupItem>
                      <ListGroupItem href="#link21">Kota Bekasi</ListGroupItem>
                      <ListGroupItem href="#link22">Kota Bogor</ListGroupItem>
                      <ListGroupItem href="#link23">Kota Cimahi</ListGroupItem>
                      <ListGroupItem href="#link24">Kota Cirebon</ListGroupItem>
                      <ListGroupItem href="#link25">Kota Depok</ListGroupItem>
                      <ListGroupItem href="#link26">Kota Sukabumi</ListGroupItem>
                      <ListGroupItem href="#link27">Kota Tasikmalaya</ListGroupItem>     */}
                  </ListGroup>
                   </Row>
                </div>
            </Col>
        </Row>

    )
}
}