import Image from "next/image";
import styles from "../styles/page.module.scss";

export default function SingleVideo(props) {
    return(
        <div onClick={() => props.openVideo(props.video.title.rendered)} className={styles.singlevideoCont}>
            <Image priority src={props.video.thumbnail_link} alt="" width={200} height={100}/>
        </div>
    )
}