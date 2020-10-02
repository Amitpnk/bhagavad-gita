import React from 'react'
import {Route, Link } from "react-router-dom";
import CardImg from "../../../img/card-img.jpg";

const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
    <div className="card card-figure has-hoverable">
        <figure className="figure">
            <div className="figure-img">
                <img className="img-fluid" src={CardImg}
                    alt="card-img" />
                <div className="figure-description">
                    <h6 className="figure-title"> Chapter 4, Verse 1 </h6>
                    <p className="text-muted mb-0">
                        <small>śhrī bhagavān uvācha
                        imaṁ vivasvate yogaṁ proktavān aham avyayam
                        vivasvān manave prāha manur ikṣhvākave ’bravīt.
                </small>
                    </p>
                </div>
                <div className="figure-action">
                    <a href="#" className="btn btn-block btn-sm btn-primary">Meaning</a>
                </div>
            </div>
            <figcaption className="figure-caption">
                <ul className="list-inline d-flex text-muted mb-0">

                    <li className="list-inline-item text-truncate mr-auto">
                        <a href={CardImg} download> <span className="badge badge-info">BG 4.1</span></a>
                    </li>
                    <li className="list-inline-item ">
                        <a href="#"> <span><i
                            className="fa fa-star "></i></span></a>
                    </li>
                    <li className="list-inline-item">
                        <a href={CardImg} download> <span><i
                            className="fa  fa-share-alt "></i></span></a>
                    </li>
                    <li className="list-inline-item">
                        <a href={CardImg} download> <span><i
                            className="fa  fa-download "></i></span></a>
                    </li>
                </ul>
            </figcaption>
        </figure>

    </div>

</div>
  )
}

export default CharacterItem
