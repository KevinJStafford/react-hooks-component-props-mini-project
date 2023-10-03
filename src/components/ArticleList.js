import React from "react"
import Article from "./Article"

function ArticleList(props) {
    console.log(props.post)
    return (
        <main>
            {props.posts.map((post) => {
              return <Article key={props.posts.id} title={props.posts.title} date={props.posts.date} preview={props.posts.preview} />}
            )}
        </main>
    )
}

export default ArticleList;