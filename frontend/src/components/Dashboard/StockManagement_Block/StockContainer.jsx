import React, {useState, useContext} from "react";
import PageTitle from "../PageTitle";
import { Link } from 'react-router-dom';
import CreateItem from "./CreateItem";

// Context
import StockItemContext from "../../../context/StockItemContext";

// Icons
import roundPlus from '../../../assets/icons/roundPlusWhite.svg'

function StockContainer({pageTitle}) {
  const {items} = useContext(StockItemContext);

  const truncateDescription = (description, length) => {
    return description.length > length ? description.slice(0, length) + "..." : description;
  };

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
          <div class="d-flex justify-content-between">
              <select class="form-select form-select-sm" aria-label="Bulk actions">
                <option selected="selected">Bulk actions</option>
                <option value="Delete">Delete</option>
                <option value="Archive">Archive</option>
              </select>
              <button class="btn btn-phoenix-danger btn-sm ms-2" type="button">Apply</button>
          </div>
          <Link to={"/dashboard/dashboard/add-item"} className="add-new-task btn btn-primary d-flex align-items-center gap-1" type="button">
            <img src={roundPlus} alt="" /> 
            <p className="my-0">Add</p>
            <p className="my-0 d-none d-md-flex">new</p>
            <p className="my-0">item</p>
          </Link>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">SKU</th>
          </tr>
        </thead>
        
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{truncateDescription(item.description, 40)}</td>
                <td>{item.SKU}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No items available
              </td>
            </tr>
          )}
        </tbody>
      </table>

                    
    </section>
  );
}

export default StockContainer;
