import React from "react";
import bronzeTime from "../images/bronzeTime.png";
import bronzeStreak from "../images/bronzeStreak.png";
import bronzeRound from "../images/bronzeRound.png";
import bronzeStroke from "../images/bronzeStroke.png";
import silverTime from "../images/silverTime.png";
import silverStreak from "../images/silverStreak.png";
import silverStroke from "../images/silverStroke.png";
import silverRound from "../images/silverRound.png";
import goldTime from "../images/goldTime.png";
import goldRound from "../images/goldRound.png";
import goldStroke from "../images/goldStroke.png";
import goldStreak from "../images/goldStreak.png";
import diamondTime from "../images/diamondTime.png";
import diamondRound from "../images/diamondRound.png";
import diamondStroke from "../images/diamondStroke.png";
import diamondStreak from "../images/diamondStreak.png";
import ultraTime from "../images/ultraTime.png";
import ultraRound from "../images/ultraRound.png";
import ultraStroke from "../images/ultraStroke.png";
import ultraStreak from "../images/ultraStreak.png";

class EarnBadges extends React.Component {
  render() {
    return (
      <>
        <h1>Learn how to earn these cool badges</h1>
        <img src={bronzeTime} alt="Bronze Time badge" />
        <p>
          To earn this badge, accumulate a total of 80 minutes or more in one
          game
        </p>

        <img src={silverTime} alt="Silver Time badge" />
        <p>
          To earn this badge, accumulate between 51 and 60 minutes in one game
        </p>

        <img src={goldTime} alt="Gold Time badge" />
        <p>
          To earn this badge, accumulate between 46 and 50 minutes in one game
        </p>

        <img src={diamondTime} alt="Diamond Time badge" />
        <p>
          To earn this badge, accumulate between 36 and 45 minutes in one game
        </p>

        <img src={ultraTime} alt="Ultra Time badge" />
        <p>
          To earn this badge, accumulate a total of 35 minutes or less in one
          game
        </p>

        <img src={bronzeRound} alt="Bronze Round badge" />
        <p>To earn this badge, play a total of 30 rounds in one day</p>

        <img src={silverRound} alt="Silver Round badge" />
        <p>To earn this badge, play a total of 65 rounds in one day</p>

        <img src={goldRound} alt="Gold Round badge" />
        <p>To earn this badge, play a total of 130 rounds in one day</p>

        <img src={diamondRound} alt="Diamond Round badge" />
        <p>To earn this badge, play a total of 260 rounds in one day</p>

        <img src={ultraRound} alt="Ultra Round badge" />
        <p>To earn this badge, play a total of 520 rounds in one day</p>

        <img src={bronzeStreak} alt="Bronze Streak badge" />
        <p>To earn this badge, play 1 round in one day</p>

        <img src={silverStreak} alt="Silver Streak badge" />
        <p>To earn this badge, play 3 rounds in one day</p>

        <img src={goldStreak} alt="Gold Streak badge" />
        <p>To earn this badge, play 7 rounds in one day</p>

        <img src={diamondStreak} alt="Diamond Streak badge" />
        <p>To earn this badge, play 10 rounds in one day</p>

        <img src={ultraStreak} alt="Ultra Streak badge" />
        <p>To earn this badge, play 15 rounds in one day</p>

        <img src={bronzeStroke} alt="Bronze Stroke badge" />
        <p>To earn this badge, accumulate 150 or more swings in one game</p>

        <img src={silverStroke} alt="Silver Stroke badge" />
        <p>
          To earn this badge, accumulate between 91 and 120 swings in one game
        </p>

        <img src={goldStroke} alt="Gold Stroke badge" />
        <p>
          To earn this badge, accumulate between 76 and 90 swings in one game
        </p>

        <img src={diamondStroke} alt="Diamond Stroke badge" />
        <p>
          To earn this badge, accumulate between 66 and 75 swings in one game
        </p>

        <img src={ultraStroke} alt="Ultra Stroke badge" />
        <p>To earn this badge, accumulate 65 or less swings in one game</p>

        <button
          onClick={() => {
            this.props.cancelBtn();
          }}
        >
          Back
        </button>
      </>
    );
  }
}

export default EarnBadges;
