import React, { Component } from "react";
import AsyncFetch from '../../api/AsyncFetch';
import Slider from "react-slick";
import millify from 'millify';
import { Card } from 'react-bootstrap';
import { Col, Row, Button} from 'react-bootstrap';
import {Link } from "react-router-dom";


class PropertyUnggulan extends Component {


  state = {
      data: [],
      url: "http://apiproday.herokuapp.com/api/v1/Pilihan_advert"
  }

  setStateAsync(state) {
      return new Promise(resolve => {
          this.setState(state, resolve)
      })
  }

  async componentWillMount() {
      console.log("Component A Will Mount")
      const url = this.state.url
      console.log(url)
      console.log("SetState with AsyncFetch")
      await this.setStateAsync({
          isLoad: true,
          ...await AsyncFetch(url)
      })
  }
  ambilangka(value) {
      return millify(value, {
          precision: 2,
          decimalSeparator: ',',
          units: ['', 'Ribu', 'Juta', 'Milyar', 'Triliun'],
          space: true,
      })
  }
  nego(value) {
      if (value === 'true') {
          return "Nego"
      } else {
          return ""
      }
  }

  render() {

    let children = []
           if (this.state.isLoad) {
               children = this.state.data
               console.log(children)
           }
           var settings = {
               dots: true,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 4,
               autoplay: true,
               autoplaySpeed: 3000,
               arrows: true,
               responsive: [{
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: true
                   }
               }, {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                   }
               }, {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }]
           };

    return (
        <Col xs={12} sm={12} md={12} lg={12}  style={{backgroundColor:'#fcfcfc',width:'100%'}}>
               <div className="content" style={{marginTop:20,backgroundColor:'#01ba42',marginLeft:0,marginRight:-10}}>
                <div style={{marginLeft:5, marginRight:5}}>
               <Row style={{padding:0}}>
                    <span style={{foat:'left',color:'#ffffff',width:'70%',marginTop:0,padding:5,fontWeight:'bold'}}>Properti Unggulan</span>                 
                     <div style={{width:'30%',backgroundColor:'#ffffff',marginTop:5,textAlign:'center',borderRadius:6}}>
                        <a href="#/DetailIklan"  style={{textDecoration: 'none',fontSize:'80%'}}>Lihat Semua</a>
                     </div>
                     <div style={{marginLeft:0,marginRight:0,marginTop:20,width:'100%'}}>
                       <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body style={{backgroundColor:'#fcf4f4'}}>
                            <Card.Title>Tanah Dijual</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">Yogyakarta</Card.Subtitle>
                             <Card.Title style={{color:'#db4d4d', fontWeight:500, float: 'left'}}>
                        Rp 4.000.000
                            <h2 style={{fontSize:15, color: '#95a5a6', float: 'right',marginTop:5, marginLeft:10,marginBottom:0}}>Nego</h2>
                        </Card.Title>
                          </Card.Body>
                        </Card>
                     </div>
               </Row>
              </div>
               </div>
            </Col>

    );
  }
}
 
export default PropertyUnggulan;