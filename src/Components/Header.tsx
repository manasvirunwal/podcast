import React from 'react';




const Header: React.FC = () => {
return (
<header className="bg-gray-800 py-4">
<div className="container flex items-center justify-between">
<div className="flex items-center">
{/* <img src="/logo.png" alt="Logo" className="h-6" /> */}
<h1>LOGO</h1>
</div>
<nav className="flex items-space-x-8">
<a href="#" className="text-white hover:text-gray-300">About</a>
<a href="/SubscriptionCards" className="text-white hover:text-gray-300">     Pricing</a>
<a href="/Review"   className="text-white hover:text-gray-300">     Reviews</a>
</nav>
</div>
</header>
);
};

export default Header;