import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../redux/actions/actions'
import styles from './styles/pagination.module.css'


export default function Paginate({ totalPages }) {
    const { numPage } = useSelector((state) => state)
    const dispatch = useDispatch()
    function next() {
        dispatch(nextPage())
    }
    function prev() {
        dispatch(prevPage())
    }
    return (
        <div className={styles.pagesContain}>
            {numPage > 1 ?
                (<div className={styles.prev}>
                    <button onClick={prev}><ion-icon name="arrow-back-outline"></ion-icon></button>
                    <p>{numPage - 1}</p>
                </div>) : null
            }
            <div>
                <h3>{numPage}</h3>
            </div>
            {
                numPage < totalPages ?
                    <div className={styles.next}>
                        <p>{numPage + 1}</p>
                        <button onClick={next}><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </div> : null
            }
        </div>
    );
}
