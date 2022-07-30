import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

function About({ data }) {
  // useEffect(() => {
  //   alert("loaded about");
  // },[])

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {JSON.stringify(data)}
      <h1>About</h1>
      <Image
        src="/wallpaper.jpg"
        alt=""
        width="2000"
        height="800"
        layout="responsive"
      />
      <button onClik={() => alert("clicked")}>Click</button>
    </div>
  );
}

// export async function getServerSideProps() {}
export async function getStaticProps(context) {
  // fetch
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default About;
