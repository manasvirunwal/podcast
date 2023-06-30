import React from 'react';

const Footer: React.FC = () => {
return (
<footer className="bg-gray-800 text-white py-4 px-6">
<div className="container mx-auto flex justify-between items-center">
<p className="text-sm">© 2023 Your Company. All rights reserved.</p>
<div>
<a href="#" className="text-gray-300 hover:text-white ml-4">
Privacy Policy
</a>
<a href="#" className="text-gray-300 hover:text-white ml-4">
Terms of Service
</a>
</div>
</div>
</footer>
);
};

export default Footer;