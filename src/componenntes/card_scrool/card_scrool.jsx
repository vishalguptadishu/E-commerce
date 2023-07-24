import Carousel from 'react-bootstrap/Carousel';
import "./card_scrool.css"
import { Container } from 'react-bootstrap';

const Card_scrool =()=>{
    return (
      <Container>
          <Carousel >
            <Carousel.Item>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_5.png" class=" ma-5 w-50"  alt="..."/>
             <img src='https://preview.colorlib.com/theme/coloshop/images/product_6.png' class=" ma-5 w-50" />
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" class=" ma-5 w-50"  alt="..."/>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_7.png" class=" ma-5 w-50"  alt="..."/>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" class=" ma-5 w-50" alt="..."/>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" class=" ma-5 w-50"  alt="..."/>
            </Carousel.Item>
          </Carousel>
          </Container>
        )
          }
export default Card_scrool;
