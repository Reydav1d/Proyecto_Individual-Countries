import styles from './styles/home.module.css'
import { getCountries, getAllActivities } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cards from '../../components/cards/cards';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getAllActivities());
    }, [dispatch])

    return (
        <>
            <div className={styles.cardsContainer}>
                <Cards />
            </div>
        </>
    )
}
