import React from 'react'
import './css/Video.css'

export default function Video() {

  return (
    <div className="kidsTube">

      <div className="v1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yJtNLPhDtJw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>

      <div className="v2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NG809Re-SIs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>

      <div className="v3">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-gdcgnSrUvU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>

      <div className="v4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HGeuA4iJ8vI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>

    </div>
  )
}
