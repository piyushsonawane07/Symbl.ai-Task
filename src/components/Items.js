import React, { Component } from 'react'
import ItemCard from './ItemCard';
import BreadImage from '../bread.jpg'
import './items.css'

export default class Items extends Component {

    data = [
        {
            "id": 1,
            "name": "Item 1"
        },
        {
            "id": 2,
            "name": "Item 2"
        },
        {
            "id": 3,
            "name": "Item 3"
        },
        {
            "id": 4,
            "name": "Item 4"
        }
    ]

    constructor() {
        super();
        this.state = {
            data: this.data
        }
    }



    render() {
        return (
            <>

                <div className='mt-5 mb-4'>
                    <h2 className='ms-5 fw-bold'>Symbl.ai Tasks</h2>
                </div>

                <div className='container recipe'>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='ms-5 mt-5 pt-4 fw-bold head'>Peanut Butter-Jelly Sandwich</h2>
                            <div className='mt-4 pb-5'>
                                <img className='img' src={BreadImage} alt=''/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 pt-5 mb-4">

                            <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingZero">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseZero" aria-expanded="true" aria-controls="panelsStayOpen-collapseZero">
                                            Ingredients
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseZero" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingZero">
                                        <div className="accordion-body">
                                        2 tbsp Mixed Fruit Jam / Jelly
                                        <br />
                                        2 Slices Bread
                                        <br />
                                        1 tbsp Peanut Butter
                                        <br />
                                        (tbsp - tablespoon)
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            Step 1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            Take bread and Spread peanut butter on one slice of bread and mix fruit jam on another slice of bread. Place on top of peanut butter, jelly-side down. Spread 1 tbsp butter onto the outside of each slice of bread. Join them together and keep it on the side.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Step 2
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            Heat non-stick pan (on medium flame) add butter and cook sandwiches from both sides until golden brown in color.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Step 3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            Cut the bread into pieces and serve hot.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className='container'>
                    <div className='row mt-5 pt-2'>
                        {
                            this.state.data.map((ele) => {
                                return (
                                    <div className='col col-md-4'>
                                        <ItemCard id={ele.id} name={ele.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

