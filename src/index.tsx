import React, { useEffect, useState, useRef, useCallback } from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

interface TyperProps {
  sentences: string[];
  startDelay?: number;
  cursorDelay?: number;
  className?: string;
  cursorClassName?: string;
  cursorColor?: string;
  cursorBlinkSpeed?: number;
  showCursor?: boolean;
  hideCursorOnFinish?: boolean;
  cursorSmooth?: boolean;
  writeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  style?: React.CSSProperties;
}

const Typer: React.FC<TyperProps> = ({
  sentences,
  startDelay = 0,
  cursorDelay = startDelay,
  className = '',
  cursorClassName = '',
  cursorColor = '',
  cursorBlinkSpeed = 700,
  showCursor = true,
  hideCursorOnFinish = false,
  cursorSmooth = false,
  writeSpeed = 80,
  deleteSpeed = 30,
  pauseTime = 2000,
  loop = true,
  style = {},
}: TyperProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(writeSpeed);

  const refText = useRef(text);
  const refIsDeleting = useRef(isDeleting);
  const refLoopNum = useRef(loopNum);
  const refTypingSpeed = useRef(typingSpeed);

  const refTimer = useRef(0);
  const refIsGoingToDelete = useRef(false);
  const refIsFinished = useRef(false);

  refText.current = text;
  refIsDeleting.current = isDeleting;
  refLoopNum.current = loopNum;
  refTypingSpeed.current = typingSpeed;

  const handleType = useCallback(() => {
    const i = refLoopNum.current % sentences.length;
    const fullText = sentences[i];

    setText(
      refIsDeleting.current
        ? fullText.substring(0, refText.current.length - 1)
        : fullText.substring(0, refText.current.length + 1)
    );

    if (!refIsDeleting.current && refText.current === fullText && !refIsGoingToDelete.current) {
      refIsGoingToDelete.current = true;
      setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(deleteSpeed);
        refIsGoingToDelete.current = false;
      }, pauseTime);
    } else if (refIsDeleting.current && refText.current === '') {
      setIsDeleting(false);
      setTypingSpeed(writeSpeed);
      setLoopNum(refLoopNum.current + 1);
    }

    if (loop || i !== sentences.length - 1 || refText.current.length !== fullText.length) {
      if (refIsGoingToDelete.current) {
        setTimeout(() => {
          refTimer.current = setTimeout(handleType, refTypingSpeed.current);
        }, pauseTime);
      } else {
        refTimer.current = setTimeout(handleType, refTypingSpeed.current);
      }
    } else {
      refIsFinished.current = true;
    }
  }, [deleteSpeed, loop, pauseTime, writeSpeed, sentences]);

  useEffect(() => {
    setTimeout(() => {
      handleType();
    }, startDelay);
    return () => clearTimeout(refTimer.current);
  }, [handleType, startDelay]);

  return (
    <span style={style}>
      <span className={className}>{text}</span>
      {!(refIsFinished.current && hideCursorOnFinish) && (
        <span
          className={`typist-cursor ${`${cursorClassName} ${className}`}`}
          style={{
            opacity: 0,
            visibility: showCursor ? 'visible' : 'hidden',
            color: cursorColor,
            animation: `blink ${cursorBlinkSpeed}ms ${cursorSmooth ? '' : 'steps(1)'} infinite`,
            animationDelay: `${cursorDelay}ms`,
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

/* Typer.propTypes = {
  className: PropTypes.string, // so it is compatible with styled-components
  cursorColor: PropTypes.string,
  sentences: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  showCursor: PropTypes.bool,
  writeSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  pauseTime: PropTypes.number,
  loop: PropTypes.bool,
};

Typer.defaultProps = {
  className: '',
  cursorColor: '#000000',
  showCursor: true,
  writeSpeed: 80,
  deleteSpeed: 30,
  pauseTime: 2000,
  loop: true,
}; */

export default Typer;
