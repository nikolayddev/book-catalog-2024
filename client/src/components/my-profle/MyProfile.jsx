import styles from './MyProfile.module.css';
import ProfileUser from './profile-user/ProfileUser';
import ProfileBookRecent from './profile-book-item/ProfileBookRecent';
import ProfileComment from './profile-comment/ProfileComment';
import { useGetAllFavoritesItems, useUpdateFavorites } from '../../hooks/useFavorites';
import ProfileBookFavorite from './profile-book-item/ProfileBookFavorite';
import { useAuthContext } from '../../contexts/AuthContext';

export default function MyProfile() {
    const [allFavoriteItems, setAllFavoriteItems] = useGetAllFavoritesItems()

    const patchInFavorites = useUpdateFavorites();

    const handleDeleteFavoritesItem = (FavoritesItem_id) => {
        setAllFavoriteItems(prevFavoritesItem =>
            prevFavoritesItem.filter(FavoritesItem => FavoritesItem._id != FavoritesItem_id)
        );
    }

    return (
        <>
            <div className="row">
                <ProfileUser />
                <div className='col-md-8'>
                    <div className={styles.container}>
                        <h1 className={styles.favorites_h1}>Your Favorite Books!</h1>
                        {allFavoriteItems.length > 0 ?
                            <ul>
                                {allFavoriteItems.map(item => (
                                    <ProfileBookFavorite
                                        key={item._id}
                                        item={item}
                                        patchItems={patchInFavorites}
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