import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Typer.css';

const Typer = (props) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  const refText = useRef(text);
  const refIsDeleting = useRef(isDeleting);
  const refLoopNum = useRef(loopNum);
  const refTypingSpeed = useRef(typingSpeed);

  const refTimer = useRef();
  const refIsGoingToDelete = useRef(false);

  refText.current = text;
  refIsDeleting.current = isDeleting;
  refLoopNum.current = loopNum;
  refTypingSpeed.current = typingSpeed;

  const handleType = useCallback(() => {
    const { sentences } = props;
    const i = refLoopNum.current % sentences.length;
    const fullText = sentences[i];

    setText(
      refIsDeleting.current
        ? fullText.substring(0, refText.current.length - 1)
        : fullText.substring(0, refText.current.length + 1)
    );

    // setTypingSpeed(refIsDeleting.current ? 30 : 100);

    if (!refIsDeleting.current && refText.current === fullText && !refIsGoingToDelete.current) {
      refIsGoingToDelete.current = true;
      setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(30);
        refIsGoingToDelete.current = false;
      }, 2000);
    } else if (refIsDeleting.current && refText.current === '') {
      setIsDeleting(false);
      setTypingSpeed(80);
      setLoopNum(refLoopNum.current + 1);
    }

    if (refIsGoingToDelete.current) {
      setTimeout(() => {
        refTimer.current = setTimeout(handleType, refTypingSpeed.current);
      }, 2000);
    } else {
      refTimer.current = setTimeout(handleType, refTypingSpeed.current);
    }
  }, [props]);

  useEffect(() => {
    handleType();
    return () => clearTimeout(refTimer.current);
  }, [handleType]);

  return (
    <>
      <span className={props.className}>{text}</span>
      <span className={`cursor ${props.className}`} style={{ color: props.cursorColor }}>
        |
      </span>
    </>
  );
};

Typer.propTypes = {
  cursorColor: PropTypes.string,
  sentences: PropTypes.array.isRequired,
};

Typer.defaultProps = {
  cursorColor: '#000000',
};

export default Typer;
