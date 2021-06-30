import React from 'react'

function Videos(props) {
    return (
        <div>
            <div class="ratio ratio-16x9 w-full" data-site="Youtube" data-id={props.video.id} key={props.video.key}>
            <iframe
                src={`https://www.youtube.com/embed/${props.video.key}`}
                title="YouTube video"
                allowfullscreen
            ></iframe>
            </div>
        </div>
    )
}

export default Videos
