import React from "react";

class PostPage extends React.Component {
  render() {
    console.log("Rendering Post modal");
    return (
      <>
        <div
          id="feedModeDialog"
          class="post-mode-page action-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="newPostHeader"
          tabindex="0"
        >
          <h1 id="newPostHeader" class="post-mode-page-header">
            What's on your mind?
          </h1>
          <p class="post-mode-page-content">
            <form method="post">
              <textarea id="feedPost" rows="4" cols="50"></textarea>
              <br></br>
              <span className="post-mode-below-textarea">
                Have a cool photo or video you want to share?
              </span>
              <br></br>

              <input
                type="file"
                className="post-file"
                accept="image/png, image/jpeg, video/*"
              />
            </form>
          </p>

          <div class="post-mode-page-btn-container">
            <button
              id="feedModeActionBtn"
              class="post-mode-page-btn action-dialog action-button"
              type="button"
            >
              Post to Feed
            </button>
            <button
              id="feedModePostCancelBtn"
              class="post-mode-page-btn action-dialog cancel-button"
              type="button"
              onClick={() => {
                this.props.cancelBtn();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PostPage;
