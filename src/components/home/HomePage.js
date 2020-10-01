import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import CharacterGrid from "../common/characters/CharacterGrid";
import axios from 'axios'
import SelectInput from "../common/SelectInput";
import CardImg from "../../img/card-img.jpg";

const HomePage = () => {

    const [items, setItems] = useState([])
    const [groups, setGroups] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `${process.env.REACT_APP_API_URL}/cards`
            )
            setItems(result.data)

            const resultGroup = await axios(
                `${process.env.REACT_APP_API_URL}/groups`
            )
            setGroups(resultGroup.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <div className="home-page">

            <div>
                <div className="dashboard-wrapper">
                    <div className="container-fluid dashboard-content">
                        <div className="row">
                            <div className="col-xl-10">


                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="page-header" id="top">
                                            <h2 className="pageheader-title">Cards </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* grid-view */}
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
                                                            <a href={CardImg} download> <span className="badge badge-info">v4.1</span></a>
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


                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br />

        </div>
    )
}

export default HomePage;