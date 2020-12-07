import {FC} from "react";
import './Logo.css';

export const Logo: FC = () => {
    return <div className="logo-container"><h1 className="logo-initial" data-testid="logo-initial">R</h1><span className='logo-followup'>onnie's burger bar</span></div>
}