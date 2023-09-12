/** @type {import('./$types').PageLoad} */

type Quotable = {
    _id: String,
    content: String,
    author: String,
    authorSlug: String,
    length: Number,
    tags: String[]
}

export async function load({ params }) {
    const result = await fetch("https://api.quotable.io/quotes/random?limit=1").then(result => result.json()) as Quotable[]

    return {
        quote: {
            text: result[0].content,
            author: result[0].author,
            tags: result[0].tags
        }
    };
}