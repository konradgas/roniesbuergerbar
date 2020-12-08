import './AddressDetails.css'
import {FC} from "react";

export const AddressDetails: FC = () => {
    return <div className="address-details">
        <h1 className="address-details_header">Ronnie's Burger Bar</h1>
        <h3 className="address-details_subheader">Contact Details</h3>
        <p className='address-details_text'>
            Ronnies Burger Bar
            70 Regent St, Cheltenham GL50 1HA
            Telephone <a type="tel" href="tel:01242778634">01242 778634</a>
        </p>
    </div>
}