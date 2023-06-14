import Image from 'next/image'
import Link from 'next/link'

function AboutPage() {
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
  
        {/* About Section */}
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-48">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              About CytoUI
            </h1>
            <p className="text-xl">
              CytoUI is a powerful tool for flow cytometry data visualization and analysis.
            </p>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blue-400 font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-gray-800 text-lg mb-8">
              At CytoUI, our mission is to simplify flow cytometry analysis and empower researchers to extract meaningful insights from their data. We provide intuitive and powerful tools for creating interactive dashboards, visualizing experiments, and performing advanced analysis. Our goal is to revolutionize the way flow cytometry data is analyzed, making it accessible to researchers of all levels.
            </p>
  
            <h2 className="text-3xl text-blue-400 font-bold mb-8 text-center">Why Choose CytoUI</h2>
            <p className="text-gray-800 text-lg mb-8">
              With CytoUI, you can streamline your flow cytometry analysis workflow and save valuable time. Our platform offers a wide range of features designed to enhance your data visualization and analysis capabilities. From building interactive dashboards to generating stunning visual representations of your experiments, CytoUI provides the tools you need to gain deeper insights into your flow cytometry data.
            </p>
  
            <h2 className="text-3xl text-blue-400 font-bold mb-8 text-center">Get Started Today</h2>
            <p className="text-gray-800 text-lg mb-8">
              Ready to take your flow cytometry analysis to the next level? Sign up for a free trial of CytoUI today and experience the power of simplified data analysis. Whether you're an individual researcher or part of a larger organization, CytoUI has the tools and features to meet your needs. Unlock the potential of your flow cytometry data and accelerate your research with CytoUI.
            </p>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">&copy; 2023 CytoUI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

export default AboutPage;
