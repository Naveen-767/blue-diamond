// 'use client';

// import OfferCard from '@/components/OfferCard';
// import { Gift } from 'lucide-react';

// const offers = [
//   {
//     title: 'First Visit Special',
//     description: 'New to EliteCuts? Get an exclusive discount on your first premium haircut and grooming service.',
//     discount: '25% OFF',
//     validUntil: 'December 31, 2024',
//     code: 'FIRST25',
//   },
//   {
//     title: 'Midweek Madness',
//     description: 'Book any service Tuesday through Thursday and enjoy special pricing on all our premium packages.',
//     discount: '20% OFF',
//     validUntil: 'Ongoing',
//     code: 'MIDWEEK20',
//   },
//   {
//     title: 'Grooming Package Deal',
//     description: 'Complete grooming package including haircut, beard trim, and facial treatment at an unbeatable price.',
//     discount: '$30 OFF',
//     validUntil: 'January 15, 2025',
//     code: 'GROOM30',
//   },
//   {
//     title: 'Student Discount',
//     description: 'Valid student ID holders receive a special discount on all haircut services year-round.',
//     discount: '15% OFF',
//     validUntil: 'Always Valid',
//     code: 'STUDENT15',
//   },
//   {
//     title: 'Loyalty Reward',
//     description: 'Visit us 5 times and get your 6th haircut completely free. Premium care for our regular clients.',
//     discount: 'FREE CUT',
//     validUntil: 'Loyalty Program',
//     code: 'LOYAL6TH',
//   },
//   {
//     title: 'Weekend Warriors',
//     description: 'Book your Saturday or Sunday appointment and get premium styling products at half price.',
//     discount: '50% OFF',
//     validUntil: 'Every Weekend',
//     code: 'WEEKEND50',
//   },
// ];

// export default function Offers() {
//   return (
//     <div className="min-h-screen bg-black pt-20">
//       <div
//         className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
//         <div className="relative text-center px-4">
//           <div className="inline-flex items-center space-x-2 mb-4 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
//             <Gift className="h-4 w-4 text-amber-500" />
//             <span className="text-amber-500 text-sm font-semibold tracking-wider">
//               EXCLUSIVE DEALS
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Special <span className="text-amber-500">Offers</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Take advantage of our premium grooming services at exceptional prices
//           </p>
//         </div>
//       </div>

//       <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Current <span className="text-amber-500">Promotions</span>
//             </h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//               Limited time offers designed to give you the best value for premium grooming
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {offers.map((offer, index) => (
//               <div
//                 key={index}
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
//                 }}
//               >
//                 <OfferCard {...offer} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-12 md:p-16">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                   Join Our VIP Club
//                 </h2>
//                 <p className="text-gray-400 text-lg mb-6 leading-relaxed">
//                   Become a VIP member and unlock exclusive benefits including priority booking, special discounts, and members-only events.
//                 </p>
//                 <ul className="space-y-3 mb-8">
//                   {[
//                     'Priority appointment scheduling',
//                     'Exclusive member-only pricing',
//                     'Birthday month special offers',
//                     'Early access to new services',
//                   ].map((benefit, index) => (
//                     <li key={index} className="flex items-center text-gray-300">
//                       <div className="h-2 w-2 rounded-full bg-amber-500 mr-3" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="px-8 py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
//                   Become a VIP Member
//                 </button>
//               </div>
//               <div className="relative">
//                 <div className="absolute inset-0 bg-amber-500/20 blur-3xl" />
//                 <img
//                   src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="VIP Member"
//                   className="relative rounded-xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
