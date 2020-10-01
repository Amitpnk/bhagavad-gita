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


        <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
                <div className="row">
                    <div className="col-xl-12">


                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h2 className="pageheader-title">Cards </h2>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="needs-validation" novalidate>
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                                    <label for="validationCustom01">Solution</label>
                                                    <select class="form-control" id="validationCustom01">
                                                        <option>Choose solution to your problem</option>
                                                    </select>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                                    <label for="validationCustom02">Search</label>
                                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Search verses | sloka | keyword" />
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                </div>
                                                </div>

                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <div class="pills-regular">
                                        <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="home" aria-selected="true">Tab#1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="profile" aria-selected="false">Tab#2 <span class="badge badge-primary badge-pill">14</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="contact" aria-selected="false">Tab#3 <span class="badge badge-primary badge-pill">14</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* grid-view */}
                            <CharacterGrid isLoading={isLoading} items={items.filter(v => {
                                if (v.name.toLowerCase().indexOf(query) >= 0 || v.description.toLowerCase().indexOf(query) >= 0) {
                                    return true;
                                }
                                return false;
                            })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;