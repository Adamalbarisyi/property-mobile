import React, { Component } from "react";
import AsyncFetch from '../../api/AsyncFetch';
import Slider from "react-slick";
import millify from 'millify';
import { Card } from 'react-bootstrap';
import { Col, Row, Button, Container} from 'react-bootstrap';
import {Link } from "react-router-dom";
var numeral = require('numeral');

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
   to_rupiah(harga){
    var string = numeral(harga).format('0,0');
    var ini=string.replace(",", "." );
    return ini.replace(",", "." );
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
               dots: false,
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
         <Container style={{marginTop:20,marginBottom:20}}>
        <Slider {...settings}>
            { this.state.isLoad && children.map((value, index) =>

        <Col xs={12} sm={12} md={12} lg={12}  style={{backgroundColor:'#fcfcfc',width:'100%' }}  key={value.id}>
  <Link to={{ pathname: '/DetailIklan',
                      search:'?cari='+value.title+'&id='+value.id,
                      state: 'flushDeal' }} style={{textDecoration: 'none'}}>
               <div className="content1" style={{backgroundColor:'#01ba42'}}>
                <div style={{marginLeft:5, marginRight:5}}>
               <Row style={{padding:0}}>
                    <span style={{foat:'left',color:'#ffffff',width:'70%',marginTop:0,padding:5,fontWeight:'bold'}}>Etalase Produk</span>                 
                     <div style={{width:'30%',backgroundColor:'#ffffff',marginTop:5,textAlign:'center',borderRadius:6}}>
                        <a href="#/DetailIklan"  style={{textDecoration: 'none',fontSize:'80%'}}>Lihat Semua</a>
                     </div>
                     <div style={{marginLeft:0,marginRight:0,marginTop:20,width:'100%'}}>
                       <Card style={{ width: '100%' }}>
                       <Card.Img style={{height:400}} variant="top" src={value.foto} onError={(e) => {
                        e.target.src = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' // some replacement image
                         }} />
                          <Card.Body style={{backgroundColor:'#fcf4f4'}}>
                            <Card.Title>
                        <h6 style={{fontWeight:400,fontSize:15, textAlign:'justify'}} className="text_title">
                        {(value.title.substring(0,55)+'..')}
                        </h6>
                            </Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">Yogyakarta</Card.Subtitle>
                             <Card.Title style={{color:'#db4d4d', fontWeight:500, float: 'left'}}>
                        Rp  {this.to_rupiah(value.harga)}
                            <h2 style={{fontSize:15, color: '#95a5a6', float: 'right',marginTop:5, marginLeft:10,marginBottom:0}}>Nego</h2>
                        </Card.Title>
                          </Card.Body>
                        </Card>
                     </div>
               </Row>
              </div>
               </div>
               </Link>
            </Col>

            ) }
        </Slider>
        </Container>

    );
  }
}
 
export default PropertyUnggulan;