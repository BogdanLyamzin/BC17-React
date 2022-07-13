import PropTypes from "prop-types";

import GreatHousesListItem from "./GreatHousesListItem";

const GreatHousesList = ({items, onRemove}) => {
    const elements = items.map(item => <GreatHousesListItem key={item.id} {...item} onRemove={onRemove} />);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default GreatHousesList;

GreatHousesList.defaultProps = {
    items: []
}

GreatHousesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        words: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onRemove: PropTypes.func.isRequired,
}