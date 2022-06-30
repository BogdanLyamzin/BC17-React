import { Component } from "react";

import VoteActions from "./VoteActions";
import VoteStats from "./VoteStats";

import styles from "./vote.module.css";

/*
class Component {
    constructor(props){
        this.props = {...props}
    }

    ComponentDidMount(){

    }

    render(){

    }

    ComponentDidUpdate(){

    }

    Первая отрисовка компонента
    1. constructor()
    2. render()
    3. ComponentDidMount()

    При обновлении state или props:
    1. render()
    2. ComponentDidUpdate()

    При удалении компонента со страницы:
    1. ComponentWillUnmount()
}
*/


class Vote extends Component {
    state = {
        democrates: 0,
        republic: 0,
    }

    componentDidMount(){
        const votes = JSON.parse(localStorage.getItem("votes"));
        if(votes && this.countTotal(votes)) {
            this.setState({...votes})
        }
    }

    componentDidUpdate(){
        localStorage.setItem("votes", JSON.stringify(this.state))
    }

    countTotal(state){
        const total = Object.values(state).reduce((acum, item) => acum + item);
        return total;
    }

    setVote = (propertyName) => {
        this.setState(prevState => {
            return {
                [propertyName]: prevState[propertyName] + 1
            }
        })
    }

    render() {
        const { democrates, republic } = this.state;
        const total = this.countTotal(this.state);

        return (
            <div className={styles.vote}>
                <VoteActions setVote={this.setVote} />
                <VoteStats democrates={democrates} republic={republic} total={total} />
            </div>
        )
    }
}

export default Vote;