
export default function SingleVideo(props) {

    return(
        <div onClick={() => props.openVideo(props.video.title.rendered)}>
            <h4>{props.video.title.rendered}</h4>
        </div>
    )
}