
export default function SingleVideo(props) {

    return(
        <div onClick={() => props.openVideo(props.video.name)}>
            <h4>{props.video.name}</h4>
        </div>
    )
}