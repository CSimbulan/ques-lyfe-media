import React, { Component } from "react";
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

class About extends Component {
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
              <h1>About Me</h1>
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
              <h2>My Philosophy</h2>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <InView threshold="0.2">
            {({ inView, ref, entry }) => (
              <MDBCol
                className="landing-grid2"
                sm="12"
                md="12"
                lg="6"
                xl="6"
                style={{ padding: 0 }}
              >
                <div
                  ref={ref}
                  className="dynamic-bg"
                  style={Object.assign(
                    {
                      backgroundImage: "url(../assets/car-shot-portrait.jpg)",
                      backgroundSize: "cover",
                    },
                    this.getFadeLeftBG(inView)
                  )}
                ></div>
              </MDBCol>
            )}
          </InView>
          <InView threshold="0.2">
            {({ inView, ref, entry }) => (
              <MDBCol
                className="landing-grid2"
                sm="12"
                md="12"
                lg="6"
                xl="6"
                style={{ paddingLeft: 0 }}
              >
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeRightBG(inView)}
                >
                  <div className="banner-text-w">
                    <p className="mg-auto">
                      Donec rhoncus auctor elit dictum dictum. In vestibulum,
                      eros id commodo accumsan, nisi nunc consequat risus, at
                      molestie nibh est ac augue.
                      <br></br>
                      <br></br>
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
                  </div>
                </div>
              </MDBCol>
            )}
          </InView>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12" xl="12">
            <div className="banner-top">
              <h2>Other Hobbies</h2>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <InView threshold="0.2">
            {({ inView, ref, entry }) => (
              <MDBCol
                className="landing-grid2"
                sm="12"
                md="12"
                lg="6"
                xl="6"
                style={{ paddingRightt: 0 }}
              >
                <div
                  ref={ref}
                  className="landing-column"
                  style={this.getFadeLeftBG(inView)}
                >
                  <div className="banner-text-w">
                    <p className="mg-auto">
                      Donec rhoncus auctor elit dictum dictum. In vestibulum,
                      eros id commodo accumsan, nisi nunc consequat risus, at
                      molestie nibh est ac augue.
                      <br></br>
                      <br></br>
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
                  </div>
                </div>
              </MDBCol>
            )}
          </InView>
          <InView threshold="0.2">
            {({ inView, ref, entry }) => (
              <MDBCol
                className="landing-grid2"
                sm="12"
                md="12"
                lg="6"
                xl="6"
                style={{ padding: 0 }}
              >
                <div
                  ref={ref}
                  className="dynamic-bg"
                  style={this.getFadeRightBG(inView)}
                >
                  <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <MDBView>
                          <img
                            className="carousel-img"
                            src="../assets/car-shot-portrait.jpg"
                            alt="First slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <MDBView>
                          <img
                            className="carousel-img"
                            src="../assets/with_gear.jpg"
                            alt="Second slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView>
                          <img
                            className="carousel-img"
                            src="../assets/gnar-splash.jpg"
                            alt="Third slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </div>
              </MDBCol>
            )}
          </InView>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12" xl="12">
            <div className="banner-top">
              <h2>Check Out These Links For More</h2>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding: 0 }}>
            <InView threshold="0.5">
              {({ inView, ref, entry }) => (
                <div className="service-col">
                  <div
                    ref={ref}
                    className="service"
                    style={this.getFadeDown(inView)}
                  >
                    <h3>YouTube</h3>
                    <a
                      href="https://www.youtube.com/channel/UCrGHx3U69YZKBKWDmD4U3qQ"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="service-icon icon-h">
                        <MDBIcon fab icon="youtube-square" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding: 0 }}>
            <InView threshold="0.5">
              {({ inView, ref, entry }) => (
                <div className="service-col">
                  <div
                    ref={ref}
                    className="service"
                    style={this.getFadeDown(inView)}
                  >
                    <h3>Instagram</h3>
                    <a
                      href="https://www.instagram.com/queslyfe/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="service-icon icon-h">
                        <MDBIcon fab icon="instagram" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="4" xl="4" style={{ padding: 0 }}>
            <InView threshold="0.5">
              {({ inView, ref, entry }) => (
                <div className="service-col">
                  <div
                    ref={ref}
                    className="service"
                    style={this.getFadeDown(inView)}
                  >
                    <h3>TikTok</h3>
                    <a
                      href="https://www.tiktok.com/@quenncyy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="service-icon icon-h">
                        <MDBIcon fab icon="tiktok" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </InView>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default About;
