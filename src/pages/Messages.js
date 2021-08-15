import { useEffect } from "react";

const Messages = (props) => {
  useEffect(() => {
    props.setPage("Messages");
  }, []);

  return <h1 style={{ color: "white" }}>Messages page!</h1>;
};

export default Messages;
