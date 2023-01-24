import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/contacts.slice"
//import { useSelector, useDispatch } from "react-redux";
export const ContactFilter = () => {

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.contacts.filter)
    // const testfilter = useSelector((state) => state.contacts.filter)
    // console.log('contact: ', contacts)
    const onFilterChange = (query) => {
        dispatch(setFilter(query))
        // console.log('test filter  ', testfilter)
    }

    return (
        <label>
            Find contact by name
            <br />
            <input
                type="text"
                onChange={(event) => onFilterChange(event.target.value)}
                value={filter}
            />
        </label>
    )
}

