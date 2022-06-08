import React from 'react'
import classes from './StudentFilter.module.css'

const StudentFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className={classes['student-filter']}>
      <div className={classes['student-filter__control']}>
        <label>Filter by year:</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default StudentFilter
