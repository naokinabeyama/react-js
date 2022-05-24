import { VFC } from "react";
import { TodoType } from "./types/todo";


// Pick 使用したい型を指定
// Omit 不必要な型を指定
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";

    return (
        <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
    );
};
