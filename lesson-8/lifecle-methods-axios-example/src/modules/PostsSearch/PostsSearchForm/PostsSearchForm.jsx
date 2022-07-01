import { Component } from "react";

class PostsSearchForm extends Component {
    state = {
        search: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

    render(){
        const {handleChange, handleSubmit} = this;

        return (
            <form onSubmit={handleSubmit}>
                <input name="search" onChange={handleChange} type="text" placeholder="Поиск" required />
                <button type="submit">Поиск</button>
            </form>
        )
    }
}

export default PostsSearchForm;