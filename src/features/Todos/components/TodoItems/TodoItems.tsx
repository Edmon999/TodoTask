import { users } from "../../../../constants";
import { useAppSelector } from "../../../../store/hooks";
import { UserCard } from "../UserCard/UserCard";

import styles from "./styles.module.css";

export const TodoItems: React.FC = () => {
  const { usersList } = useAppSelector((state) => state.todo);

  const renderUserList = () => {
    return usersList.map((user) => {
      return <UserCard user={user} />;
    });
  };

  return <div className={styles.wrapper}>{renderUserList()}</div>;
};
