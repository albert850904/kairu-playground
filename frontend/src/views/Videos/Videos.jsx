import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// css
import "./Videos.scss";
// video
import lamboVideo from "../../assets/videos/lambo_gift.mp4";
import lamboVideoSubtitle from "../../assets/videos/subtitles.vtt";
import { formatTimeToHMS } from "../../utils/functions";

function Videos(props) {
  const videoRef = useRef();
  const videoContainerRef = useRef();
  const timelineContainerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPiP, setIsPiP] = useState(false);
  const [isCaptionsShow, setIsCaptionsShow] = useState(false);
  const [volume, setVolume] = useState(1);
  const [volumeLevel, setVolumeLevel] = useState("high");
  const [videoDuration, setVideoDuration] = useState("00:00");
  const [videoCurrentTime, setVideoCurrentTime] = useState("00:00");
  const [videoSpeed, setVideoSpeed] = useState("1x");
  const [previewImgSource, setPreviewImgSource] = useState(null);
  const [thumbnailImgSource, setThumbnailPreviewImgSource] = useState(null);
  const [isScrubbing, setIsScrubbing] = useState(false);

  // play / pause
  const playPauseHandler = () => {
    setIsPlaying(videoRef.current.paused);

    if (videoRef.current.paused) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  };

  // video keyboard event
  const keyDownHandler = useCallback((e) => {
    const tagName = e.key.toLowerCase();

    if (tagName === "input") return;
    switch (tagName) {
      case " ":
        // focus在button時按下space不會自動播放
        if (tagName === "button") return;
        else playPauseHandler();
        break;
      case "k":
        playPauseHandler();
        break;
      case "f":
        toggleFullScreenHandler();
        break;
      case "t":
        toggleTheaterHandler();
        break;
      case "i":
        toggleMiniPlayerMode();
        break;
      case "m":
        toggleMuteHandler();
        break;
      case "arrowright":
      case "l":
        videoSkippingHandler(5);
        break;
      case "arrowleft":
      case "j":
        videoSkippingHandler(-5);
        break;
      case "c":
        toggleCaption();
        break;
      default:
        break;
    }
  }, []);

  // theater mode
  const toggleTheaterHandler = () => {
    setIsTheaterMode((prevState) => !prevState);
  };

  // full screen
  const toggleFullScreenHandler = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      return;
    }

    document.exitFullscreen();
  };

  // volumes
  const toggleMuteHandler = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  const videoVolumeChangeHandler = (e) => {
    const volume = e.target.volume;
    const isMuted = e.target.muted;
    setVolume(isMuted ? 0 : volume);

    if (isMuted || +volume === 0) {
      setVolumeLevel("muted");
    } else if (volume < 0.5) {
      setVolumeLevel("low");
    } else {
      setVolumeLevel("high");
    }
  };

  const onVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    videoRef.current.volume = volume;
  };

  // duration
  const videoSkippingHandler = (duration) => {
    videoRef.current.currentTime += duration;
  };

  // captions
  const toggleCaption = () => {
    const caption = videoRef.current.textTracks[0];
    const isHidden = caption.mode === "hidden";
    setIsCaptionsShow((prevState) => !prevState);

    caption.mode = isHidden ? "showing" : "hidden";
  };

  // play speed
  const playSpeedHandler = () => {
    const currentRate = videoRef.current.playbackRate;
    let newRate = currentRate + 0.25;
    if (newRate > 2) newRate = 0.25;
    videoRef.current.playbackRate = newRate;

    setVideoSpeed(`${newRate}x`);
  };

  // picture in picture
  const toggleMiniPlayerMode = () => {
    if (!document.pictureInPictureElement) {
      videoRef.current.requestPictureInPicture();
      return;
    }

    document.exitPictureInPicture();
  };

  // timeline
  const videoTimeChangeHandler = () => {
    setVideoCurrentTime(formatTimeToHMS(videoRef.current.currentTime));

    // moving the red bar
    const percent = videoRef.current.currentTime / videoRef.current.duration;
    timelineContainerRef.current.style.setProperty(
      "--progress-position",
      percent
    );
  };

  const timelineUpdateHandler = (e) => {
    const rect = timelineContainerRef.current.getBoundingClientRect();
    // 滑鼠的x 減去 timeline container最左邊，如果滑鼠比container還左邊，設定為0
    // rect.width 是最右邊的position
    const mousePositionPersent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;

    // percent x duration 就是你所在的影片時間點 / 10 則是我們每10秒截圖一張
    const previewImgNumber = Math.max(
      1,
      Math.floor((mousePositionPersent * videoRef.current.duration) / 10)
    );

    const imageSource = `images/previewImg/preview${previewImgNumber}.jpg`;

    setPreviewImgSource(imageSource);

    // timeline縮圖與灰線位置
    timelineContainerRef.current.style.setProperty(
      "--preview-position",
      mousePositionPersent
    );

    // 拖曳時變更thumbnail圖樣，紅線與紅圓圈位置
    if (isScrubbing) {
      e.preventDefault(); // 取消反白功能
      setThumbnailPreviewImgSource(imageSource);
      timelineContainerRef.current.style.setProperty(
        "--progress-position",
        mousePositionPersent
      );
    }
  };

  // scrubbing
  const toggleScrubbingHandler = useCallback((e) => {
    const rect = timelineContainerRef.current.getBoundingClientRect();
    const mousePositionPersent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    // 左 1，右 2，中 4
    const isScrub = (e.buttons & 1) === 1; // 不管哪個鍵按下去，都視為左鍵
    console.log("toggled", isScrub);
    setIsScrubbing(isScrub);

    if (isScrub) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else {
      if (videoRef.current.paused) playPauseHandler();
      videoRef.current.currentTime =
        mousePositionPersent * videoRef.current.duration;
    }
  }, []);

  // data loaded
  const videoDataLoadedHandler = () => {
    setVideoDuration(formatTimeToHMS(videoRef.current.duration));
  };

  useEffect(() => {
    // 用 window來全局監聽
    window.addEventListener("keydown", (e) => {
      keyDownHandler(e);
    });

    window.addEventListener("fullscreenchange", (e) => {
      setIsFullScreen((prevState) => !prevState);
    });

    // prevent pressing space from scrolling
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    });
  }, [keyDownHandler]);

  /**
   * 這裡有個大坑，removeEventListener第二個參數必須是跟addEventListener相同的reference
   * 因此function 必須要用useCallback包起來，以防他在re-render之後再次建立function, 這樣reference就會不相等
   * 如果function 有用到其他function，這其他function也要用useCallback包起來
   * 但如果其他funciton有用到state，removeListener就會失效
   */
  useEffect(() => {
    if (isScrubbing) {
      document.addEventListener("mouseup", toggleScrubbingHandler, true);
    } else {
      document.removeEventListener("mouseup", toggleScrubbingHandler, true);
    }
  }, [isScrubbing, toggleScrubbingHandler]);

  // video refference event listener
  useEffect(() => {
    videoRef.current.textTracks[0].mode = "hidden";

    videoRef.current.addEventListener("enterpictureinpicture", (e) => {
      console.log("enter");
      setIsPiP((prevState) => !prevState);
    });

    videoRef.current.addEventListener("leavepictureinpicture", (e) => {
      console.log("leave");
      setIsPiP((prevState) => !prevState);
    });
  }, [videoRef]);

  return (
    <main className="video">
      <div
        ref={videoContainerRef}
        className={
          "video-container " +
          (isPlaying ? "" : "paused ") +
          (isTheaterMode ? "theater" : "") +
          (isScrubbing ? "scrubbing" : "")
        }
        data-volume-level={volumeLevel}
        onMouseMove={(e) => {
          if (isScrubbing) timelineUpdateHandler(e);
        }}
        onMouseUp={(e) => {
          if (isScrubbing) {
            toggleScrubbingHandler(e);
            timelineUpdateHandler(e);
          }
        }}
      >
        <img src={thumbnailImgSource} alt="" className="thumbnail-img" />
        {/* video controls overlay */}
        <div className="video-container__controls ">
          {/* overlay timeline */}
          <div
            ref={timelineContainerRef}
            className="video-container__controls__timeline"
            onMouseMove={(e) => timelineUpdateHandler(e)}
            onMouseDown={(e) => {
              toggleScrubbingHandler(e);
              timelineUpdateHandler(e);
            }}
          >
            <div className="timeline">
              <img src={previewImgSource} alt="" className="preview-img" />
              <div className="thumb-indicator"></div>
            </div>
          </div>
          {/* controls */}
          <div className="controls">
            {/* controlling play and pause */}
            <button
              className="controls__play-pause"
              onClick={() => playPauseHandler()}
            >
              <svg className="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
              <svg className="pause-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
              </svg>
            </button>
            {/* volume control */}
            <div className="controls__volume">
              <button
                className="controls__volume__mute"
                onClick={() => toggleMuteHandler()}
              >
                <svg className="volume-high-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                  />
                </svg>
                <svg className="volume-low-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                  />
                </svg>
                <svg className="volume-muted-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                  />
                </svg>
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={(e) => onVolumeChange(e)}
                className="controls__volume__slider"
              />
            </div>
            {/* duration control */}
            <div className="controls__duration">
              <div className="controls__duration__current">
                {videoCurrentTime}
              </div>
              /<div className="controls__duration__total">{videoDuration}</div>
            </div>
            {/* caption control */}
            <button
              className={isCaptionsShow ? "controls__caption" : ""}
              onClick={() => toggleCaption()}
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z"
                />
              </svg>
            </button>
            {/* speed control */}
            <button
              className="controls__speed wide"
              onClick={() => playSpeedHandler()}
            >
              {videoSpeed}
            </button>
            {/* picture in picture */}
            <button
              className="controls__mini-play"
              onClick={() => toggleMiniPlayerMode()}
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
                />
              </svg>
            </button>
            {/* theater mode button  */}
            <button
              className="controls__threater"
              onClick={() => toggleTheaterHandler()}
            >
              {isTheaterMode ? (
                <svg className="wide" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
                  />
                </svg>
              ) : (
                <svg className="tall" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
                  />
                </svg>
              )}
            </button>
            {/* full screen button */}
            <button
              className="controls-full-screen"
              onClick={() => toggleFullScreenHandler()}
            >
              {isFullScreen ? (
                <svg className="close" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                  />
                </svg>
              ) : (
                <svg className="open" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* video itself */}
        <video
          ref={videoRef}
          onClick={() => playPauseHandler()}
          onVolumeChange={videoVolumeChangeHandler}
          onLoadedData={() => videoDataLoadedHandler()}
          onTimeUpdate={() => videoTimeChangeHandler()}
        >
          <source src={lamboVideo} type="video/mp4" />
          <track kind="captions" srcLang="en" src={lamboVideoSubtitle} />
        </video>
      </div>
    </main>
  );
}

Videos.propTypes = {};

export default Videos;
