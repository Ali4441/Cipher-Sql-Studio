import React from 'react'
import "./AssignmentsCard.scss"
const AssignmentsCard = ({ assignment, showPage }) => {
  return (
    <>
      <div
        className="assignment-card"
        onClick={() => showPage("attempt", assignment.id)}
      >

        <div className="card-header">
          <span className="card-id">#{assignment.id}</span>

          <span className={`difficulty ${assignment.difficulty}`}>
            {assignment.difficulty}
          </span>
        </div>

        <h3 className="card-title">{assignment.title}</h3>

        <p className="card-description">{assignment.description}</p>

        <div className="card-bottom">
          <div className="tags">
            {assignment.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <span className="tables">
            {assignment.tables} tables
          </span>
        </div>

      </div>
    </>
  )
}

export default AssignmentsCard
