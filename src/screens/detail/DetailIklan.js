import React, { Component } from 'react'
import { Row, Col,Card,Button} from 'react-bootstrap';
import Tanah from '../../assets/icon_detail_iklan/luas tanah.png';
import Flag from '../../assets/icon_detail_iklan/flag.png';


export default class DetailIklan extends Component {
render(){
    return(
        <Row>
                 
            
            <Col xs={12} sm={12} md={12} lg={12} id="logo" style={{backgroundColor:'#f9f7f7',width:'100%'}}>
               <div className="content">
                <div style={{margin:0}}>
               <Row>
                    <span style={{foat:'left',color:'#000000',width:'90%',marginTop:0,padding:5,fontWeight:'bold',fontSize:'100%'}}>Property Menarik Lainnya</span>                 
                     
                     <Col xs={12} sm={12} md={12} lg={12} style={{width:'100%'}}>

                          <img  style={{width:'100%'}} variant="top" src="https://via.placeholder.com/200x100" />
                       
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
                       <h5 style={{color:'#f69402'}}>MR.ABUD</h5>
                        <span>
                                       <i className="material-icons"  style={{float:'left', color:'#95a5a6', fontSize:16}}>
                                location_on
                                </i>
                                 <span style={{float:'left',color:'#95a5a6'}}>Yogyakarta</span>
                                    </span>  
                     </Col>       
                     <Col xs={4} sm={4} md={4} lg={4} style={{padding:0,marginTop:10}} >
                       <Button variant="danger" style={{width:'100%',color:'white'}}>
                            <b style={{color:'white',fontSize:'50%'}}>Hubungi Penjual</b>
                            </Button>

                            <Button variant="danger" style={{width:'100%',color:'white',marginTop:10}}>
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
                        <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:14,color:'#95a5a6'}}>
                            <li>Kategori</li>
                            <li>Jenis Iklan</li>
                            <li>Harga</li>
                            <li>Luas Tanah</li>
                            <li>Sertifikasi</li>
                        </ul>
                   </Col>
                     <Col xs={7} sm={7} md={7} lg={7} style={{padding:0,marginTop:10}} >
                       <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:14,color:'#95a5a6'}}>
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
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi fugit ducimus doloremque incidunt. Natus, sequi odio officia aperiam eius doloremque autem doloribus ullam. At sequi perspiciatis laboriosam recusandae soluta.
                     lore</p>
                  
                   
                   </Row>
                </div>
               </div>
            </Col>

        </Row>
    )
}

}



                               