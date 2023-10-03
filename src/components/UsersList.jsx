import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

export default function UsersList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <p>loaing</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.map((item) => <li key={item.id}>{item.name}</li>)}
        </div>
      )}
    </div>
  );
}
