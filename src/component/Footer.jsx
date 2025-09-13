
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-amber-700 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">


                <div>
                    <h2 className="text-2xl font-bold">SocioHub</h2>
                    <p className="mt-3 text-sm text-gray-200">
                        A mini social media platform for developers.
                        Connect, share posts, and collaborate.
                    </p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-3">Pages</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                        <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
                        <li><Link to="/register" className="hover:text-yellow-300">Register</Link></li>
                        <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
                        <li><Link to="/post" className="hover:text-yellow-300">Post</Link></li>
                        <li><Link to="/bookmark" className="hover:text-yellow-300">Bookmark</Link></li>
                        <li><Link to="/settings" className="hover:text-yellow-300">Settings</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p>Email: <a href="ppoudelp12@gmail.com" className="hover:text-yellow-300">ppoudelp12@gmail.com</a></p>
                    <p>Phone: <a href="tel:+977-9867584436" className="hover:text-yellow-300">+977 9867584436</a></p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
