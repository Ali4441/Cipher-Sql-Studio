import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import './HintPanel.scss'
function AIHintPanel({ question }) {
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);

  const getHint = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/get-sql-hint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();
      setHint(data.hint);
    } catch (error) {
      setHint("Failed to load hint:", error);
    }

    setLoading(false);
  };

  return (
    <div className="result-panel">
      <div className="panel-header">

        <span>AI Hints</span>
      </div>

      <div className="panel-content">
        {hint ? (
          <p>{hint}</p>
        ) : (
          <>
            <LuBrain size={40} color="#9ca3af" />
            <p>
              Stuck on the query? Get a nudge <b>in the right direction</b> —
              not the answer.
            </p>
          </>
        )}
      </div>

      <div className="panel-footer">
        <button onClick={getHint} disabled={loading}>
          <FaLightbulb style={{ marginRight: "6px" }} />
          {loading ? "Generating..." : "Get Hint"}
        </button>
      </div>
    </div>
  );
}

export default AIHintPanel;