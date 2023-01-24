import React from "react";
import style from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/contacts.slice"

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter)
  const onFilterChange = (query) => {
    dispatch(setFilter(query))
  }
  return (
    <label>

      <input className={style.FilterFormInput}
        type="text" value={filter}
        onChange={(event) => onFilterChange(event.target.value)} />
    </label>
  );
};


