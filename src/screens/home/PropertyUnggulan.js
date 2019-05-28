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
        <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#fcfcfc',padding:-10,width:'100%'}}>
               <div className="content" style={{marginTop:10,backgroundColor:'#01ba42',marginLeft:0,marginRight:0,marginBottom:10}}>
                <div style={{marginLeft:5, marginRight:5}}>
               <Row>
                    <span style={{foat:'left',color:'#ffffff',width:'70%',marginTop:0,padding:5,fontWeight:'bold'}}>Properti Unggulan</span>                 
                     <div style={{width:'30%',backgroundColor:'#ffffff',marginTop:0,textAlign:'center'}}>
                        <a href="#DetailIklan="  style={{textDecoration: 'none',fontSize:'100%'}}>Lihat Semua</a>
                     </div>
                     <div style={{marginLeft:0,marginRight:0,marginTop:20}}>
                       <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="primary"><a href="#/DetailIklan"> Go somewhere</a></Button>
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