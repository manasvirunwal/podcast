// import React from 'react';

// const Cards: React.FC = () => {
// return (
// <section>
// {/* Cards content */}
// </section>
// );
// };

// export default Cards;

import React from 'react';
import './styles.css';

const Cards: React.FC = () => {
return (
<div className="flex items-start justify-between bg-gray-100 py-6 px-4">
<div className="w-1/2 space-y-4">
<div className="bg-white p-4 shadow-md rounded-lg">
<h3 className="text-xl font-semibold text-gray-800">Card 1</h3>
<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className="bg-white p-4 shadow-md rounded-lg">
<h3 className="text-xl font-semibold text-gray-800">Card 2</h3>
<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className="bg-white p-4 shadow-md rounded-lg">
<h3 className="text-xl font-semibold text-gray-800">Card 3</h3>
<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className="bg-white p-4 shadow-md rounded-lg">
<h3 className="text-xl font-semibold text-gray-800">Card 4</h3>
<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
<div className="w-1/2">
<h2 className="text-4xl font-bold text-gray-800">Right Side Text</h2>
<p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">
Button
</button>
</div>
</div>
);
};

export default Cards;