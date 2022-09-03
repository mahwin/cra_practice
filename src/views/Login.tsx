import { proxy, useSnapshot } from "valtio";
import User from "../entity/User";

const model = proxy(new User());

export default function Login() {
  const user = useSnapshot(model);
  const edit = () => {
    //이렇게 직접 변경할 수 있음 immer js 랑 비슷하네.
    model.name = "변경";
  };
  return (
    <div>
      <div>id: {user.id}</div>
      <div>name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>level: {user.level}</div>
      <div>gender: {user.gender}</div>
      <div>age: {user.age}</div>
      <p>{user.getAdultLabel()}</p>
    </div>
  );
}
