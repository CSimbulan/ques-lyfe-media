import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBIcon,
} from "mdbreact";
import InView from "react-intersection-observer";

class Projects extends Component {

  getFadeLeftBG = (inView) => {
    return inView
      ? {
        opacity: 1,
        transform: "translate(0%,0%)",
        WebkitTransform: "translate(0%,0%)",
      }
      : {
        opacity: 0,
        transform: "translate(50%,0%)",
        WebkitTransform: "translate(-50%,0%)",
      };
  };

  getFadeRightBG = (inView) => {
    return inView
      ? {
        opacity: 1,
        transform: "translate(0%,0%)",
        WebkitTransform: "translate(0%,0%)",
      }
      : {
        opacity: 0,
        transform: "translate(50%,0%)",
        WebkitTransform: "translate(50%,0%)",
      };
  };

  getFadeDown = (inView) => {
    return inView
      ? {
        opacity: 1,
        transform: "translate(0%,0%)",
        WebkitTransform: "translate(0%,0%)",
      }
      : {
        opacity: 0,
        transform: "translate(0%,0%)",
        WebkitTransform: "translate(0%,0%)",
      };
  };


  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol className="landing-grid" sm="12" md="12" lg="6" xl="7">
            <div
              className="banner-text-w"
              style={{ transform: "translate(-50%,-50%)" }}
            >
              <br></br>
              <h1>Portfolio</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod id erat sit amet mollis.
                <br />
                <br />
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla facilisi.
                <br />
                <br />
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Curabitur quis aliquam neque.
                <br />
                <br />
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Curabitur quis aliquam neque.
              </p>
            </div>
          </MDBCol>
          <MDBCol className="landing-grid" sm="12" md="12" lg="6" xl="5">
            <div
              className="dynamic-bg"
              style={{
                backgroundImage: "url(../assets/with_gear.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12" xl="12">
            <div className="banner-top">
              <h2>Video Projects</h2>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{ borderBottom: "1px dashed white" }}>
          <MDBCol
            className="landing-grid2"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            style={{ paddingRight: 0 }}
          >
            <InView threshold="0.2">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeLeftBG(inView)}
                >
                  <video
                    playsInline
                    width="100%"
                    height="99%"
                    controls
                  >
                    <source src="../assets/training.mov" type="video/mp4" />
                    {/*<div className="dynamic-bg" style={{backgroundImage: "url(../assets/test-hd.gif)", backgroundSize: "cover"}}></div>*/}
                  </video>
                </div>
              )}
            </InView>
          </MDBCol>
          <MDBCol
            className="landing-grid2"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            style={{ paddingLeft: 0 }}
          >
            <InView threshold="0.2">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeRightBG(inView)}
                >
                  <div className="banner-text-w">
                    <br></br>
                    <h1>Athlete Profile</h1>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum euismod id erat sit amet mollis.
                      <br></br>
                      <br></br>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nulla facilisi.
                      <br></br>
                      <br></br>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Curabitur quis aliquam neque.
                    </p>
                    <br></br>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol
            className="landing-grid2"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            style={{ paddingRight: 0 }}
          >
            <InView threshold="0.2">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeLeftBG(inView)}
                >
                  <div className="banner-text-w">
                    <br></br>
                    <h1>Toronto Auto Show 2020</h1>
                    <hr />
                    <p>
                      Fusce mollis mauris eu augue convallis, id posuere sapien
                      rhoncus. Aenean vel lobortis lorem. Suspendisse rutrum
                      nibh elit, vitae mollis orci sodales in. In suscipit
                      mattis dui, non porttitor sapien tempor et.
                      <br></br>
                      <br></br>
                      Nullam accumsan interdum sem nec dignissim. Donec egestas,
                      mauris at suscipit interdum, dolor felis volutpat ex,
                      vitae suscipit mauris tortor vitae nibh.
                    </p>
                    <br></br>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
          <MDBCol
            className="landing-grid2"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            style={{ padding: 0 }}
          >
            <InView threshold="0.2">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeRightBG(inView)}
                >
                  <div className="col-video">
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/Sahxsu8CAYo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div></div>
              )}
            </InView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12" xl="12">
            <div className="banner-top">
              <h2>Like What You See?</h2>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="6" xl="6" style={{ padding: 0 }}>
            <InView threshold="0.3">
              {({ inView, ref, entry }) => (
                <div className="service-col">
                  <div
                    ref={ref}
                    className="service"
                    style={this.getFadeDown(inView)}
                  >
                    <h4>(647) 123 - 4567</h4>
                    <div className="service-icon">
                      <MDBIcon icon="phone-alt" />
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="6" xl="6" style={{ padding: 0 }}>
            <InView threshold="0.3">
              {({ inView, ref, entry }) => (
                <div className="service-col">
                  <div
                    ref={ref}
                    className="service"
                    style={this.getFadeDown(inView)}
                  >
                    <h4>contact@placeholder.com</h4>
                    <div className="service-icon">
                      <MDBIcon icon="envelope" />
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12" xl="12">
            <div className="banner-bot">
              <h4>
                If you believe I can help you with your project,
                please go over to my <a href="/contact">Contact</a>{" "}
                page for more on how to reach me.
              </h4>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default Projects;
