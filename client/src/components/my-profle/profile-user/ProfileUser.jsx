import { Link } from 'react-router-dom';
import styles from '../MyProfile.module.css';
import Button from 'react-bootstrap/esm/Button';


export default function ProfileUser() {
    return (
        <div className='col-md-3 ml-4'>
            <div className={styles.container_user}>
                <div className={styles.container_user_inner}>
                    <div className={styles.profile_pic_container}>
                        <Link to="#">
                            <img className={styles.user_img} src="/images/profilepic.webp" alt="" />
                            <div className={styles.overlay_text}>Edit Picture</div>
                        </Link>
                    </div>
                    <h1 className={styles.user_name}>Victor Von-Doom</h1>
                    <h2 className={styles.user_email}>victor@abv.bg</h2>
                    <p className={styles.user_info}>Joined on: 10.08.2024</p>
                    <p className={styles.user_info}>Owner_ID: 1SD2Dse#sd1@xfkj4</p>
                    <div className={styles.infoButtons_div}>
                        <Button className="mr-2" type='primary'>Edit Info </Button>
                        <Button className="ml-5" type='primary'>Change Password</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}