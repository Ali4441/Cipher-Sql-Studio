import React from "react";
import "./ResultPanel.scss";

const ResultPanel = ({ results = [], loading, error }) => {


  const columns = results.length > 0 ? Object.keys(results[0]) : [];

  return (
    <div className="result-panel">

      <div className="result-header">
        Results
      </div>

      <div className="result-body">

        {loading && <div className="status">Running query...</div>}

        {error && <div className="error">{error}</div>}

        {!loading && !error && results.length === 0 && (
          <div className="result-empty">
            Run a query to see results
          </div>
        )}

        {!loading && results.length > 0 && (

          <table className="result-table">

            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col}>{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>

        )}

      </div>

    </div>
  );
};

export default ResultPanel;