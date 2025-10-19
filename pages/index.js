import React from 'react';
import Head from 'next/head';
import PortfolioCard from '../components/PortfolioCard';

const HomePage = () => {
  const portfolioItems = [
    {
      title: "AES Research Paper",
      desc: "[description]",
      href: "/aes-research",
      imgSrc: "/images/AESindex.png",
      imgAlt: "AES Research Paper cover image"
    },
    {
      title: "Linguistic Research",
      desc: "[description]",
      href: "/linguistic-research",
      imgSrc: "/images/linguistic-research-cover.jpg",
      imgAlt: "Linguistic Research cover image"
    },
    {
      title: "TEDx Speech",
      desc: "[description]",
      href: "/tedx-speech",
      imgSrc: "/images/tedx-speech-cover.jpg",
      imgAlt: "TEDx Speech cover image"
    },
    {
      title: "Physics Club",
      desc: "[description]",
      href: "/physics-club",
      imgSrc: "/images/physics-club-cover.jpg",
      imgAlt: "Physics Club cover image"
    },
    {
      title: "Congruence",
      desc: "[description]",
      href: "/congruence",
      imgSrc: "/images/congruence-cover.jpg",
      imgAlt: "Congruence project cover image"
    },
    {
      title: "Physics & Math School",
      desc: "[description]",
      href: "/physics-math-school",
      imgSrc: "/images/physics-math-cover.jpg",
      imgAlt: "Physics & Math School cover image"
    }
  ];

  return (
    <>
      <Head>
        <title>Eve Wang - Portfolio</title>
        <meta name="description" content="Eve Wang's academic portfolio showcasing research, presentations, and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section with Gradient */}
        <header className="bg-gradient-to-br from-green-200 to-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Eve Wang
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic Portfolio - Research, Presentations & Projects
            </p>
          </div>
        </header>

        {/* Portfolio Grid Section */}
        <main className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Featured Projects
            </h2>
            
            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-300">
              © 2024 Eve Wang. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
