import { MDBFooter ,MDBContainer } from 'mdbreact';
import React, { Component } from 'react';

class FooterPage extends Component {
    state = {}
    render() {
        return (
            <MDBFooter color="black" className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: Ques Lyfe Media
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default FooterPage;