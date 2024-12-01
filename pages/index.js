import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import About from "@/sections/about";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Contact = dynamic(() => import("@/sections/Contact"))


const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Mine Portfolio</title>
      </Head>
      <div>
        <div>
        
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* SocialMedia */}
          {/* LatestBlog */}
          <LatestBlogs />
          <Contact/>
          {/* Apps */}
          {/* Footer */}
          <Footer />
          <div className="z-40">
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home
