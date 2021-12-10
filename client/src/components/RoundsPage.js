import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundsMode from "./RoundsMode.js";
import RoundsTable from "./RoundsTable.js";
import RoundForm from "./RoundForm.js";
import FloatingButton from "./FloatingButton.js";
import DeleteDialog from "./DeleteDialog.js";
import EarnBadges from "./EarnBadges.js";
import EarnBadgesBtn from "./EarnBadgesBtn.js";

class RoundsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: RoundsMode.ROUNDSTABLE,
      deleteId: -1,
      editId: -1,
      deleteDialogOpen: false,
      earnBadgesOpen: false,
      //TODO: Add state variables for: rendering Congrats Toast
      newBadgeToastOpen: false,
      newBadgeToast: false,
    };
  }

  //TODO:Add method to set variables responsible for rendering Congrats Toast

  //TODO: Add method to call this.props and await updating Badge

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

  backBtn = () => {
    this.setState({
      earnBadgesOpen: false,
    });
  };
  confirmDeleteRound = async () => {
    const res = await this.props.deleteRound(this.state.deleteId);
  };

  toggleRenderNewBadgeToast = () => {
    this.setState((prevState) => ({ newBadgeToast: !prevState.newBadgeToast }));
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

    if (this.state.earnBadgesOpen) {
      return (
        <>
          <div class="space">
            <EarnBadges cancelBtn={this.backBtn} />
          </div>
        </>
      );
    }
    switch (this.state.mode) {
      case RoundsMode.ROUNDSTABLE:
        return (
          <>
            <RoundsTable
              //TODO: Add aPROPriate props haha
              newBadgeToast={this.state.newBadgeToast}
              rounds={this.props.rounds}
              initiateDeleteRound={this.initiateDeleteRound}
              deleteRound={this.props.deleteRound}
              deleteId={this.state.deleteId}
              initiateEditRound={this.initiateEditRound}
              updateRound={this.props.updateRound}
              setMode={this.setMode}
              toggleModalOpen={this.props.toggleModalOpen}
              menuOpen={this.props.menuOpen}
              newBadgeToastOpen={this.state.newBadgeToastOpen}
              toggleRenderNewBadgeToast={this.toggleRenderNewBadgeToast}
            />
            <FloatingButton
              icon="calendar"
              label={"Log Round"}
              menuOpen={this.props.menuOpen}
              action={() =>
                this.setState(
                  { mode: RoundsMode.LOGROUND, newBadgeToast: false },
                  this.props.toggleModalOpen
                )
              }
            />
            <br />
            <EarnBadgesBtn
              icon="medal"
              label={"Earn badges"}
              action={() => {
                this.setState({
                  earnBadgesOpen: true,
                });
              }}
            />
            {this.state.earnBadgesOpen ? <EarnBadges /> : null}
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
          //TODO: Add aPROPriate props haha
          <RoundForm
            numRounds={this.props.numRounds}
            badges={this.props.badges}
            mode={this.state.mode}
            roundData={null}
            saveRound={this.props.addRound}
            incrementRounds={this.props.incrementRounds}
            toggleModalOpen={this.props.toggleModalOpen}
            setMode={this.setMode}
            updateBadges={this.props.updateBadges}
            toggleRenderNewBadgeToast={this.toggleRenderNewBadgeToast}
          />
        );
      case RoundsMode.EDITROUND:
        return (
          <RoundForm
            numRounds={this.props.numRounds}
            badges={this.props.badges}
            mode={this.state.mode}
            editId={this.state.editId}
            roundData={this.props.rounds[this.state.editId]}
            saveRound={this.props.updateRound}
            toggleModalOpen={this.props.toggleModalOpen}
            setMode={this.setMode}
            updateBadges={this.props.updateBadges}
            toggleRenderNewBadgeToast={this.toggleRenderNewBadgeToast}
          />
        );
    }
  }
}

export default RoundsPage;
