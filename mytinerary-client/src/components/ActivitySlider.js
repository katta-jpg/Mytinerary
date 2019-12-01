import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const ActivitySlider = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  // eslint-disable-next-line
  const [items, setItems] = useState([]);

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

  async function getData() {
    try {
      const data = await axios.get(
        `http://localhost:5000/activities/${props.itineraryId}`
      );
      if (data.data.length !== 0) {
        for (var i = 0; i < data.data.length; i++) {
          const obj = {
            src: data.data[i].activity_img,
            alt: data.data[i].name,
            caption: data.data[i].name
          };
          items.push(obj);
        }
        console.log(items);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={"i" + index}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="img-fluid w-100 rounded"
          style={{ height: "200px", filter: "brightness(50%)" }}
          key={"img" + index}
        />
        <CarouselCaption
          className="d-block"
          captionText={item.caption}
          captionHeader={item.caption}
          key={"c" + index}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
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

export default ActivitySlider;
