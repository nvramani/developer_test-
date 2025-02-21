"use client";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import HeaderN from "@/components/Header/HeaderN";
import HomeSection from "@/components/HomeSection";
import CardGrid from "@/components/HomeSection/CardGrid";
import HorizontalCards from "@/components/HomeSection/HorizontalCards";
import LatestBlog from "@/components/HomeSection/LatestBlog";
import MemberSuccess from "@/components/HomeSection/MemberSuccess";
import Wireframe from "@/components/HomeSection/Wireframe";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeaderN />
      <HomeSection />
      <CardGrid />
      <Wireframe />
      <HorizontalCards />
      <LatestBlog />
      <MemberSuccess />
      <Footer />
    </>
  );
}
