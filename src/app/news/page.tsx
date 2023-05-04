import News from "./News";

async function getPosts() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3247293412b44e98a91fc7aa05dd205e`)
    const data = await res.json()

    return data
}

async function Page() {
    const postData = await getPosts();
    const articles = postData.articles;
    console.log(articles)

    return (
        <div className="container">
            <div className="mt-5 mb-4">
                <h4 className="">Top Headlines</h4>
            </div>

            <div className="row">
                {articles.map((article) => (
                    <News key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}

export default Page;