import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-purple-400 font-sans">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold uppercase">Lady Rebel MC</h1>
        <p className="mt-4 text-xl italic">A badass sisterhood on two wheels</p>
        <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800">
          Join the Crew
        </button>
      </header>
      <section className="p-6">
        <h2 className="text-3xl mb-4">Merch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Black Tee', 'White Tee', 'Hoodie'].map((item, i) => (
            <div key={i} className="border border-purple-600 p-4 text-center rounded-xl">
              <div className="h-40 bg-purple-900 mb-2" />
              <p className="mb-2">{item}</p>
              <button className="px-4 py-1 bg-purple-700 text-white rounded">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-3xl mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {Array(8).fill().map((_, i) => (
            <div key={i} className="bg-purple-800 h-32 rounded-lg" />
          ))}
        </div>
      </section>
      <footer className="text-center py-6 border-t border-purple-700 mt-6">
        <p>&copy; 2025 Lady Rebel MC</p>
      </footer>
    </div>
  )
}
