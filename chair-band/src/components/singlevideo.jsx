import Image from "next/image";

export default function SingleVideo(props) {
    return(
        <div onClick={() => props.openVideo(props.video.title.rendered)}>
            <Image priority src={props.video.thumbnail_link} alt="" width={200} height={100}/>
        </div>
    )
}