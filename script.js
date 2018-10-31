"use strict"

$(document).ready(() => {
        $.get("https://www.reddit.com/r/aww.json").then((response) => {
        const children = response.data.children;
        for (let i = 2; i < 10; i++) {
            $(".all-items").append(`
            <section class="items">
                <h3>${children[i].data.title}</h3>
                <p>By: ${children[i].data.author}</p>
                <img src="${children[i].data.preview.images["0"].source.url}">
                <p>Ups: ${children[i].data.ups}</p>
                <p>Comments: ${children[i].data.num_comments}</p>
                <p>Created On: ${children[i].data.created}</p>
            </section>
            `);
        };
        });
})