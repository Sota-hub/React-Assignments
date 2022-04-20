import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../model/IUser";
import { UserService } from "../services/UserService";

interface UserDetailProps {}

interface IState {
  loading: boolean;
  user: IUser;
  errorMessage: string;
}

const UserDetail: React.FC<UserDetailProps> = () => {
  const param = useParams();

  const [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUser,
    errorMessage: "",
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: !prev.loading }));

    UserService.getUser(param.userId!)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          user: response.data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      });
  }, []);

  if (state.loading) {
    return <div>LOADING......</div>;
  }

  if (state.errorMessage) {
    return <div>404({state.errorMessage})</div>;
  }

  return (
    <table className="table text-center table-striped">
      <thead className="bg-success text-white">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {state.user && (
          <tr>
            <td>{state.user.id}</td>
            <td>{state.user.name}</td>
            <td>{state.user.email}</td>
            <td>{state.user.phone}</td>
            <td>{state.user.company?.name}</td>
            <td>{state.user.website}</td>
          </tr>
        )}
      </tbody>
      {!state.user && <p>No user found...</p>}
    </table>
  );
};

export default UserDetail;
