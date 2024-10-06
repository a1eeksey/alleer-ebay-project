import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import StockItemContext from "../../../context/StockItemContext";

// Icons
import roundPlus from '../../../assets/icons/roundPlusWhite.svg'
import arrowLeft from '../../../assets/icons/arrow-square-left.svg'

function CreateItem({ pageTitle }) {
    const { addItem, generateSKU } = useContext(StockItemContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false);
        setDescriptionError(false);

        if (title.trim() === "") {
            setTitleError(true);
        }
        if (description.trim() === "") {
            setDescriptionError(true);
        }

        if (title.trim() === "" || description.trim() === "") {
            return;
        }

        const newItem = {
            id: String(new Date().getTime()),
            title,
            description,
            SKU: generateSKU(title)
        };
    
        addItem(newItem);

        navigate("/dashboard/dashboard/stock-management");

        setTitle("");
        setDescription("");
    };

    return (
        <section>
            <Link to={'/dashboard/dashboard/stock-management'} className="go-back-btn d-flex align-items-center gap-2">
                <img src={arrowLeft} alt="" />
            </Link>
            <div className="d-flex align-items-center justify-content-between my-3">
                <h5 className="mb-0">Item data:</h5>
                <button
                    className="add-new-task btn btn-primary d-flex align-items-center gap-1"
                    type="button"
                    onClick={handleSubmit}
                >
                    <img src={roundPlus} alt="" /> 
                    <p className="my-0">Add</p>
                    <p className="my-0 d-none d-md-flex">this</p>
                    <p className="my-0">item</p>
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="Title">Title</label>
                    <input
                        className={`form-control ${titleError ? 'is-invalid' : ''}`}
                        id="Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError && <div className="invalid-feedback">Title is required.</div>}
                </div>
                <div className="mb-0">
                    <label className="form-label" htmlFor="Description">Description</label>
                    <textarea
                        className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                        id="Description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {descriptionError && <div className="invalid-feedback">Description is required.</div>}
                </div>

                <div className="mt-5">
                    <h5>Inventory</h5>
                    <div className="mt-3 d-flex flex-row">  
                      <ul class="nav nav-underline fs-9" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation"><a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="false" tabindex="-1">Pricing</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="true">Restock</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false" tabindex="-1">Shipping</a></li>
                      </ul>
                      <div class="tab-content mt-2 mx-4" id="myTabContent">
                        <div class="tab-pane fade" id="tab-home" role="tabpanel" aria-labelledby="home-tab">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.</div>
                        <div class="tab-pane fade active show" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.</div>
                        <div class="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</div>
                      </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CreateItem;
