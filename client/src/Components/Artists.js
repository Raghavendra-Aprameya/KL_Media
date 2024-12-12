import React from "react";
import download from "../media/download.jpeg";
import niroop from "../media/Niroop-Mohan.jpeg";
import sonu from "../media/Sonu-Venugopal.JPG";
import pavan from "../media/Pavan-Venugopal.JPG";
export default function Artists() {
  return (
    <div>
      <h1>Collaborative Artists</h1>
      <div className="flex gap-44">
        <div className="card w-[222px] h-[378px] ml-32 relative z-10 shadow-lg">
          <img src={sonu} className="card-img-top" alt="Artists pic" />
          <div className="card-body">
            <h5 className="card-title">Sonu Venugopal</h5>
            <p className="card-text">
              A seasoned radio professional and voice artist, Sonu has hosted top-rated radio shows in both Hindi and Kannada. Her impeccable Uttara Karnataka style infuses her slice-of-life comedy, which has been watched 4M+ times online and sold out live shows across India and the UK.
            </p>
            <a href="https://www.instagram.com/sonuvenugopaal/" target="_blank" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>

        <div className="card w-[222px] h-[378px] relative z-10 shadow-lg">
          <img src={niroop} className="card-img-top" alt="Artists pic" />
          <div className="card-body">
            <h5 className="card-title">Niroop Mohan</h5>
            <p className="card-text">
              Niroop Mohan, the talented Kannada stand-up comedian. His performances are a delightful blend of quick wit, relatable anecdotes, and infectious laughter.Niroop leaves a lasting impression on audiences, making him a rising star in the comedy scene.
            </p>
            <a href="https://www.instagram.com/niroop.mohan/" target="_blank" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>

        <div className="card w-[222px] h-[378px] relative z-10 shadow-lg">
          <img src={pavan} className="card-img-top" alt="Artists pic" />
          <div className="card-body">
            <h5 className="card-title">Pavan Venugopal</h5>
            <p className="card-text">
              Pavan Venugopal, a talented Kannada stand-up comedian, has won hearts with his wit and humor. His performances blend life experiences and observations, making him a favorite among audiences. You can catch his hilarious acts on various platforms,
            </p>
            <a href="https://www.instagram.com/pavan4venugopal/" target="_blank" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
