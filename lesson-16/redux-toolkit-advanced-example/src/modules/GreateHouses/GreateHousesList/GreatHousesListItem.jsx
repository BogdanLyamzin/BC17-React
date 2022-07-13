import {memo} from "react";
import PropTypes from "prop-types";

const GreatHousesListItem = ({name, words, id, onRemove}) => {
    return (<li>
        <p>{name}</p>
        <p>{words}</p>
        <button onClick={()=> onRemove(id)}>Удалить</button>
    </li>)
}

export default memo(GreatHousesListItem);

GreatHousesListItem.propTypes = {
    name: PropTypes.string.isRequired,
    words: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
}