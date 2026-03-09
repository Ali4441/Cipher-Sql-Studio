import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./QueryPanel.scss";

const QueryPanel = ({ setResults, setLoading, setError }) => {

  const [query, setQuery] = useState("SELECT * FROM employees;");

  const runQuery = async () => {

    setLoading(true);
    setError(null);

    try {

      const res = await fetch("http://localhost:5000/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      });


      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setResults([]);
      } else {
        setResults(Array.isArray(data) ? data : [data]);
      }
    } catch (err) {

      setError("Server error", err);
      setResults([]);

    }

    setLoading(false);
  };

  return (
    <div className="query-panel">

      <div className="query-header">
        SQL Editor
      </div>

      <Editor
        height="250px"
        defaultLanguage="sql"
        theme="vs-dark"
        value={query}
        onChange={(val) => setQuery(val)}
      />

      <div className="query-actions">
        <button className="run-btn" onClick={runQuery}>
          Run Query
        </button>
      </div>

    </div>
  );
};

export default QueryPanel;