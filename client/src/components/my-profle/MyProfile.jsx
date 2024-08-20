import { useDeleteFavoritesItem, useGetUserFavoritesItems } from '../../hooks/useFavorites';
import styles from './MyProfile.module.css';
import ProfileUser from './profile-user/ProfileUser';
import ProfileBookFavorite from './profile-book-item/ProfileBookFavorite';


export default function MyProfile() {
    const [currentItems, setCurrentItems] = useGetUserFavoritesItems();
    const removeFromFavorites = useDeleteFavoritesItem();

    const handleDeleteFavoritesItem = (favoritesItem_id) => {
        setCurrentItems(prevFavoritesItem => prevFavoritesItem.filter(favoritesItem => favoritesItem._id != favoritesItem_id));
    }

    return (
        <>
            <div className="row">
                <ProfileUser />
                <div className='col-md-8'>
                    <div className={styles.container}>
                        <h1 className={styles.favorites_h1}>Your Favorite Books!</h1>
                        {currentItems.length > 0 ?
                            <ul>
                                {currentItems.map(item => (
                                    <ProfileBookFavorite
                                        key={item._id}
                                        item={item}
                                        onDelete={removeFromFavorites}
                                        onRemove={handleDeleteFavoritesItem} />
                                ))}
                            </ul> :
                            <h1>You haven't added any books yet!</h1>
                        }
                    </div>
                    {/* <div className={styles.container}>
                        <h1 className={styles.favorites_h1}>Recent Activity</h1>
                        <div className={styles.scrollable_container_recent}>
                            <ProfileBookRecent />
                            <ProfileComment />
                            <ProfileBookRecent />
                            <ProfileComment />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}