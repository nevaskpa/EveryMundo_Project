import React from "react";
import Create from "./Create";
import ExportCSV from "./ExportCSV";

function Header({ data, setData }) {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">Currency Manager</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Create data={data} setData={setData} />
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <ExportCSV data={data} />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
