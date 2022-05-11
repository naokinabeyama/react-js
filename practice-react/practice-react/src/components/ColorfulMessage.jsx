const ColorfullMessage = (props) => {
    const { color, children } = props;
    const contentStyle = {
        // ↓プロパティ名と当てはめる名前が一緒なら省略できる
        color,
        // color: color,
        fontSize: '18px'
    };

    return (
        // <p style={contentStyle}>{props.message}</p>
        <p style={contentStyle}>{children}</p>
    );

};

export default ColorfullMessage;
