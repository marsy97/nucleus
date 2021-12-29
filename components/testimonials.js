import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import styles from "./tst.module.scss";

export default class Testimonials extends Component {
  render() {
    return (
        <Carousel className={styles.wrapper}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <Image src="/shirley.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Its freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <Image src="/daniel.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <Image src="/theo.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              Im on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}