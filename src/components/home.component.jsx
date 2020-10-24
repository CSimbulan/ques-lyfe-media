import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import InView from 'react-intersection-observer';

class Home extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          opacity: 0
        }
      }

    componentDidMount() {
        this.interval = setInterval(() => this.chanegOpacity(), 4000);
      }


    chanegOpacity = () => {
        this.setState({opacity: (this.state.opacity === 0 ? 1 : 0)})
    }

    getFadeLeftBG = (inView) => {
        
        return inView ? {opacity:1, transform:"translate(0%,0%)", WebkitTransform:"translate(0%,0%)"} : {opacity:0, transform:"translate(50%,0%)", WebkitTransform:"translate(-50%,0%)"};
    }

    getFadeRightBG = (inView) => {
        
        return inView ? {opacity:1, transform:"translate(0%,0%)", WebkitTransform:"translate(0%,0%)"} : {opacity:0, transform:"translate(50%,0%)", WebkitTransform:"translate(50%,0%)"};
    }

    getFadeDown = (inView) => {
        return inView ? {opacity:1, transform:"translate(0%,0%)", WebkitTransform:"translate(0%,0%)"} : {opacity:0, transform:"translate(0%,0%)", WebkitTransform:"translate(0%,0%)"};
    }
    
    render() {

        return (
            <div>                    
                    <MDBRow>
                        <MDBCol className="landing-grid bg-white" sm="12" md="12" lg="6" xl="7">
                            <div className="banner-text" style={{transform:"translate(-50%,-50%)"}}>
                                <br></br>
                                <h2>Welcome To</h2>
                                <h1>Ques Lyfe Media</h1>
                                <hr />
                                <p>Videographer &#8226; Video Editor &#8226; Model &#8226; Blogger &#8226; Content Creator</p>
                                <div className="social-links">
                                    {/* Youtube */}
                                    <a href="https://www.youtube.com/channel/UCrGHx3U69YZKBKWDmD4U3qQ" rel="noopener noreferrer" target="_blank">
                                    <MDBIcon fab icon="youtube-square"/>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/queslyfe/" rel="noopener noreferrer" target="_blank">
                                    <MDBIcon fab icon="instagram"/>
                                    </a>
                                    {/* TikTok */}
                                    <a href="https://www.tiktok.com/@quenncyy" rel="noopener noreferrer" target="_blank">
                                    <MDBIcon fab icon="tiktok"/>
                                    </a>
                                </div>
                                <br></br>
                            </div>
                        </MDBCol>
                        <MDBCol className="landing-grid" sm="12" md="12" lg="6" xl="5">
                            <div className="dynamic-bg" style={{backgroundImage: "url(../assets/headshot1.jpg)", backgroundSize: "cover"}}></div>
                            <div className="dynamic-bg" style={{backgroundImage: "url(../assets/headshot2.jpg)", backgroundSize: "cover", opacity:this.state.opacity}}></div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="12" xl="12"><div className="banner-top"><h2>A Little Bit About Me</h2></div></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <InView threshold="0.2">   
                            {({ inView, ref, entry }) => (
                                <MDBCol  className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{padding:0}}>
                                    <div ref={ref} className="dynamic-bg" style={Object.assign({backgroundImage: "url(../assets/car-shot-portrait.jpg)", backgroundSize: "cover"}, this.getFadeLeftBG(inView))}></div>
                                </MDBCol>)}
                        </InView>
                        <InView threshold="0.2">   
                            {({ inView, ref, entry }) => (                    
                                <MDBCol  className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{paddingLeft:0}}>
                                    <div ref={ref}  className="landing-column" style={this.getFadeRightBG(inView)}>
                                    <div className="banner-text-w">
                                            <br></br>
                                            <h1>Ques Lyfe</h1>
                                            <hr />
                                            <p>
                                                Hi there, welcome to my site. My name is Danny but I also go by Que.
                                                <br></br><br></br>
                                                I am a self taught videographer/video creator. I love to explore the art of videography which is why I have started my own business.
                                                <br></br><br></br>
                                                To learn more about me, check out my <a href="/about">About</a> page!
                                            </p>
                                            <br></br>
                                    </div></div>
                            </MDBCol>)}
                        </InView>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="12" xl="12"><div className="banner-top"><h2>What Services Do I Offer?</h2></div></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding:0 }}>
                            <InView threshold="0.5">   
                            {({ inView, ref, entry }) => (
                                <div className="service-col">
                                    <div ref={ref} className="service" style={this.getFadeDown(inView)}>
                                        <h3>Videography</h3>
                                        <div className="service-icon"><MDBIcon icon="video" /></div>
                                    </div>
                                </div>)}
                            </InView>
                        </MDBCol>
                        <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding:0 }}>
                        <InView threshold="0.5">   
                            {({ inView, ref, entry }) => (
                                <div className="service-col">
                                    <div ref={ref} className="service" style={this.getFadeDown(inView)}>
                                        <h3>Video Editing</h3>
                                        <div className="service-icon"><MDBIcon icon="file-video" /></div>
                                    </div>
                                </div>)}
                            </InView>
                        </MDBCol>
                        <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding:0 }}>
                        <InView threshold="0.5">   
                            {({ inView, ref, entry }) => (
                                <div className="service-col">
                                    <div ref={ref} className="service" style={this.getFadeDown(inView)}>
                                        <h3>Modeling</h3>
                                        <div className="service-icon"><MDBIcon icon="male" /></div>
                                    </div>
                                </div>)}
                            </InView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{borderBottom: "1px dashed white"}}>
                        <MDBCol className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{paddingRight:0}}>
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (
                                <div ref={ref}  className="landing-column" style={this.getFadeLeftBG(inView)}>
                                <div className="banner-text-w">
                                    <br></br>
                                    <h1>Videography</h1>
                                    <hr />
                                    <p>
                                        Do you want your moments captured on video? 
                                        <br></br><br></br>
                                        Whether it's a show or a big event like a wedding or a birthday party, I can capture it for you.
                                        <br></br><br></br>
                                        To see some of my work and find out if I'm a good fit for you, head over to the <a href="/projects">My Works</a> page.
                                    </p>
                                    <br></br>
                                    </div>
                            </div>)}
                            </InView>
                        </MDBCol>
                        <MDBCol className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{padding:0}}>
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (    
                                    <div ref={ref}  className="landing-column" style={this.getFadeRightBG(inView)}>
                                        <video autoPlay playsInline loop muted width="100%" height="99%">
                                            <source src="../assets/test-hd.mp4" type="video/mp4"/>
                                            {/*<div className="dynamic-bg" style={{backgroundImage: "url(../assets/test-hd.gif)", backgroundSize: "cover"}}></div>*/}
                                        </video>
                                    </div>)}
                                    
                            </InView>
                        </MDBCol> 
                    </MDBRow>
                    <MDBRow style={{borderBottom: "1px dashed white"}}>
                        
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (    
                                <MDBCol  className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{padding:0}}>
                                <div ref={ref} className="dynamic-bg" style={Object.assign({backgroundImage: "url(../assets/with_gear.jpg)", backgroundSize: "cover"}, this.getFadeLeftBG(inView))}></div>
                            </MDBCol>)}
                            </InView>
     
                        <MDBCol className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{paddingLeft:0}}>
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (    
                                    <div ref={ref}  className="landing-column" style={this.getFadeRightBG(inView)}>
                                        <div className="banner-text-w">
                                                <br></br>
                                                <h1>Video Editing</h1>
                                                <hr />
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod id erat sit amet mollis. 
                                                    <br></br><br></br>
                                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                                    Nulla facilisi.
                                                    <br></br><br></br>
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis aliquam neque.
                                                </p>
                                                <br></br>
                                        </div>
                                    </div>)}
                            </InView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{paddingRight:0}}>
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (
                                <div ref={ref}  className="landing-column" style={this.getFadeLeftBG(inView)}>
                                <div className="banner-text-w">
                                <br></br>
                                                <h1>Modeling</h1>
                                                <hr />
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod id erat sit amet mollis. 
                                                    <br></br><br></br>
                                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                                    Nulla facilisi.
                                                    <br></br><br></br>
                                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis aliquam neque.
                                                </p>
                                                <br></br>
                                    </div>
                            </div>)}
                            </InView>
                        </MDBCol>
                        <MDBCol className="landing-grid2" sm="12" md="12" lg="6" xl="6" style={{padding:0}}>
                            <InView threshold="0.2">   
                                {({ inView, ref, entry }) => (    
                                    <div ref={ref}  className="landing-column" style={this.getFadeRightBG(inView)}>
                                        <video autoPlay playsInline loop muted width="100%" height="99%">
                                            <source src="../assets/photoshoot.mp4" type="video/mp4"/>
                                            {/*<div className="dynamic-bg" style={{backgroundImage: "url(../assets/test-hd.gif)", backgroundSize: "cover"}}></div>*/}
                                        </video>
                                    </div>)}
                                    
                            </InView>
                        </MDBCol> 
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="12" xl="12"><div className="banner-top"><h2>Want To Get In Touch?</h2></div></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="6" xl="6" style={{ padding:0 }}>
                            <InView threshold="0.3">   
                            {({ inView, ref, entry }) => (
                                <div className="service-col">
                                    <div ref={ref} className="service" style={this.getFadeDown(inView)}>
                                        <h4>(647) 123 - 4567</h4>
                                        <div className="service-icon"><MDBIcon icon="phone-alt" /></div>
                                    </div>
                                </div>)}
                            </InView>
                        </MDBCol>
                        <MDBCol sm="12" md="12" lg="6" xl="6" style={{ padding:0}}>
                        <InView threshold="0.3">   
                            {({ inView, ref, entry }) => (
                                <div className="service-col">
                                    <div ref={ref} className="service" style={this.getFadeDown(inView)}>
                                        <h4>contact@placeholder.com</h4>
                                        <div className="service-icon"><MDBIcon icon="envelope" /></div>
                                    </div>
                                </div>)}
                            </InView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12" md="12" lg="12" xl="12"><div className="banner-bot"><h4>
                                    If anything you saw has interested you, or if you have any questions, please go over to my <a href="/contact">Contact</a> page for more on how to reach me.
                                </h4></div></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="banner-end" sm="12" md="12" lg="12" xl="12">
                        <div className="banner-text-end">
                                <br></br>
                                <h2>Thanks For Visiting!</h2>   
                                <br></br>     
                        </div>
                        </MDBCol>
                    </MDBRow>

            </div>
        )
    }
}

export default Home;
