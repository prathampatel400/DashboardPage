export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a2e] mb-4">
            Ready to learn design
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#0a0a2e] mb-8">
            with Nia Matos
          </h2>
          <button className="px-6 py-3 bg-[#ffd7ba] text-[#0a0a2e] rounded-lg hover:bg-[#ffcba7] transition-colors">
            Start Learning Today
          </button>
        </main>
  
        {/* Footer */}
        <footer className="w-full px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Support Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Copyright</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Popular Campaign</a></li>
              </ul>
            </div>
  
            {/* Our Information Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Return Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Site Map</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Store Hours</a></li>
              </ul>
            </div>
  
            {/* My Account Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">My Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press Inquiries</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Social Media</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Directories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Images & B-roll</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Permissions</a></li>
              </ul>
            </div>
  
            {/* Policy Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Application security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Software principles</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Unwanted software policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Responsible supply chain</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  