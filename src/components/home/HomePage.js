import React, { useState, useEffect } from 'react'
import CharacterGrid from "../common/characters/CharacterGrid";
import axios from 'axios'
import SelectInput from "../common/SelectInput";

const HomePage = () => {

    const [items, setItems] = useState([])
    const [fullListItems, setFullListItems] = useState([])
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
            setFullListItems(result.data)
            const resultGroup = await axios(
                `${process.env.REACT_APP_API_URL}/groups`
            )
            setGroups(resultGroup.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);

        // setItems(fullListItems);
        const g = groups.filter(g => g.id === +value).map(x => x.cards);

        // const itemFilter = items.filter((x) => g[0].includes(x.id))

        value ?
            setItems(
                fullListItems.filter((x) => g[0].includes(x.id))
            ) : setItems(
                fullListItems
            );

        // this.setState(prevState => ({ counter: prevState.counter + 1 }));

        // setItems(prevCard => ({
        //     ...prevCard,
        //     [items]: itemFilter
        // }));
        console.log(items);
    }

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
                                                    <SelectInput
                                                        name="solutionId"
                                                        label="Solution"
                                                        defaultOption="Choose solution to your problem"
                                                        value={groups.id || ""}
                                                        options={groups.map(g => ({
                                                            value: g.id,
                                                            text: g.name
                                                        }))}
                                                        onChange={handleChange}
                                                    // error={errors.author}
                                                    />

                                                </div>
                                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                                    <label for="validationCustom02">Search</label>
                                                    {/* <input type="text" class="form-control" id="validationCustom02" placeholder="Search verses | sloka | keyword" /> */}


                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Search verses | sloka | keyword"
                                                        onChange={e => setQuery(e.target.value)}
                                                        value={query}
                                                    />


                                                    {/* <div class="valid-feedback">
                                                        Looks good!
                                                    </div> */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                <div className="page-header" id="top">
                                    <div class="pills-regular">
                                        <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#memorization" role="tab" aria-controls="memorization" aria-selected="false">For memorization <span class="badge badge-primary badge-pill">101</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">My favorite <span class="badge badge-primary badge-pill">0</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <CharacterGrid isLoading={isLoading}
                                // items={items.filter(v => {
                                //     if (v.name.toLowerCase().indexOf(query) >= 0
                                //         || v.description.toLowerCase().indexOf(query) >= 0
                                //         || v.meaning.toLowerCase().indexOf(query) >= 0
                                //         || v.code.toLowerCase().indexOf(query) >= 0
                                //     ) {
                                //         return true;
                                //     }
                                //     return false;
                                // })}
                                items={items}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;