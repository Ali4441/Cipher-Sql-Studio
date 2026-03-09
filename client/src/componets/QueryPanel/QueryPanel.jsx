import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./QueryPanel.scss";
import axios from "axios";

const QueryPanel = ({ setResults, setLoading, setError }) => {
  const [query, setQuery] = useState("SELECT * FROM employees;");

  const runQuery = async () => {
    setLoading(true);
    setError(null);

    try {

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/query`, { query });

      const data = res.data;

      if (data.error) {
        setError(data.error);
        setResults([]);
      } else {
        setResults(Array.isArray(data) ? data : [data]);
      }
    } catch (err) {

      setError(err.response?.data?.error || "Server error");
      setResults([]);
    }

    setLoading(false);
  };

  return (
    <div className="query-panel">
      <div className="query-header">SQL Editor</div>

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