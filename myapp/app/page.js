import Image from 'next/image'
import Link from 'next/link'
import footer from "./footer.jsx";

export default function Home() {
  return (
      <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            CytoUI
          </a>
          <div>
            <a href="/about" className="text-gray-700 hover:text-gray-900 ml-4">
              About
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 ml-4">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 ml-4">
              Contact
            </a>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded ml-4">
                Login
            </Link>
            <Link href="/register" className="bg-transparent text-blue-600 border border-blue-600 px-4 py-2 rounded ml-4">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-48">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            CytoUI - Empower Your Flow Cytometry Analysis
          </h1>
          <p className="text-xl">
            Simplify flow cytometry data visualization and analysis with CytoUI
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blue-400 font-bold mb-8 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-opacity-75 rounded-full shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Dashboard Creation</h3>
                <p className="text-white">Effortlessly build interactive dashboards to visualize your flow cytometry data.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-opacity-75 rounded-full shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Data Visualization</h3>
                <p className="text-white">Generate stunning visual representations of your flow cytometry experiments.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-opacity-75 rounded-full shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Analysis Tools</h3>
                <p className="text-white">Utilize advanced analysis tools to extract meaningful insights from your data.</p>
            </div>
            </div>
        </div>
        </section>



      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" bg-white rounded shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-black">John Doe</h3>
                <p className="text-black">"CytoUI revolutionized the way I analyze flow cytometry data. It's intuitive and powerful."</p>
            </div>
            <div className="bg-white rounded shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-black">Jane Smith</h3>
                <p className="text-black">"I've been using CytoUI for my research, and it has simplified the analysis process immensely."</p>
            </div>
            <div className="bg-white rounded shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-black">Michael Johnson</h3>
                <p className="text-black">"The visualization capabilities of CytoUI are outstanding. It's a game-changer for flow cytometry analysis."</p>
            </div>
            </div>
        </div>
        </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-lightble rounded shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p>Perfect for individual researchers</p>
              <p className="text-blue-600 font-bold">$9/month</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Choose Plan</button>
            </div>
            <div className="bg-lightblue rounded shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p>Great for small labs and teams</p>
              <p className="text-blue-600 font-bold">$29/month</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Choose Plan</button>
            </div>
            <div className="bg-lightblue rounded shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p>Custom solutions for large organizations</p>
              <p className="text-blue-600 font-bold">Contact Us</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* footer section */}
      <footer className="grotesk bg-grey-300 h-50">
          <div className="max-w-8xl mx-auto px-5 py-24 text-black h-50">
            <div className="order-first flex flex-wrap text-left">
              <div className="w-full px-4 md:w-2/4 lg:w-1/5">
                <h2 className="mb-3 text-lg tracking-widest">Est.</h2>
                <nav className="list-none space-y-2 py-3">
                  <li>
                    <a href="/">Vitae nec.</a>
                  </li>
                  <li>
                    <a href="/">Purus</a>
                  </li>
                  <li>
                    <a href="/">Nibh.</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-2/4 lg:w-1/5">
                <h2 className="mb-3 text-lg tracking-widest">Et.</h2>
                <nav className="mb-10 list-none space-y-2 py-3">
                  <li>
                    <a href="/">Ninc elementum.</a>
                  </li>
                  <li>
                    <a href="/">Sit ac interdum</a>
                  </li>

                </nav>
              </div>
              <div className="w-full px-4 md:w-2/4 lg:w-1/5">
                <h2 className="mb-3 text-lg tracking-widest">Placerat.</h2>
                <nav className="mb-10 list-none space-y-2 py-3">
                  <li>
                    <a href="/">Et cursus fringilla.</a>
                  </li>
                  <li>
                    <a href="/">In velit sagittis.</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-2/4 lg:w-1/5">
                <h2 className="mb-3 text-lg tracking-widest">Messa.</h2>
                <nav className="mb-10 list-none space-y-2 py-3">
                  <li>
                    <a href="/">Id.</a>
                  </li>
                  <li>
                    <a href="/">Aliquam.</a>
                  </li>
                  <li>
                    <a href="/">Interdum.</a>
                  </li>
                  <li>
                    <a href="/">Risus.</a>
                  </li>
                </nav>
              </div>
              <div className="w-full md:w-2/4 lg:w-1/5">
                <a href="/">
                  <div className="relative border border-black transition hover:border-gray-500">
                    <div className="absolute top-0 right-0 pt-2 pr-2">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66992 0.747559L0.669922 6.74756"
                          stroke="black"
                        />
                        <path
                          d="M0.669922 0.747559H6.66992V6.74756"
                          stroke="black"
                        />
                      </svg>
                    </div>
                    <div className="p-6">
                      CytoUI is your next go-to flow cytometry analysis tool.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="px-2">
              <div className="centre-0 -mt-15 hidden text-black py-2 lg:inline-block">
                <a href="/" className="mr-16">
                  Terms & Conditions
                </a>
                <a href="/" className="mr-16">
                  Privacy Policy
                </a>
                <a href="/" className="mr-16">
                  Cookie Policy
                </a>
              </div>
            </div>
        </footer>

      </div>
  )
}
