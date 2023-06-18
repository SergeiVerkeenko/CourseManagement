import React from "react"
import style from './style.module.css'

const Pagination = ({ informationPerPage, total, paginate }) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(total / informationPerPage); i++) {
        pageNumber.push(i)

    }
    return (
        <div className={style.pagination}>
            <ul >
                {
                    pageNumber.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)}>

                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination