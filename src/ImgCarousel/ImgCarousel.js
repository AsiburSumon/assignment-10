import React from "react";
import './ImgCarousel.css'
import Carousel from "react-bootstrap/Carousel";

const ImgCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel " src="https://dev.java/assets/images/java-logo-vert-blk.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel " src="https://www.britefish.net/wp-content/uploads/2019/07/logo-c-1.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel " src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="Forth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "100px", width: "100px"}} className="d-block carousel " src="https://www.php.net/images/meta-image.png" alt="Sixth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
