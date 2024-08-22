import Approach from "@/components/Approach";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="dark:bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        {/* <BuyMeCoffee /> */}
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Client /> */}
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
