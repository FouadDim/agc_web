import React from "react";
import "./styles/Home.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Home() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <div className={listening ? "start_stop_spec" : "off"}></div>
      <button
        className="start_stop"
        onClick={
          listening
            ? SpeechRecognition.stopListening
            : SpeechRecognition.startListening
        }
      >
        {listening ? (
          <svg
            width="70"
            height="70"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H89.5V89.5H0V0Z" fill="white" />
          </svg>
        ) : (
          <svg
            width="100"
            height="100"
            viewBox="0 0 204 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M101.792 174.5C125.931 174.5 145.271 155.014 145.271 130.875L145.417 43.625C145.417 19.4858 125.931 0 101.792 0C77.6525 0 58.1667 19.4858 58.1667 43.625V130.875C58.1667 155.014 77.6525 174.5 101.792 174.5ZM178.862 130.875C178.862 174.5 141.927 205.037 101.792 205.037C61.6567 205.037 24.7208 174.5 24.7208 130.875H0C0 180.462 39.5533 221.47 87.25 228.595V276.292H116.333V228.595C164.03 221.615 203.583 180.607 203.583 130.875H178.862Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default Home;
