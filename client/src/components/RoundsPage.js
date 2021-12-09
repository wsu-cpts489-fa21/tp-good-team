import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundsMode from "./RoundsMode.js";
import RoundsTable from "./RoundsTable.js";
import RoundForm from "./RoundForm.js";
import FloatingButton from "./FloatingButton.js";
import DeleteDialog from "./DeleteDialog.js";

class RoundsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: RoundsMode.ROUNDSTABLE,
      deleteId: -1,
      editId: -1,
      deleteDialogOpen: false,
    };
  }

  setMode = (newMode) => {
    this.setState({ mode: newMode });
  };

  initiateEditRound = (val) => {
    this.setState(
      { editId: val, mode: RoundsMode.EDITROUND },
      this.props.toggleModalOpen
    );
  };

  initiateDeleteRound = (val) => {
    console.log("initiate delete round");
    this.setState({ deleteId: val, deleteDialogOpen: true });
  };

  cancelDeleteRound = () => {
    this.setState({
      deleteDialogOpen: false,
    });
  };
  confirmDeleteRound = async () => {
    const res = await this.props.deleteRound(this.state.deleteId);
  };

  render() {
    if (this.state.deleteDialogOpen) {
      return (
        <>
          <div class="space">
            <DeleteDialog
              confirmDeleteRound={this.confirmDeleteRound}
              cancelDeleteRound={this.cancelDeleteRound}
              deleteDialogOpen={this.deleteDialogOpen}
              deleteId={this.state.deleteId}
            />
          </div>
        </>
      );
    }
    switch (this.state.mode) {
      case RoundsMode.ROUNDSTABLE:
        return (
          <>
            <RoundsTable
              rounds={this.props.rounds}
              initiateDeleteRound={this.initiateDeleteRound}
              deleteRound={this.props.deleteRound}
              deleteId={this.state.deleteId}
              initiateEditRound={this.initiateEditRound}
              updateRound={this.props.updateRound}
              setMode={this.setMode}
              toggleModalOpen={this.props.toggleModalOpen}
              menuOpen={this.props.menuOpen}
            />
            <FloatingButton
              icon="calendar"
              label={"Log Round"}
              menuOpen={this.props.menuOpen}
              action={() =>
                this.setState(
                  { mode: RoundsMode.LOGROUND },
                  this.props.toggleModalOpen
                )
              }
            />
            {this.state.deleteDialogOpen ? (
              <DeleteDialog
                deleteRound={this.props.deleteRound}
                deleteDialogOpen={this.deleteDialogOpen}
                deleteId={this.state.deleteId}
              />
            ) : null}
          </>
        );
      case RoundsMode.LOGROUND:
        return (
          <RoundForm
            mode={this.state.mode}
            roundData={null}
            saveRound={this.props.addRound}
            incrementRounds={this.props.incrementRounds}
            setMode={this.setMode}
            toggleModalOpen={this.props.toggleModalOpen}
          />
        );
      case RoundsMode.EDITROUND:
        return (
          <RoundForm
            mode={this.state.mode}
            editId={this.state.editId}
            roundData={this.props.rounds[this.state.editId]}
            saveRound={this.props.updateRound}
            setMode={this.setMode}
            toggleModalOpen={this.props.toggleModalOpen}
          />
        );
    }
  }
}

export default RoundsPage;
