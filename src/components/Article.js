import React from "react";

function Article({ key, title, date, preview }){
    return(
        <article key={key}>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
    )
       
}

export default Article;