import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <meta
          name="description"
          content="Loopstudios landing page using react js"
        />
        <meta
          name="keywords"
          content="react,javascript,flexbox,html,css,html5,css3,nextJS"
        />
        <meta name="author" content="oussama ayadi" />
        <title>Loopstudios landing page | using nextJS</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
