import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <h3 className="text-warning text-center fw-bold">
        Blog Here <hr />
      </h3>
      <Container>
        <Row>
          <Col>
            <div className="border border-info rounded text-warning p-4 mb-3">
              <h3>Q.1: what is cors ?</h3>
              <p className="text-black fw-bold">
                ANS:
                <small className="ps-2">
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources.
                </small>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border border-info rounded text-warning p-4 mb-3">
              <h3>
                Q.2: Why are you using firebase? What other options do you have
                to implement authentication?
              </h3>
              <p className="text-black fw-bold">
                ANS:
                <small className="ps-2">
                    The Firebase Realtime Database let us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                    Get Started with Firebase Authentication on Websites: 
                    <br /> 
                    .On this page. 
                    <br />
                    .Add and initialize the Authentication SDK. 
                    <br />
                    .(Optional) Prototype and test with Firebase Local Emulator Suite.
                    <br />
                   .Sign up new users.
                    <br />
                   .Sign in existing users. 
                   <br />
                    .Set an authentication state observer and get user data. 
                    <br />
                   .Next steps.
                </small>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border border-info rounded text-warning p-4 mb-3">
              <h3>Q.3: How does the private route work ?</h3>
              <p className="text-black fw-bold">
                ANS:
                <small className="ps-2">
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </small>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border border-info rounded text-warning p-4 mb-3">
              <h3>Q.4: What is Node? How does Node work?</h3>
              <p className="text-black fw-bold">
                ANS:
                <small className="ps-2">
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
