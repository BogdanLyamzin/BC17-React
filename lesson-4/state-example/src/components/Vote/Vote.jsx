import { Component } from "react";

import VoteActions from "./VoteActions";
import VoteStats from "./VoteStats";

import styles from "./vote.module.css";

class Vote extends Component {
    state = {
        democrates: 0,
        republic: 0,
    }

    setVote = (propertyName) => {
        this.setState(prevState => {
            return {
                [propertyName]: prevState[propertyName] + 1
                // democrates: prevState.democrates + 1
            }
        })
    }

    render() {
        const { democrates, republic } = this.state;
        const total = democrates + republic;

        return (
            <div className={styles.vote}>
                <VoteActions setVote={this.setVote} />
                <VoteStats democrates={democrates} republic={republic} total={total} />
            </div>
        )
    }
}

export default Vote;