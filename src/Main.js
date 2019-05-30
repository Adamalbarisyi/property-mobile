import React, { Component } from "react";
import {Route,HashRouter } from "react-router-dom";
import {Container, Row} from 'react-bootstrap';

import PropertyUnggulan from "./screens/home/PropertyUnggulan";
import Detail from './screens/detail//DetailIklan';
import PropertyLain from "./screens/home/PropertyLain";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollUpButton from "react-scroll-up-button";
import Provinsi from './screens/iklan/region/Provinsi';
import Yogyakarta from './screens/iklan/subregion/Yogyakarta';
import JawaTimur from './screens/iklan/subregion/JawaTimur';
import JawaBarat from './screens/iklan/subregion/JawaBarat';




class Main extends Component {
  render() {
    return (
    <HashRouter>
    <div>
    <ScrollUpButton/>
        <div className="header" >
           <Header/>
             
        </div>

        <div id="main-content">
            <Container>
                <Row>
                    <Route exact path="/" component={PropertyUnggulan}/> 
                     <Route exact path="/" component={PropertyLain}/>
                     <Route exact path="/" component={Provinsi}/>
                     <Route exact path="/" component={Yogyakarta}/>
                     <Route exact path="/" component={JawaTimur}/>
                     <Route exact path="/" component={JawaBarat}/>
                     <Route exact path="/DetailIklan" component={Detail}/> 

                </Row>
            </Container>
            
            
        </div>

        <div className="footer" >
                <Route exact path="/" component={Footer}/>
                <Route exact path="/DetailIklan" component={Footer}/>
               
        </div>
    </div>
</HashRouter>
    );
  }
}
 
export default Main;