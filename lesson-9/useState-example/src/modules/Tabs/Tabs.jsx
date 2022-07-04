import { Component } from "react";

import styles from "./tabs.module.css";

class Tabs extends Component {
    static defaultProps = {
        items: []
    }

    state = {
        idx: 0
    }

    switchTab (idx) {
        this.setState({
            idx
        })
    }

    render(){
        const {items} = this.props;
        const {idx} = this.state;

        if(!items.length) {
            return <>No tabs</>
        }

        const titleList = items.map(({id, title}, index) => (
            <li key={id} onClick={()=> this.switchTab(index)} className={index !== idx ? styles.item: styles.itemACtive}>{title}</li>
        ));
        const {content} = items[idx];

        return (
            <div>
                <ul className={styles.heading}>{titleList}</ul>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        )
    }
}

export default Tabs;