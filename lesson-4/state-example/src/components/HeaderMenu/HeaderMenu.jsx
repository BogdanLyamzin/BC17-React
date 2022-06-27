import {Component} from "react";
import PropTypes from "prop-types";

import styles from "./header-menu.module.scss";

/*
class Component {
    contsructor(props){
        this.props = {...props};
    }

    this.setState(data){
        if(typeof data === "object"){
            
        }
    }
}
*/

class HeaderMenu extends Component {
    // constructor (props){
    //     super(props);
    //     this.state = {
    //         activeIndex: 0
    //     }
    // }

    static defaultProps = {
        items: []
    }

    state = {
        activeIndex: 0,
    }

    handleClick(e, index){
        e.preventDefault();
        this.setState({
            activeIndex: index
        })
    }

    render(){
        const {items} = this.props;
        const {activeIndex} = this.state;

        const elements = items.map(({id, link, text}, index) => {
            const className = (index === activeIndex) ? styles.linkActive : styles.link;
            return (
            <li key={id}>
                <a onClick={(e)=> this.handleClick(e, index)} className={className} href={link}>{text}</a>
            </li>
        )});

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}


export default HeaderMenu;


HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

