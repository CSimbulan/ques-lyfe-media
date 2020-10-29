import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
    city: "",
    state: "",
    zip: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(this.state.message)
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol
            className="landing-grid"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            style={{ paddingRight: 0 }}
          >
            <div className="landing-column">
              <div className="banner-text-w">
                <br></br>
                <h1>Contact Form</h1>
                <hr />
                <p>
                  I'm so glad you're here!
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod id erat sit amet mollis.
                  <br></br>
                  <br></br>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nulla facilisi.
                  <br></br>
                  <br></br>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Curabitur quis aliquam neque.
                </p>
                <br></br>
              </div>
            </div>
          </MDBCol>
          <MDBCol className="landing-grid" sm="12" md="12" lg="6" xl="6" style={{ paddingLeft: 0 }}>
            <div className="banner-text-w">
              <form
                className="needs-validation contact-form"
                onSubmit={this.submitHandler}
                noValidate
              >
                <MDBRow style={{ paddingBottom: "1em" }}>
                  <MDBCol sm="12" md="12" lg="12" xl="12">
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="white-text"
                    >
                      Name (Required):
                    </label>
                    <input
                      value={this.state.fname}
                      name="fname"
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                      style={{ width: "100%" }}
                      placeholder="Preferred Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your preferred name.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="12" md="12" lg="12" xl="12" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterConfirmEx3"
                      className="white-text"
                    >
                      Email (Required):
                    </label>
                    <input
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="defaultFormRegisterConfirmEx3"
                      className="form-control"
                      name="email"
                      required
                      placeholder="Your Email Address"
                    />

                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ paddingBottom: "1em" }}>
                  <MDBCol sm="12" md="12" lg="12" xl="12">
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="white-text"
                    >
                      Subject (Required):
                    </label>
                    <input
                      value={this.state.subject}
                      name="subject"
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                      style={{ width: "100%" }}
                      placeholder="Subject"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a subject.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="12" md="12" lg="12" xl="12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1" className="white-text">
                        Message (Required):
                      </label>
                      <textarea
                        value={this.state.message}
                        className="form-control"
                        name="message"
                        id="exampleFormControlTextarea1"
                        onChange={this.changeHandler}
                        rows="5"
                        style={{ width: "100%", resize: "none" }}
                        placeholder="Message"
                        required

                      />
                      <div className="invalid-feedback">
                        Please enter a message.
                    </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBBtn color="primary" type="submit">
                  Submit
                </MDBBtn>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Contact;
