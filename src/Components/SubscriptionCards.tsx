// import React from 'react';

// interface SubscriptionCardsProps {
// subscriptionType: string;
// }

// const SubscriptionCards: React.FC<SubscriptionCardsProps> = ({ subscriptionType }) => {
// return (
// <section>
// {/* Render different cards based on subscriptionType */}
// {subscriptionType === 'monthly' && (
// <div>
// {/* Monthly subscription cards */}
// </div>
// )}

// {subscriptionType === 'yearly' && (
// <div>
// {/* Yearly subscription cards */}
// </div>
// )}
// </section>
// );
// };

// export default SubscriptionCards;


import React from 'react';

interface CardSectionProps {
showMonthly: boolean;
}

const SubscriptionCards: React.FC<CardSectionProps> = ({ showMonthly }) => {
return (
    <div className='row'>
<div className="flex flex-wrap " style={{display:'flex', flexDirection:'row', marginLeft:'20px', padding:'20px'}}>
{showMonthly ? (
<>
<div className="w-full lg:w-1/3" >
<div className="card"  >
<h3 className="card-title">Card 1 Monthly</h3>
<p className="card-description">Card 1 description for monthly</p>
</div>
</div>
<div className="w-full lg:w-1/3">
<div className="card">
<h3 className="card-title">Card 2 Monthly</h3>
<p className="card-description">Card 2 description for monthly</p>
</div>
</div>
<div className="w-full lg:w-1/3">
<div className="card">
<h3 className="card-title">Card 3 Monthly</h3>
<p className="card-description">Card 3 description for monthly</p>
</div>
</div>

</>
) : (
<>
<div className="w-full lg:w-1/3">
<div className="card">
<h3 className="card-title">Card 1 Yearly</h3>
<p className="card-description">Card 1 description for yearly</p>
</div>
</div>
<div className="w-full lg:w-1/3">
<div className="card">
<h3 className="card-title">Card 2 Yearly</h3>
<p className="card-description">Card 2 description for yearly</p>
</div>
</div>
<div className="w-full lg:w-1/3">
<div className="card">
<h3 className="card-title">Card 3 Yearly</h3>
<p className="card-description">Card 3 description for yearly</p>
</div>
</div>
</>
)}
</div>
</div>
);
};

export default SubscriptionCards;