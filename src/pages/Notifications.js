import { useEffect } from "react";

const Notifications = (props) => {
  useEffect(() => {
    props.setPage("Notifications");
  }, []);

  return <h1 style={{ color: "white" }}>Notifications page!</h1>;
};

export default Notifications;
