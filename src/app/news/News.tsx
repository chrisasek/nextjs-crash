import Image from "next/image";
import Link from "next/link";

function News({ article }) {
    const link = article.url;
    const imgUrl = article.urlToImage;
    return (
        <Link href="/news/" className="col-lg-3" >
            <div className="bg-light shadow-sm border-0 card mb-4">
                <Image width={100} height={100} src={imgUrl} alt="Picture of the author" className="img-fluid" />
                <div className="card-body">
                    <p className="fw-bold mb-0">{article.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default News;