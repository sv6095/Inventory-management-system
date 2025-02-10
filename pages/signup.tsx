import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <input type="text" placeholder="Full Name" className="mb-3 p-2 rounded text-black"/>
        <input type="email" placeholder="Email" className="mb-3 p-2 rounded text-black"/>
        <input type="password" placeholder="Password" className="mb-3 p-2 rounded text-black"/>
        <button className="bg-green-500 px-4 py-2 rounded-lg">Sign Up</button>
      </div>
      <Footer />
    </div>
  );
}
