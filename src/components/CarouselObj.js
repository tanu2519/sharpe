import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-200 im1"
          src="images/1.jpg"
          alt="First slide"
          height="400px"
          width="200px"
        />
        <Carousel.Caption className='borderme'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/2.jfif"
          alt="2 slide"
          height="400px"
          width="200px"
        />
        <Carousel.Caption className='borderme'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/3.jfif"
          alt="3 slide"
          height="400px"
          width="200px"
        />
        <Carousel.Caption className='borderme'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;