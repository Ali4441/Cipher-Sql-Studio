import React, { useState } from "react";
import './SamplePanel.scss';

const SchemaCard = () => {
  const [view, setView] = useState("schema");

  const sampleData = [
    { id: 1, first: "Alice", last: "Smith", dept: "Engineering" },
    { id: 2, first: "Bob", last: "Johnson", dept: "Marketing" },
    { id: 3, first: "Carol", last: "Davis", dept: "Engineering" },
    { id: 4, first: "David", last: "Wilson", dept: "HR" },
    { id: 5, first: "Emma", last: "Brown", dept: "Engineering" }
  ];

  const columns = [
    { name: "id", type: "INTEGER" },
    { name: "first_name", type: "VARCHAR(50)" },
    { name: "last_name", type: "VARCHAR(50)" },
    { name: "department", type: "VARCHAR(50)" }
  ];

  return (
    <div className="schema-card">


      <div className="card-header">
        <span className="card-dot"></span>
        Schema & Data
      </div>


      <div className="table-tag">employees</div>


      <div className="toggle-buttons">

        <button
          className={view === "schema" ? "active" : ""}
          onClick={() => setView("schema")}
        >
          Schema
        </button>

        <button
          className={view === "sample" ? "active" : ""}
          onClick={() => setView("sample")}
        >
          Sample
        </button>

      </div>


      <div className="card-body">

        {view === "schema" && (
          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {columns.map((col, i) => (
                <tr key={i}>
                  <td>{col.name}</td>
                  <td>{col.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {view === "sample" && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>FIRST_NAME</th>
                <th>LAST_NAME</th>
                <th>DEPT</th>
              </tr>
            </thead>

            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.first}</td>
                  <td>{row.last}</td>
                  <td>{row.dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
};

export default SchemaCard;