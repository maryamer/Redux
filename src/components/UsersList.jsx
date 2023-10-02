import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

export default function UsersList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
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
      {/* {data && data.map((item) => <p>{item.name}</p>)} */}
    </div>
  );
}
