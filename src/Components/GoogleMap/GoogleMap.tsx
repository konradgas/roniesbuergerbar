import React, {FC} from 'react';
import './GoogleMap.css';

export const GoogleMap: FC = () => {
    return (
        <div id="google-map-id">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1463.8250078140447!2d-2.075555198632758!3d51.900194086614476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711b970a27778f%3A0x19799ea08d7a0870!2sRegent%20St%2C%20Cheltenham%20GL50%201HA!5e0!3m2!1sen!2suk!4v1607345042526!5m2!1sen!2suk"
                width="400" height="350" frameBorder="0" allowFullScreen={false} aria-hidden="false"></iframe>
        </div>
    );
}