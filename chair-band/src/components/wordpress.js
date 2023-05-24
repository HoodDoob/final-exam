// wordpress.js

const fetchPosts = async () => {
    const response = await fetch('https://lucaszago.dk/vlp/wp-json/wp/v2/artworks');
    const posts = await response.json();
    return posts;
};
export async function getStaticProps() {

    const posts = await fetchPosts();
    return {
        props: {
            posts,
        },
    };
}

export default fetchPosts;
