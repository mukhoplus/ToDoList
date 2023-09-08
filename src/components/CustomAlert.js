import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ message, onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 5000); // 5초 후에 알림을 자동으로 닫음

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, [onClose]);

  // dismissible: 사용자가 알림을 닫을 수 있도록 함
  return (
    <>
      <Alert variant="warning" dismissible onClose={onClose}>
        {message}
      </Alert>
    </>
  );
};

export default CustomAlert;
