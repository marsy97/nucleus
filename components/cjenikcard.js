import styles from "./cjenik.module.scss";

function cjenikcard() {
    return(
    
        <div className={styles.cardBg}>
            <h1 className={styles.h1}>Paket 1</h1>
            <ul className={styles.ul}>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </li>

                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </li>

                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </li>

                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </li>

                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </li>
            </ul>

            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

           

            
            
        </div>

       
    )}

    export default cjenikcard;