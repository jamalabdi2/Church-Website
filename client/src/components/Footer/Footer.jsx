import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">천진중앙교회 교육관</h3>
            <p className="mb-2">강원도 고성군 토성면</p>
            <p className="mb-2"> 천진7길 12</p>
            <p>Phone: 070-7786-9192</p>
        

          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-300 transition duration-300">Home</a></li>
              <li><a href="#yearly-activities" className="hover:text-blue-300 transition duration-300">Activities</a></li>
              <li><a href="#officials" className="hover:text-blue-300 transition duration-300">Members</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition duration-300">
                <FaFacebook/>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition duration-300">
                <FaTwitter/>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition duration-300">
                <FaInstagram/>
              </a>
              <a href="https://www.youtube.com/@icwc6019/videos" className="text-white hover:text-blue-300 transition duration-300">
                <FaYoutube/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Kyungdong Global Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;