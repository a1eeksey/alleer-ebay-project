import React from "react";
import PageTitle from "../PageTitle";

// CURRENTLY IN DEVELOPMENT

function StockContainer({pageTitle}) {
  return (
    <section>
      <div className="d-flex align-items-center justify-content-end">
      <div id="bulk-select-replace-element" className="w-100 mb-2 d-flex flex-row justify-content-between">
        <div class="d-flex justify-content-between" id="bulk-select-actions">
          <div class="d-flex"><select class="form-select form-select-sm" aria-label="Bulk actions">
              <option selected="selected">Bulk actions</option>
              <option value="Delete">Delete</option>
              <option value="Archive">Archive</option>
            </select><button class="btn btn-phoenix-danger btn-sm ms-2" type="button">Apply</button></div>
        </div>
        <button className="btn btn-phoenix-success btn-sm" type="button">
          <span>+</span>
          <span className="ms-1">New</span>
        </button>
      </div>
      <div className="ms-3 d-none" id="bulk-select-actions">
        <div className="d-flex">
          <select className="form-select form-select-sm" aria-label="Bulk actions">
            <option selected="selected">Bulk actions</option>
            <option value="Delete">Delete</option>
            <option value="Archive">Archive</option>
          </select>
          <button className="btn btn-phoenix-danger btn-sm ms-2" type="button">Apply</button>
        </div>
      </div>
    </div>

    <div
      id="tableExample"
      data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
    >
      <div className="table-responsive mx-n1 px-1">
        <table className="table table-sm border-top border-translucent fs-9 mb-0">
          <thead>
            <tr className="px-5">
              <th
                className="white-space-nowrap fs-9 align-middle ps-1"
                style={{ maxWidth: "20px", width: "18px" }}
              >
                <div className="form-check mb-0 fs-8">
                  <input
                    className="form-check-input"
                    id="bulk-select-example"
                    type="checkbox"
                    data-bulk-select='{"body":"bulk-select-body","actions":"bulk-select-actions","replacedElement":"bulk-select-replace-element"}'
                  />
                </div>
              </th>
              <th className="sort align-middle" data-sort="name">
                Name
              </th>
              <th className="sort align-middle" data-sort="email">
                Email
              </th>
              <th className="sort align-middle" data-sort="age">
                Age
              </th>
              <th className="sort text-end align-middle" scope="col">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="list" id="bulk-select-body">
            <tr>
              <td className="fs-9 align-middle">
                <div className="form-check mb-0 fs-8">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    data-bulk-select-row='{"name":"Anna","email":"anna@example.com","age":18}'
                  />
                </div>
              </td>
              <td className="align-middle ps-3 name">Anna</td>
              <td className="align-middle email">anna@example.com</td>
              <td className="align-middle age">18</td>
              <td className="align-middle white-space-nowrap text-end pe-0">
                <div className="btn-reveal-trigger position-static">
                  <button
                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    ...
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2">
                    <a className="dropdown-item" href="#!">View</a>
                    <a className="dropdown-item" href="#!">Export</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="fs-9 align-middle">
                <div className="form-check mb-0 fs-8">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    data-bulk-select-row='{"name":"Anna","email":"anna@example.com","age":18}'
                  />
                </div>
              </td>
              <td className="align-middle ps-3 name">Anna</td>
              <td className="align-middle email">anna@example.com</td>
              <td className="align-middle age">18</td>
              <td className="align-middle white-space-nowrap text-end pe-0">
                <div className="btn-reveal-trigger position-static">
                  <button
                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    ...
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2">
                    <a className="dropdown-item" href="#!">View</a>
                    <a className="dropdown-item" href="#!">Export</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-between-center pt-3 mb-3">
        <div className="pagination d-none">
          <li className="active">
            <button className="page" type="button" data-i="1" data-page="5">1</button>
          </li>
          <li>
            <button className="page" type="button" data-i="2" data-page="5">2</button>
          </li>
          <li>
            <button className="page" type="button" data-i="3" data-page="5">3</button>
          </li>
        </div>
      
      </div>
    </div>

                    
    </section>
  );
}

export default StockContainer;
