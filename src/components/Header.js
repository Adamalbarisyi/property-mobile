import React, { Component } from 'react'
import {Link } from "react-router-dom";
import { Form, FormControl,
  ListGroup,
  Popover, OverlayTrigger,
  InputGroup,Button} from 'react-bootstrap';
import queryString from 'query-string';
import logo from "../assets/KPTI PNG.png";
import { Row, Col} from 'react-bootstrap';



export default class Header extends Component {


constructor(props) {
    super(props);

    
  this.state = {
      jenis: 'semua',
      alamat: 'semua',
      title: '',
      url:'#/ListIklan'
  }
}

   _handleFind = (e) => {
    if (e.key === 'Enter') {
      //Print Console Log Key Pencarian
      console.log('Proses Mencari');
      console.log(this.state.alamat);
      console.log(this.state.title);      
      }
    }


  _handleFind_button = (e) => {
      //Print Console Log Key Pencarian
      console.log('Proses Mencari');
      console.log(this.state.alamat);
      console.log(this.state.jenis);
      console.log(this.state.title);
      let url='#ListIklan'
      let alamat='?alamat='+this.state.alamat
      let katakunci='&cari='+this.state.title
      this.setState({url:url+alamat+katakunci});


     let url_ku = this.props.location.search;
     let params = queryString.parse(url_ku);
     console.log(params);
     console.log(params.alamat)
     this.setState({alamat:params.alamat})
  }
  handleChange(event) {
  this.setState({title: event.target.value})
}


   render() {
    const Pop_alamat = (
 <Popover  title="Pilih Lokasi">
            <ListGroup variant="flush" id="alamat">
                <ListGroup.Item onClick={() => this.setState({alamat:'semua'})}>Semua Lokasi</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'jogja'})}>Yogya Kota</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'kulonprogo'})}>KulonProgo</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'bantul'})}>Bantul</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'bantul'})}>Sleman</ListGroup.Item>
            </ListGroup>
  </Popover>
    );
    return (
            
            <Row>

            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#fcfcfc',padding:-10,width:'100%'}}>
                <img src={logo} alt="Logo" style={{marginLeft:30,width:'30%',marginTop:20,marginBottom:20}}/>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:'#ececec'}}>
     
              <center>
             
          
                  <Form  inline style={{width:'100%',marginRight:-15,marginLeft:10}}>
                      <InputGroup  size="sm" className="mb-3" style={{marginRight:10, width:'30%',marginTop:20}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i className="material-icons">location_on</i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <OverlayTrigger trigger="focus" placement="bottom" overlay={Pop_alamat}>
                          <FormControl id="icon_search" placeholder={"Pilih Lokasi "+this.state.alamat} aria-label="Username"/>
                          </OverlayTrigger>

                          
                      </InputGroup>                 

                      <InputGroup size='sm' className="mb-3" style={{width:'60%',marginTop:20}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i className="material-icons" style={{height:20}}>
                              search
                              </i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Cari Kata Kunci.." aria-label="Username" onKeyDown={this._handleFind} 
                          onChange={this.handleChange.bind(this)}
                           id="icon_search" /> 
                      <Link to={{ pathname: '/ListIklan',
                      search:'?alamat='+this.state.alamat+'&cari='+this.state.title,
                      state: 'flushDeal' }}  style={{textDecoration: 'none'}}>   
                      <InputGroup.Append>
                          <Button variant='danger' style={{color:'white', height:31, width:'100%',fontSize:12}} 
                          onChange={this.handleChange.bind(this)}
                          >Cari</Button>
                        </InputGroup.Append>
                      </Link>
                      
                      </InputGroup>
                  </Form>
             
              </center>      
            </Col>
</Row>

            )
  }
}