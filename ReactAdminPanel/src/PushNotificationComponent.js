import React, { useState, useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

const PushNotificationComponent = () => {
  const [notificationStatus, setNotificationStatus] = useState("");

  const sendNotification = () => {
    getToken(messaging, { vapidKey: "BLIbShVucRRAX2HIq8STnC4wGcNcMUwa6oC4fZTnY33QlYJJfsugjxYl7iZ7SflHTyCZJpJxpGsXePjzHBE6H-Q" })
      .then((token) => {
        console.log("Token:", token);
        // Logic to send the token to your server or directly use it to send a notification
        setNotificationStatus("success");
      })
      .catch((error) => {
        console.error("Error getting token:", error);
        setNotificationStatus("error");
      });
  };

  useEffect(() => {
    if (notificationStatus) {
      const timer = setTimeout(() => {
        setNotificationStatus("");
      }, 15000); // 15 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts or notificationStatus changes
    }
  }, [notificationStatus]);

  const NotificationToast = ({ type, message }) => {
    const toastStyles = {
      success: {
        container: "text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
        icon: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
        iconPath: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
        text: "text-green-700"
      },
      error: {
        container: "text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
        icon: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
        iconPath: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z",
        text: "text-red-700"
      }
    };

    const { container, icon, iconPath, text } = toastStyles[type];

    return (
      <div className={`flex items-center w-full max-w-xs p-4 mb-4 ${container}`} role="alert">
        <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${icon}`}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d={iconPath} />
          </svg>
          <span className="sr-only">{type === "success" ? "Check icon" : "Error icon"}</span>
        </div>
        <div className={`ms-3 text-sm font-normal ${text}`}>{message}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={() => setNotificationStatus("")}
        >
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div>
      {notificationStatus && (
        <NotificationToast
          type={notificationStatus}
          message={
            notificationStatus === "success"
              ? "Notification sent successfully!"
              : "Failed to send notification."
          }
        />
      )}
      <button
        onClick={sendNotification}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send Notification
      </button>
    </div>
  );
};

export default PushNotificationComponent;
