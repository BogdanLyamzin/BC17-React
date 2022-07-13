export const getAllGreateHouses = ({greateHouses}) => greateHouses.items;
export const getFilteredGreateHouses = ({greateHouses}) => {
    const {items, filter} = greateHouses;
    if(!filter) {
        return items;
    }
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({name,words}) => {
        return (name.toLowerCase().includes(normalizedFilter) || words.toLowerCase().includes(normalizedFilter));
    })
}
export const getGreateHousesFilter = ({greateHouses}) => greateHouses.filter;