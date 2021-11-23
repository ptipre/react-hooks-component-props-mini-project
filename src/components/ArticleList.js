import React from "react";
import Article from "./Article.js"

function ArticleList({posts}) {

    const artElements = posts.map((post) => {

        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    });

    return (
        <main>{artElements}</main>
    )

    
}

export default ArticleList;