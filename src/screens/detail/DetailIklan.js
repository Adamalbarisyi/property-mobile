import React, { Component } from 'react'
import { Row, Col,Button} from 'react-bootstrap';
import Tanah from '../../assets/icon_detail_iklan/luas tanah.png';
import Flag from '../../assets/icon_detail_iklan/flag.png';
import {Link } from "react-router-dom";
import Moment from 'react-moment';


export default class DetailIklan extends Component {
render(){
    return(
        <Row>

        <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%',marginBootom:10}}>
               <div className="content" style={{marginTop:20,padding:10}}>
                <div style={{marginLeft:10, marginRight:10,marginTop:0,marginBootom:0}}>
               <Row style={{listStyleType: "none"}}>
                  <li style={{marginLeft:10}}>
                     <span style={{fontSize:12}}>
                        <Link to={'/'} style={{textDecoration: 'none',color:'grey'}}>  
                           Home
                        </Link>
                        <i className="material-icons" style={{fontSize:11}}>chevron_right</i> 
                        <Link  style={{textDecoration: 'none',color:'grey'}}>  
                           Yogyakarta
                        </Link>
                     </span>
                  </li>
                  <li style={{color:'grey'}}>
                     <span style={{fontSize:12}}>
                        <i className="material-icons" style={{fontSize:11}}>chevron_right</i> Tanah</span>
                  </li>
                  <li style={{color:'grey'}}>
                     <span style={{fontSize:12}}><i className="material-icons" style={{fontSize:11}}>chevron_right</i> TuanTanah</span>
                  </li>
                               
                </Row>
                </div>
               </div>
            </Col>
                 
            
            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%'}}>
               
               <div className="content" style={{paddingTop:0,paddingRight:0}}>
               <Row style={{listStyleType: "none",marginRight:0}}>
               <Col xs={7} sm={7} md={7} lg={7} style={{marginTop:8,paddingRight:0}}>
                   <Row style={{marginRight:0}}>
                        <li>
                           <span style={{fontSize:10}}>
                           <i className="material-icons" style={{fontSize:12,marginRight:3}}>format_list_bulleted</i>Rumah</span>
                        </li>
                        <li style={{marginLeft:5}}>
                           <span style={{fontSize:10}}><i className="material-icons" style={{fontSize:12}}>access_time</i> 
                              <Moment format="D MMM YYYY" withTitle style={{fontSize:9,marginLeft:3}}> </Moment>
                           </span>
                        </li>
                        <li style={{marginLeft:5}}>
                           <span style={{fontSize:10}}>
                              <i className="material-icons" style={{fontSize:12}}>location_on</i>   
                              yogyakarta
                           </span>
                        </li>
                      </Row>
                   </Col>

                    <Col xs={5} sm={5} md={5} lg={5} style={{backgroundColor:'#f09712',padding:0}}>
                    
                     <h5 style={{color:'#ffffff',fontSize:14,marginTop:10, float: 'left',marginLeft:20,fontWeight:20}}>
                        Rp 4.000.000
                            <h2 style={{fontSize:9, color: '#ffffff', float: 'right',marginTop:5,marginLeft:5,marginBottom:0}}>Nego</h2>
                        </h5>     
                   </Col>
                
               </Row>
               
                <div style={{margin:0}}>
               <Row style={{listStyleType: "none",marginRight:0}}>
               <img  style={{width:'110%',marginLeft:-5,paddingRight:-10}}  variant="top" src="https://via.placeholder.com/200x300" />

                     <Col xs={12} sm={12} md={12} lg={12} style={{width:'100%'}}>
                          <div style={{marginTop:20}}>
                              <h5 style={{fontWeight:'bold',fontSize:24}}>Dijual Tanah</h5>
                              <h6 style={{fontSize:12}}>Yogyakarta</h6>
                              <h5 style={{marginTop:20,width:'100%',fontSize:18}}>Spesifikasi Singkat</h5>
                              <Row>
                              <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,marginTop:10}}>
                                 <img style={{width:25,height:25, marginRight:10, marginLeft:20}} src={Tanah} alt="Luas Tanah"/>                
                                 <span style={{color:'#95a5a6',fontSize:14,marginLeft:10}}> Luas Tanah<br/><span style={{marginLeft:80,color:'#000000'}}>12312</span></span>
                              </Col>
                              <Col xs={6} sm={6} md={6} lg={6} style={{padding:0,marginTop:10}} >
                                 <img style={{width:25,height:25, marginRight:10, marginLeft:10}} src={Tanah} alt="Luas Tanah"/>
                                 <span style={{color:'#95a5a6',fontSize:14,marginLeft:10}}>Sertifikasi<br/><span style={{marginLeft:50,color:'#000000'}}>21sdsd23</span></span>
                              </Col>
                           </Row>
                           </div>     
                     </Col>
                   </Row>
                   <hr/>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} style={{padding:0}}>
                           <img style={{float:'left',width:'10%', marginRight:10, marginLeft:10}} src={Flag}  alt="Flag"/>   
                           <h6 style={{float:'left',color:'#cc0001',fontSize:12 }}>Laporkan Iklan </h6>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} style={{padding:0}}>
                           <i className="material-icons" style={{float:'left', marginLeft:50,color:'#95a5a6'}}>visibility</i>
                           <h6 style={{float:'left',marginLeft:10,marginTop:5, color:'#95a5a6',fontSize:12}}>Dilihat :201</h6>
                        </Col>
                  </Row>
                </div>
               </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%'}}>
               <div className="content" style={{marginTop:0,marginBootom:0}}>
                <div style={{marginLeft:10, marginRight:10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:0,padding:5,fontWeight:'bold',fontSize:'100%'}}>Pemasang Iklan</span>                 
                     
                     <Col xs={3} sm={3} md={3} lg={3} style={{padding:0,marginTop:10}}>     
                      <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    
                   </Col>
                     <Col xs={5} sm={5} md={5} lg={5} style={{padding:0,marginTop:10}} >
                       <h5 style={{fontSize:16,color:'#f69402',marginBottom:0,marginTop:10}}>MR.ABUD</h5>
                        <span>
                           <i className="material-icons"  style={{float:'left', color:'#95a5a6', fontSize:14}}>
                              location_on
                           </i>
                           <span style={{float:'left',color:'#95a5a6',fontSize:12,marginTop:-3}}>Yogyakarta</span>
                        </span>  
                     </Col>       
                     <Col xs={4} sm={4} md={4} lg={4} style={{padding:0,marginTop:10}} >
                       <Button variant="light" style={{width:'100%',color:'black',padding:2,borderRadius:6,border:'solid 1px '}}>
                            <b style={{color:'#000000',fontSize:'50%'}}>Hubungi Penjual</b>
                            </Button>

                            <Button variant="danger" style={{width:'100%',color:'white',padding:2,marginTop:10,borderRadius:6}}>
                             <b style={{color:'white',fontSize:'50%'}}>Hubungi Penjual</b>
                            </Button>
                     </Col>   
                  
                   
                   </Row>
                </div>
               </div>
            </Col>

              <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%'}}>
               <div className="content">
                <div style={{marginLeft:10, marginRight:10}}>
              
               <Row>
                   <span style={{foat:'left',color:'#000000',width:'90%',marginTop:0,padding:5,fontWeight:'bold',fontSize:'100%'}}>Spesifikasi Lengkap</span>     

                   <Col xs={5} sm={5} md={5} lg={5} style={{padding:0,marginTop:10}}>     
                        <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:12,color:'#95a5a6'}}>
                            <li>Kategori</li>
                            <li>Jenis Iklan</li>
                            <li>Harga</li>
                            <li>Luas Tanah</li>
                            <li>Sertifikasi</li>
                        </ul>
                   </Col>
                     <Col xs={7} sm={7} md={7} lg={7} style={{padding:0,marginTop:10}} >
                       <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:12,color:'#95a5a6'}}>
                            <li>: Tanah </li>
                            <li>: Dijual</li>
                            <li>: Rp.3.000.000</li>
                            <li>: 240 m2</li>
                            <li>: SHM</li>
                        </ul>
                     </Col>            
                </Row>
                </div>
               </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%'}}>
               <div className="content">
                <div style={{marginLeft:10, marginRight:10}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:0,padding:5,fontWeight:'bold',fontSize:'100%'}}>Deskripsi</span>                 
                     <p style={{fontSize:12}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi fugit ducimus doloremque incidunt. Natus, sequi odio officia aperiam eius doloremque autem doloribus ullam. At sequi perspiciatis laboriosam recusandae soluta.
                     lore</p>
                  
                   
                   </Row>
                </div>
               </div>
            </Col>

        </Row>
    )
}

}



                               