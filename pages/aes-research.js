import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AESResearchPage = () => {
  return (
    <>
      <Head>
        <title>AES Research Paper - Eve Wang</title>
        <meta name="description" content="Advanced Encryption Standard research with science fair presentation and international collaboration" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="header-gradient py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold mb-6 transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
              AES Research Paper
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Further Plan</h2>
            
            {/* 3-column responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Research Report */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Research Report</h3>
                <p className="text-gray-600 mb-4">In-school Honorable Mention research paper</p>
                <div className="h-[480px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-center">PDF will open in modal when clicked</p>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Report
                </button>
              </div>

              {/* Card 2: Science Fair Paper */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Science Fair Paper (Honorable Mention)</h3>
                <p className="text-gray-600 mb-4">Science fair presentation paper</p>
                <div id="science-fair-pdf"></div>
                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Paper
                </button>
              </div>

              {/* Card 3: Science Fair Slides */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Science Fair Slides</h3>
                <p className="text-gray-600 mb-4">Presentation slides for science fair</p>
                <div id="science-fair-slides-pdf"></div>
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Slides
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Galleries Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Intern Pics */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Intern Pics (NSRRC)</h3>
                <p className="text-gray-600 mb-4">Photos from internship at National Synchrotron Radiation Research Center</p>
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-center">Intern photos coming soon</p>
                </div>
              </div>

              {/* Japan Photos */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Japan 發表 (Waseda/Mito HS)</h3>
                <p className="text-gray-600 mb-4">Research presentation at Waseda University and Mito High School</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                </div>
              </div>

              {/* Science Fair Photos */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Science Fair 發表</h3>
                <p className="text-gray-600 mb-4">Science fair presentation and competition photos</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AESResearchPage;




