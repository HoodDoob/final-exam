export default function Wordpress(props) {
  console.log(props.images);
  return (
    // <div></div>
    <img src={props.images} alt="sdfsdf"></img>
    // <ul>
    //   {posts.map((post) => (
    //     <li>{post.id}</li>
    //   ))}
    // </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export async function getStaticProps() {
//   const res = await fetch("https://lucaszago.dk/vlp/wp-json/wp/v2/artworks");
//   const artworks = await res.json();
//   return {
//     props: {
//       artworks,
//     },
//   };
// }
