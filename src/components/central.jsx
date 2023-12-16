import React from "react";

function Central() {

    const centralH1 = {
        marginTop: "0.2em",
        fontFamily: "Noe Display",
        fontSize: "5em",
        color: "rgb(0, 0, 0)",
        backgroundColor: "transparent"
    };

    const centralH4 = {
        marginTop: "1em",
        fontSize: "1em",
        /* color:#ffff; */
        backgroundColor: "transparent"
      };

    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "transparent"
        }}>
            <h1 style={centralH1}>Kuebiko</h1>
            <h4 style={centralH4}>An Inclusive novel reading and writing website....</h4>
        </div>
    );
}

export default Central;