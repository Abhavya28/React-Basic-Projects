function MessageBox({userName,textColor}){
    let styles = {color: textColor};
    return (
        <div>
            <h1 style={styles} >"Hello,{userName}"</h1>
        </div>
    )
}

export default MessageBox;