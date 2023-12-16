import { Container } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Burger, Menu } from "./Hamburger";
import { InfoIcon, Info } from "./InfoBox";
import PrevChapter from "./prevChapter";
import NextChapter from "./nextChapter";
import Speech from "react-speech";
import CommentBox from "./CommentBox";
import Chapter from "./Chapter";
import style from "./style";

function Reader({ bookName }) {
    const [openBurger, setOpenBurger] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [res, setRes] = useState({});
    const [content, setContent] = useState({});
    const [chapterNo, setChapterNo] = useState(0);

    useEffect(() => {
        let newBookName = "";
        for (let index = 0; index < bookName.length; index++) {
            const element = bookName[index] === " " ? "%20" : bookName[index];
            newBookName += element;
        }
        let url = "https://kuebiko-backend.netlify.app/.netlify/functions/api/data/" + newBookName
        fetch(url)
            .then(res => res.json())
            .then(res => setRes(res))
    }, [bookName]);

    useEffect(() => {
        let newBookName = "";
        for (let index = 0; index < bookName.length; index++) {
            const element = bookName[index] === " " ? "%20" : bookName[index];
            newBookName += element;
        }
        // console.log(newBookName);
        let url = "https://kuebiko-backend.netlify.app/.netlify/functions/api/content/" + newBookName /* "The%20King%20of%20Drugs"; */
        fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        })
            .then(res => res.json())
            .then(con => setContent(con))
    }, [bookName]);

    
    return (
        <React.Fragment>
            <Container style={{ width: "75%" }}/>
                <Chapter bookName={res.Name} content={content} chapterNo={chapterNo} />
                <CommentBox />
            
            <div>
                <Burger open={openBurger} setOpen={setOpenBurger} />
                <Menu open={openBurger} chapters={content.InBook && content.InBook} setOpen={setOpenBurger} setChapterNo={setChapterNo} />
            </div>
            <InfoIcon open={openInfo} setOpen={setOpenInfo} />
            <Info open={openInfo} name={res.Name} author={res.Author} date={res.DateOfCreation} number={res.NoOfChapter} />
            <PrevChapter disable={chapterNo === 0} go={setChapterNo} />
            <NextChapter disable={content.InBook && chapterNo === content.InBook.length - 1} go={setChapterNo} />
            
            <Speech
                text={content.InBook && content.InBook[chapterNo]["Content"]}
                pause={true}
                stop={true}
                resume={true}
                styles={style} 
            />
        </React.Fragment>
    );
}

export default Reader;