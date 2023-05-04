
function page({ params }) {
    return (
        <div>
            <p>This is for {params.id}</p>
        </div>
    );
}

export default page;