<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Quotable</h1>
<p>This is a test page to demonstrate page.ts file.</p>
<p>Here's a quote: </p>
<p>
    <q>{data.quote.text}</q> -{data.quote.author} <br />
    tags: {data.quote.tags}
</p>
<p>Powered by <a href="https://github.com/lukePeavey/quotable#get-random-quotes">Quotable</a></p>