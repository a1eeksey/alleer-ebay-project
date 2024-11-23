import React, { useState, useContext, useEffect } from "react";
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Link } from "react-router-dom";

import StockItemContext from "../../../context/StockItemContext";
import roundPlus from "../../../assets/icons/roundPlusWhite.svg";

function StockContainer({ pageTitle }) {
  const { user } = useAuthContext();
  const { items, fetchItems, deleteItem, generateQR } = useContext(StockItemContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [qrCodes, setQrCodes] = useState({});
  const [visibleQR, setVisibleQR] = useState(null);

  useEffect(() => {
    fetchItems(user.email);
  }, []);

  const truncateDescription = (description, length) => {
    return description.length > length ? description.slice(0, length) + "..." : description;
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleBulkDelete = () => {
    selectedItems.forEach((id) => deleteItem(user.email, id));
    setSelectedItems([]);

  };

  const handleGenerateQRCode = async (id) => {
    try {
      const qrData = await generateQR(id); 
      setQrCodes((prevCodes) => ({ ...prevCodes, [id]: qrData }));
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const toggleQRCodeVisibility = (id) => {
    setVisibleQR((prev) => (prev === id ? null : id));
  };

  const handleCloseQR = (e) => {
    if (e.target.classList.contains('qr-overlay')) {
      setVisibleQR(null);
    }
  };

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex justify-content-between">
          <button
            className={`btn btn-sm ${
              selectedItems.length === 0 ? "btn-pale-pink" : "btn-danger"
            }`}
            type="button"
            onClick={handleBulkDelete}
            disabled={selectedItems.length === 0}
          >
            Delete
          </button>
        </div>
        <Link
          to={"/dashboard/dashboard/add-item"}
          className="add-new-task btn btn-primary d-flex align-items-center gap-1"
          type="button"
        >
          <img src={roundPlus} alt="" />
          <p className="my-0">Add</p>
          <p className="my-0 d-none d-md-flex">new</p>
          <p className="my-0">item</p>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">SKU</th>
            <th className="d-flex justify-content-center" scope="col">QR</th>
          </tr>
        </thead>

        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </td>
                <th scope="row" className="index">
                  {index + 1}
                </th>
                <td>
                  <Link to={`/dashboard/dashboard/view-item/${item.id}`} className="item-link">
                    {item.title}
                  </Link>
                </td>
                <td>{truncateDescription(item.description, 40)}</td>
                <td>{item.SKU}</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="qrcode-open_btn btn btn-primary d-flex align-items-center justify-content-center"
                    onClick={() => {
                      if (!qrCodes[item.id]) {
                        handleGenerateQRCode(item.id);
                      }
                      toggleQRCodeVisibility(item.id);
                    }}
                  >
                    {visibleQR === item.id ? "Hide QR" : "Show QR"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No items available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* If visibleQR is set, show the QR code modal */}
      {visibleQR && qrCodes[visibleQR] && (
        <div className="qr-overlay" onClick={handleCloseQR}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={qrCodes[visibleQR].largeQRCode}
              alt="Large QR"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default StockContainer;
