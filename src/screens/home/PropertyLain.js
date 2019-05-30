import React, { Component } from 'react'
//import millify from 'millify';
import { Row, Col,Card} from 'react-bootstrap';
<<<<<<< HEAD
import { ListGroupItem,ListGroup } from "react-bootstrap";

=======
import AsyncFetch from '../../api/AsyncFetch'
import {Link } from "react-router-dom";
var numeral = require('numeral');
>>>>>>> 7ed8b64fa44d48016e7ffc8c3863c6348b9b58ed
export default class DetailIklan extends Component {
   state = {
      data: [],
      url: "",
      url_data: "",
      isFlushed: false
  }
   setStateAsync(state) {
      return new Promise(resolve => {
          this.setState(state, resolve)
      })
  }
   async componentDidMount(){
      console.log("Component A Will Mount")
      const url = this.state.url
      console.log(url)        
      console.log("SetState with AsyncFetch")
      await this.setStateAsync({
          isLoad: true,
          ...await AsyncFetch(url)
      })
  }
  async componentWillMount() {

    //let url_ku = this.props.location.search;
   //  let params = queryString.parse(url_ku);
    // console.log(params);
     // console.log(params.alamat)
      let url_api='https://apiproday.herokuapp.com/api/v1/Random_advert'
      this.setState({url:url_api})
      console.log(this.state.url_data)
  }
  to_rupiah(harga){
    var string = numeral(harga).format('0,0');
    var ini=string.replace(",", "." );
    return ini.replace(",", "." );
  }

render(){
    let children = []
           if (this.state.isLoad) {
               children = this.state.data
               console.log(children)
           }else {

           }

    return(
        <Row style={{width:'100%',margin:0}}>
            <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#fcfcfc',marginBottom:20}}>
               <div className="content" style={{marginTop:0,marginLeft:0,marginBottom:0,marginRight:-10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:-10,marginBottom:5,padding:5,fontWeight:'bold',fontSize:'100%'}}>Property Menarik Lainnya</span>                 
                     { ! this.state.isLoad && <label>Loading ... </label> }
       
            { this.state.isLoad && children.map((value, index) => 
            

                     <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,paddingLeft:5,paddingRight:5, marginBottom:10}}>
              
                        <Link to={{ pathname: '/DetailIklan',
                      search:'?cari='+value.title+'&id='+value.id,
                      state: 'flushDeal' }} style={{textDecoration: 'none'}}>

                        <Card style={{ width: '100%' }}>
                          <Card.Img variant="top" src={value.foto} onError={(e) => {
                        e.target.src = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' // some replacement image
                         }} />
                          <Card.Body >
                            <Card.Title style={{fontSize:18,marginLeft:-10}}>
                        <h6 style={{fontWeight:400,fontSize:15, textAlign:'justify'}} className="text_title">
                        {(value.title.substring(0,55)+'..')}
                        </h6></Card.Title>
                             <Card.Subtitle className="mb-2 text-muted" style={{marginLeft:-10}}>Yogyakarta</Card.Subtitle>
                             <Card.Title style={{color:'#db4d4d', fontWeight:500,fontSize:14,marginTop:10, float: 'left',marginLeft:-10}}>
                        Rp {this.to_rupiah(value.harga)}
                            <h2 style={{fontSize:12, color: '#95a5a6', float: 'right',marginLeft:5,marginBottom:0}}>Nego</h2>
                        </Card.Title>
                            
                          </Card.Body>
                        </Card>

                     </Link>
                     </Col>
                )
              }
                   </Row>
                </div>
            </Col>
        </Row>

    )
}
}