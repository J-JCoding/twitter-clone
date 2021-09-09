import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-state";

const Messages = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setCurPage("Messages"));
  }, [dispatch, props]);

  return <h1 style={{ color: "white" }}>Messages page!</h1>;
};

export default Messages;
