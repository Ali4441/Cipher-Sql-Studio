import React, { useState } from "react";
import QueryPanel from "../QueryPanel/QueryPanel";
import ResultPanel from "../ResultPanel/ResultPanel";

const SQLPracticePage = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (

    <div className="sql-layout">

      <QueryPanel
        setResults={setResults}
        setLoading={setLoading}
        setError={setError}
      />

      <ResultPanel
        results={results}
        loading={loading}
        error={error}
      />

    </div>

  );
};

export default SQLPracticePage;