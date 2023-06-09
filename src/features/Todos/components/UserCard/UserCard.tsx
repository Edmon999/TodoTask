import { ITodoItem } from "../../../../interfaces";

import styles from "./styles.module.css";
// 

interface IUserCardProps {
  user: ITodoItem;
}

export const UserCard: React.FC<IUserCardProps> = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <p>title: {user.title}</p>
      <p>description: {user.description}</p>
      <p>deadline: {user.deadline}</p>
    </div>
  );
};
