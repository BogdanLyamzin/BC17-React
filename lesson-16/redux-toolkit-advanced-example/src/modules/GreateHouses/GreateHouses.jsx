import { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";

import GreateHousesAddForm from "./GreateHousesAddForm";
import GreateHousesList from "./GreateHousesList";

import {add, remove, changeFilter} from "../../redux/greate-houses/greate-houses-slice";

import {getFilteredGreateHouses, getGreateHousesFilter} from "../../redux/greate-houses/greate-houses-selectors"

import styles from "./greate-houses.module.css";

const GreatHouses = () => {
    const items = useSelector(getFilteredGreateHouses);
    const filter = useSelector(getGreateHousesFilter);

    const dispatch = useDispatch();

    const addHouse = useCallback((data) =>{
        dispatch(add(data));
    }, [dispatch]);

    const onRemove = useCallback((id)=> {
        dispatch(remove(id))
    }, [dispatch])

    const onChangeFilter = useCallback(({target}) => {
        dispatch(changeFilter(target.value))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div>
                <GreateHousesAddForm onSubmit={addHouse} />
            </div>
            <div>
                <input name="filter" value={filter} onChange={onChangeFilter} placeholder="Filter" />
                <GreateHousesList items={items} onRemove={onRemove} />
            </div>
        </div>
    )
}

export default GreatHouses;