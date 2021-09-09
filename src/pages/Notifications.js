import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-state";

const Notifications = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setCurPage("Notifications"));
  }, [dispatch, props]);

  return <h1 style={{ color: "white" }}>Notifications page!</h1>;
};

export default Notifications;
