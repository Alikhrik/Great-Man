import React from "react";
import styles from './Portret-Title.module.css';

// export function PortretTitle(props) {
//     return (
//     <dib>
//         <div className={styles['full-name']}>Гринцевич Назарій Андрійович</div>
//         <div>
//             <span className={styles.date}>10 березня 2003</span> - <span className={styles.date}>6 травня 2024</span>
//         </div>
//     </dib>
//     );
// }

export class PortretTitle extends React.Component {
    render() {
        return (
            <dib>
                <div className={styles['full-name']}>Гринцевич Назарій Андрійович</div>
                <div>
                    <span className={styles.date}>10 березня 2003</span> - <span className={styles.date}>6 травня 2024</span>
                </div>
            </dib>
            );
    }
}