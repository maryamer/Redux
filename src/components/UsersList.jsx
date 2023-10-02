import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

export default function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  console.log(state);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>{state.data && state.data.map((item) => <p>{item.name}</p>)}</div>
  );
}
