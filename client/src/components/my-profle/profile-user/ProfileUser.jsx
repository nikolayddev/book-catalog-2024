import { Link } from 'react-router-dom';
import styles from '../MyProfile.module.css';
import Button from 'react-bootstrap/esm/Button';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useGetUserInfo } from '../../../hooks/useAuth';


export default function ProfileUser() {
    const userData = useAuthContext();
    const [userInfo] = useGetUserInfo();
    const date = new Date(userInfo._createdOn);

    return (
        <div className='col-md-3 ml-4'>
            <div className={styles.container_user}>
                <div className={styles.container_user_inner}>
                    <div className={styles.profile_pic_container}>
                        <Link to="#">
                            <img className={styles.user_img} src={userData.profilePicture} alt="" />
                            {/* <div className={styles.overlay_text}>Edit Picture</div> */}
                        </Link>
                    </div>
                    <h1 className={styles.user_name}>{userData.firstName} {userData.lastName}</h1>
                    <h2 className={styles.user_email}>{userData.email}</h2>
                    <p className={styles.user_info}>Joined on: {date.toLocaleDateString()}</p>
                    <p className={styles.user_info}>Owner_ID: {userData.user_id}</p>
                    <div className={styles.infoButtons_div}>
                        {/* <Button className="mr-2" type='primary'>Edit Info </Button> */}
                        {/* <Button className="ml-5" type='primary'>Change Password</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}