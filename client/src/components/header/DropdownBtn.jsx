import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './Header.module.css';

export default function DropdownBtn() {
    return (
        <>
            <DropdownButton id={`Secondary`} variant={'secondary'} title={'Genre'}>

                <Dropdown.Item eventKey="1" className={styles.dropdown_item}>Action</Dropdown.Item>
                <Dropdown.Item eventKey="2" className={styles.dropdown_item}>Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" className={styles.dropdown_item}>Active Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" className={styles.dropdown_item}>Separated link</Dropdown.Item>
            </DropdownButton>

        </>
    );
}