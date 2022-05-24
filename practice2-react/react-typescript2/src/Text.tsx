import { VFC } from "react";

type Props = {
    color: string;
    fontSize: string;
}

// FC 暗黙でchildrenを受け付ける (react.v17まで v.18からは受け付けなくなる？)
// VFC 暗黙でchildrenを受け付けなくなる react.v17までの対策
export const Text: VFC<Props> = (props) => {
    const { color, fontSize } = props;

    return (
        <p style={{ color, fontSize }}>テキストです。</p>
    );
};
