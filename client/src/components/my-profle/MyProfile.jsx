import Button from 'react-bootstrap/esm/Button';
import styles from './MyProfile.module.css';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import ProfileUser from './profile-user/ProfileUser';
import ProfileBookFavorite from './profile-book-item/ProfileBookItem';
import ProfileBookRecent from './profile-book-item/ProfileBookRecent';
import ProfileComment from './profile-comment/ProfileComment';

export default function MyProfile() {
    return (
        <>
            <div className="row">
                <ProfileUser />
                <div className='col-md-8'>
                    <div className={styles.container}>
                        <h1 className={styles.favorites_h1}>Your Favorite Books!</h1>
                        <ul>
                            <ProfileBookFavorite />
                            <ProfileBookFavorite />
                        </ul>
                    </div>
                    <div className={styles.container}>
                        <h1 className={styles.favorites_h1}>Recent Activity</h1>
                        <div className={styles.scrollable_container_recent}>
                            <ProfileBookRecent />
                            <ProfileComment />
                            <ProfileBookRecent />
                            <ProfileComment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}