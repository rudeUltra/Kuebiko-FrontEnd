import { Row } from "react-bootstrap";

export default function Chapter({ bookName, content, chapterNo }) {
    return (
        <div style={{ padding: "1.5rem", boxShadow: " 0 2px 5px 0 grey, 0 2px 15px 0 grey", borderRadius: "20px" }} >
            <Row>
                <span style={{ float: "right", paddingBottom:"",paddingTop:"5%",textAlign:"center" }}>Book Name: {bookName}</span>
            </Row>
            <Row>
                <h1  style={{ display: "block" }}>{content.InBook && content.InBook[chapterNo]["Chapter"]} </h1>
            </Row>
            <Row >
                <p style={{ whiteSpace: "pre-wrap" }}>{content.InBook && content.InBook[chapterNo]["Content"]}</p>
            </Row>
        </div>
    );
}