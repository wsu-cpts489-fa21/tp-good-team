import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RoundsTable extends React.Component {
  renderTable = () => {
    const table = [];
    for (let r = 0; r < this.props.rounds.length; ++r) {
      table.push(
        <tr key={r}>
          <td>{this.props.rounds[r].date.substring(0, 10)}</td>
          <td>{this.props.rounds[r].course}</td>
          <td>
            {Number(this.props.rounds[r].strokes) +
              Number(this.props.rounds[r].minutes) +
              ":" +
              (this.props.rounds[r].seconds < 10
                ? "0" + this.props.rounds[r].seconds
                : this.props.rounds[r].seconds) +
              " (" +
              this.props.rounds[r].strokes +
              " in " +
              this.props.rounds[r].minutes +
              ":" +
              (this.props.rounds[r].seconds < 10
                ? "0" + this.props.rounds[r].seconds
                : this.props.rounds[r].seconds) +
              ")"}
          </td>
          <td>
            <button
              id="edit"
              onClick={
                this.props.menuOpen
                  ? null
                  : () => this.props.initiateEditRound(r)
              }
            >
              <FontAwesomeIcon icon="eye" />
              <FontAwesomeIcon icon="edit" />
            </button>
          </td>
          <td>
            <button
              id="trash"
              onClick={
                this.props.menuOpen
                  ? null
                  : () => this.props.initiateDeleteRound(r)
              }
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </td>
        </tr>
      );
    }
    return table;
  };

  renderNewBadgeToast = () => {
    if (!this.props.newBadgeToast) {
      return null;
    } else {
      return (
        <div
          id="badgeUnlocked"
          className="toast-container"
          role="alert"
          aria-atomic="true"
          aria-live="assertive"
        >
          <p id="newBadgeToast" className="toast-text centered">
            Congratulations! You've unlocked a new badge!
          </p>
          <button
            id="accountCreatedClose"
            type="button"
            className="btn-close toast-close"
            aria-label="Close"
            onClick={() => this.props.toggleRenderNewBadgeToast()}
          ></button>
        </div>
      );
    }
  };

  render() {
    return (
      <div
        id="roundsModeTab"
        className="mode-page"
        role="tabpanel"
        aria-label="Rounds Tab"
        tabIndex="0"
      >
        {this.renderNewBadgeToast()}

        <h1 className="mode-page-header">Rounds</h1>
        <table id="roundsTable" className="table table-hover caption-top">
          <caption id="roundsTableCaption" aria-live="polite">
            {"Table displaying " +
              this.props.rounds.length +
              " speedgolf round" +
              (this.props.rounds.length !== 1 ? "s" : "")}
          </caption>
          <thead className="table-light">
            <tr>
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                <button
                  className="btn bg-transparent table-sort-btn"
                  aria-label="Sort ascending by date"
                >
                  <FontAwesomeIcon icon="sort" />
                </button>
                Date
              </th>
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                <button
                  className="btn bg-transparent table-sort-btn"
                  aria-label="Sort ascending by course"
                >
                  <FontAwesomeIcon icon="sort" />
                </button>
                Course
              </th>
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                <button
                  className="btn bg-transparent table-sort-btn"
                  aria-label="Sort ascending by score"
                >
                  <FontAwesomeIcon icon="sort" />
                </button>
                Score
              </th>
              <th scope="col" className="cell-align-middle">
                View/Edit...
              </th>
              <th scope="col" className="cell-align-middle">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.rounds === null || this.props.rounds.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <i>No rounds logged</i>
                </td>
              </tr>
            ) : (
              this.renderTable()
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RoundsTable;
