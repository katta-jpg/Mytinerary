import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCitys } from "../actions/cityFetch";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  CarouselIndicators,
  Container,
  Row,
  Col
} from "reactstrap";
/* images */

const CarouselImg = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const items = [];

  if (!props.citys.length) {
    props.getCitys();
  }
  if (props.citys.length) {
    var num = -1;
    for (var i = 0; i < 3; i++) {
      const arr = [];
      for (var j = 0; j < 4; j++) {
        num++;
        const obj = {
          src: props.citys[num].img,
          alt: props.citys[num].city,
          caption: props.citys[num].city
        };
        arr.push(obj);
      }

      items.push(arr);
    }
  }
  const slides = items.map((g, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <Container>
          <Row>
            {g.map((image, index) => {
              return (
                <Col xs={{ size: 6 }} key={index} className="p-1">
                  <Link
                    to={{
                      pathname: `/itinerary/${image.caption}`
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid w-100 rounded h-100"
                      style={{
                        filter: "brightness(80%)"
                      }}
                    />
                    <CarouselCaption
                      className="d-block"
                      captionText={image.caption}
                      captionHeader={image.caption}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items.map(group => ({ src: group[0].src }))}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
const mapStateToProps = reducers => {
  return reducers.cityReducer;
};
export default connect(
  mapStateToProps,
  { getCitys }
)(CarouselImg);
