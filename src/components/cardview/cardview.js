import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const CardView = () => {

    const [item, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();


    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `${process.env.REACT_APP_API_URL}/cards/${id}`
            )
            setItems(result.data)
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
                                    <h2 className="pageheader-title">&nbsp; </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h2 className="pageheader-title text-center">{item.name}</h2>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                            <div className="col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center">
                                <h3 className="text-center">{item.description}</h3>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h3 className="pageheader-title text-center"> <u> Synonyms</u></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                            <div className="col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center">
                                <h3 className="text-center">{item.synonmys}</h3>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header" id="top">
                                    <h3 className="pageheader-title text-center"> <u> Meaning</u></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                            <div className="col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center">
                                <h3 className="text-center">{item.meaning}</h3>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <h3 className="text-center"> &nbsp; </h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-right">

                            </div>
                            <div className="col-xl-6  col-sm-6  col-lg-6 col-md-6 col-6 text-center">
                                <button type="submit" className="btn btn-primary">
                                    Previous
                                </button> <button type="submit" className="btn btn-primary">
                                    Next
                                </button>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardView;
