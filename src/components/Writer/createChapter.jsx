import React, { useState } from "react";
import { FormGroup, Label, Input, TextArea } from "./Forms";

const sendBookChapter = (params = {}, setSuccess) => {
    let response;
    let d = new Date();
    let month = d.getMonth() < 10 ? ("0" + d.getMonth()) : d.getMonth();
    let date = d.getFullYear() + "" + month + "" + d.getDate();
    fetch("https://kuebiko-backend.netlify.app/.netlify/functions/api/addChapter", {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ ...params, date: date })
    }).then(res => res.text()).then(data => {
        response = data;
        console.log(response);
        setSuccess(response);
        return response.success;
    });
}

const CreateChapter = ({ Author }) => {
    const [form, setForm] = useState({
        name: "",
        author: Author,
        chapterName: "",
        chapterContent: ""
    });

    const [success, setSuccess] = useState("");

    // const [error, setError] = useState("");

    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        setForm(prevState => ({ ...prevState, [name]: value }))
    };

    return (
        <div data-aos="fade-up" className="mb-5" style={{ border: "2px solid #0061a8", margin: "1px auto", width: "60%", borderRadius: "10px", paddingBottom: "2.5rem" }} >
            {/* <form action="/success" onSubmit={() => sendBookChapter(form)} style={{ all: "unset" }}> */}
            <FormGroup><Label><h1>Author: {Author}</h1></Label></FormGroup>

            <FormGroup><Label><h1>Add Chapter</h1></Label></FormGroup>
            <FormGroup>
                <Label htmlFor="name">Book Name: </Label>
                <Input type="text" name="name" id="name" onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="chapterName">Chapter Name: </Label>
                <Input type="text" name="chapterName" id="chapterName" onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="chapterContent">Chapter Content: </Label>
                <TextArea rows={9} type="text" name="chapterContent" id="chapterContent" onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Input type="submit" value="Create" onClick={() => sendBookChapter(form, setSuccess)} />
            </FormGroup>
            <FormGroup>
                <Label style={{color: "red"}}>{success}</Label>
            </FormGroup>
            {/* <FormGroup><Label><h1>{error}</h1></Label></FormGroup> */}
            {/* </form> */}
        </div>

    );
}

export default CreateChapter;