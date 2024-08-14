import React from "react";
import { PortretTitle } from "../Portret-Title/Portret-Title";
import photoImage from '../../assets/images/photo.jpeg'; 
import styles from './Portret.module.css';

// export function Portret(props) {
//     return (<div className={styles.centred}>
//         <img src={photoImage} className={styles.photo} alt="" />
//         <PortretTitle></PortretTitle>
//     </div>);
// }

export class Portret extends React.Component {
    render() {
        return (<div className={styles.centred}>
            <img src={photoImage} className={styles.photo} alt="" />
            <PortretTitle></PortretTitle>
        </div>);
    }
}