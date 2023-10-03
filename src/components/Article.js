import React from "react";
import blogData from "../data/blog";

function Article(props){
    return({key=blogData.posts.id }, {title=blogData.posts.title}, {date=blogData.posts.date}, {preview=blogData.posts.preview}, {minutes=blogData.posts.minutes})
}