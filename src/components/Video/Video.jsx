import './video.css'

const Video = () => {


    return (
        <div className="container mt150" id='video'>
            <div className="wrapper mt50 videocontainer" >
                <h2>Watch  Video about<br /> moving fellas</h2>
                <div className="videoBox">
                <iframe width="890" height="500" src="https://www.youtube.com/embed/xeSQD1nIZTw" title="YouTube video player" frameBorder="0" allowFullScreen={true} allowpictureinpicture ={true}></iframe>
                </div>
            </div>


        </div>
    )
}

export default Video