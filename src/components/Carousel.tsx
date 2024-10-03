import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/projects/e-gunpla/1.png";
import img2 from "../assets/images/projects/e-gunpla/2.png";
import img3 from "../assets/images/projects/e-gunpla/3.png";
import img4 from "../assets/images/projects/e-gunpla/4.png";

export default function UncontrolledExample() {
  function getImage() {
    return "https://picsum.photos/200" + Math.floor(Math.random() * 10);
  }

  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="Image" className="" />
        {/* <img src={getImage()} alt="Image" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img2} alt="Image" className="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} alt="Image" className="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img4} alt="Image" className="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
