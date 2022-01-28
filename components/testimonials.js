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
          <Image alt="" src="/shirley.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Ivana Ivanić</h3>
            <h4>FITNESS TRENER</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tincidunt mauris sit amet molestie.
            </p>
          </div>
        </div>

        <div>
          <Image alt="" src="/daniel.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Ante Antić</h3>
            <h4>KLIJENT</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tincidunt mauris sit amet molestie.
            </p>
          </div>
        </div>

        <div>
          <Image alt="" src="/theo.png" width={150} height={150} />
          <div className={styles.myCarousel}>
            <h3>Tin Tin</h3>
            <h4>KLIJENT</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tincidunt mauris sit amet molestie.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}