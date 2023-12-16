import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const AllBooks = ({ setBookName }) => {
    const [books, setBooks] = useState([]);

    const history = useHistory();

    const handleClick = (bookName) => {
        setBookName(bookName, () => {
            history.push("/reader");
        });
    }
    useEffect(() => {
        fetch("https://kuebiko-backend.netlify.app/.netlify/functions/api/allbooks")
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    console.log(response);
                    setBooks(response.allBooks);
                } else {
                    console.log(response.message);
                }
            })
    }, []);
    return (
        <div className="container">
            {console.log(books)}
            {books && books.map(element => (
                <div
                    className="col-lg-12 m-3 p-4 text-center hvr-grow"
                    onClick={() => handleClick(element.Name)}
                    style={{ background:"rgb(182, 255, 206)", borderRadius:"15px", cursor: "pointer"}}
                >{element.Name}</div>
            ))}
        </div>

    );
}

export default AllBooks;