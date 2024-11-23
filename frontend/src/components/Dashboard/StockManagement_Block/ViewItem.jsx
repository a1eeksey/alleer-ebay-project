import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import StockItemContext from "../../../context/StockItemContext";
import { useAuthContext } from '../../../hooks/useAuthContext'

// Icons
import roundPlus from "../../../assets/icons/roundPlusWhite.svg";
import arrowLeft from "../../../assets/icons/arrow-square-left.svg";

function ViewItem({ pageTitle }) {
    const { user } = useAuthContext()

  const { editItem, generateSKU, getItemById } = useContext(StockItemContext);
  const { itemId } = useParams();
  const [isRevising, setIsRevising] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [regularPrice, setRegularPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [stockAmount, setStockAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [dimensions, setDimensions] = useState("");
  
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const selectedItem = await getItemById(user.email, itemId);
        console.log(selectedItem);
  
        if (selectedItem) {
          setTitle(selectedItem.title || "");
          setDescription(selectedItem.description || "");
          setImages(selectedItem.images || []);
          setRegularPrice(selectedItem.regularPrice || 0);
          setSalePrice(selectedItem.salePrice || 0);
          setStockAmount(selectedItem.stockAmount || 0);
          setCategory(selectedItem.category || "");
          setDimensions(selectedItem.dimensions || "");
        } else {
          console.error("Item not found");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
  
    fetchItem();
  }, [itemId, getItemById, user.email]);

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

    const revisedItem = {
      id: itemId,
      title,
      description,
      images,
      regularPrice,
      salePrice,
      stockAmount,
      category,
      dimensions,
      SKU: generateSKU(title),
    };

    editItem(user.email, revisedItem);
    
    navigate("/dashboard/dashboard/stock-management");
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const imageURLs = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageURLs].slice(0, 10)); // Allow max 10 images
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Generate placeholders to fill up to 10 slots
  const placeholderCount = 10 - images.length;
  const placeholders = Array(placeholderCount).fill(null);

  return (
    <section>
      <Link
        to={"/dashboard/dashboard/stock-management"}
        className="go-back-btn d-flex align-items-center gap-2"
      >
        <img src={arrowLeft} alt="" />
      </Link>
      <div className="d-flex align-items-center justify-content-between my-3">
        <h4 className="mb-0">Item data:</h4>
        <button
          className="add-new-task btn btn-primary d-flex align-items-center gap-1"
          type="button"
          onClick={handleSubmit}
        >
          <p className="my-0">Revise</p>
          <p className="my-0 d-none d-md-flex">this</p>
          <p className="my-0">item</p>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="d-flex row">
            <div className="col-lg-8">
                <div className="mb-3">
                    <h5 className="form-label" htmlFor="Title">
                        Title
                    </h5>
                    <input
                        className={`form-control ${titleError ? "is-invalid" : ""}`}
                        id="Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError && <div className="invalid-feedback">Title is required.</div>}
                    </div>
                    <div className="mb-0">
                    <h5 className="form-label" htmlFor="Description">
                        Description
                    </h5>
                    <textarea
                        className={`form-control ${descriptionError ? "is-invalid" : ""}`}
                        id="Description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {descriptionError && (
                        <div className="invalid-feedback">Description is required.</div>
                    )}
                    </div>

                    <div className="my-3">
                    <h5 className="form-label" htmlFor="Images">
                        Images
                    </h5>
                    <input
                        className="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple
                        onChange={handleImageChange}
                        accept="image/*"
                    />

                    <div className="image-previews mt-3 d-flex flex-wrap gap-2">
                        {/* Show the uploaded images */}
                        {images.map((image, index) => (
                        <div key={index} className="image-preview position-relative">
                            <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="img-thumbnail"
                            style={{ width: "140px", height: "140px", objectFit: "cover" }}
                            />
                            <div className="closebtn-container">
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="btn-close"
                                    aria-label="Close"
                                ></button>
                            </div>
                        </div>
                        ))}

                        {/* Show the placeholders if less than 10 images */}
                        {placeholders.map((_, index) => (
                        <div
                            key={`placeholder-${index}`}
                            className="image-placeholder img-thumbnail"
                            style={{
                            width: "140px",
                            height: "140px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px dashed #ccc",
                            }}
                        >
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="my-5">
                                <h5 className="form-label" htmlFor="Inventory">Inventory</h5>
                                <div className="inventory-container mt-3 d-flex flex-row">  
                                <ul class="inventory-table nav fs-9 d-flex flex-column" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation"><a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="false" tabindex="-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag me-sm-2 fs-4 nav-icons"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                        Pricing
                                    </a></li>
                                    <li class="nav-item mid-item" role="presentation"><a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package me-sm-2 fs-4 nav-icons"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                        Restock
                                    </a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false" tabindex="-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock me-sm-2 fs-4 nav-icons"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        Advanced
                                    </a></li>
                                </ul>
                                <div class="tab-content mt-2 mx-5" id="myTabContent">
                                    <div class="tab-pane fade" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="d-flex gap-4">
                                            <div>
                                                <label className="form-label" htmlFor="Title">
                                                    Regular price
                                                </label>
                                                <input
                                                    className={`form-control`}
                                                    type="number"
                                                    value={regularPrice}
                                                    onChange={(e) => setRegularPrice(e.target.value)}
                                                />
                                            </div>

                                            <div>
                                                <label className="form-label" htmlFor="Title">
                                                    Sale price
                                                </label>
                                                <input
                                                    className={`form-control`}
                                                    type="number"
                                                    value={salePrice}
                                                    onChange={(e) => setSalePrice(e.target.value)}
                                                />
                                            </div>
                                    </div>
                                    </div>

                                    <div class="tab-pane fade active show" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="d-flex gap-4">
                                                <div>
                                                    <label className="form-label" htmlFor="Title">
                                                        Stock Amount
                                                    </label>
                                                    <input
                                                        className={`form-control`}
                                                        type="number"
                                                        value={stockAmount}
                                                        onChange={(e) => setStockAmount(e.target.value)}
                                                    />
                                                </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="d-flex gap-4">
                                            <div>
                                                <label className="form-label" htmlFor="Title">
                                                    No advanced properties available for this item
                                                </label>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>

            <div className="create-item-rightbar pt-2 col-lg-4">
                <div className="rightbar-card mt-4">
                    <div className="rightbar-card_body">
                        <h5>Organize</h5>

                        <div className="mt-3">
                            <label className="form-label" htmlFor="Category">
                                Category
                            </label>
                            <select
                            className="form-select"
                            aria-label="Category select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Sporting Goods">Sporting Goods</option>
                            <option value="Toys & Hobbies">Toys & Hobbies</option>
                            <option value="Collectibles & Art">Collectibles & Art</option>
                            <option value="Health & Beauty">Health & Beauty</option>
                            <option value="Motors">Motors</option>
                            <option value="Books, Movies & Music">Books, Movies & Music</option>
                            <option value="Business & Industrial">Business & Industrial</option>
                            </select>
                        </div>

                        <div className="py-3">
                            <label className="form-label" htmlFor="Category">
                                Dimensions
                            </label>
                            <input
                                className={`form-control w-75`}
                                type="text"
                                value={dimensions}
                                onChange={(e) => setDimensions(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
    </section>
  );
}

export default ViewItem;
