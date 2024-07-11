
// import React from "react";
// import {
//   AlbertImage,
//   AnthonyMrefuImage,
//   ElmaImage,
//   EnnyKathiaImage,
//   EuniceFaustinImage,
//   JesseJerryCarrelImage,
//   JoelMwendeImage,
//   KenanWafulaMasindeImage,
//   LauriaBudanagiImage,
//   LievinNtakarutimanaImage,
//   MarieEllaImage,
//   MosesMukiibiImage,
//   NatusFrancisImage,
//   PatriciaNamagandaImage,
//   PastorImage,
//   RoyInnocentImage,
//   TusiimireLamsonImage,
//   DeboraImage,
//   AshuraImage,
//   ProfKwonImage,
//   EmmanuelImage,
//   SponsorsImage,
// } from "./Images";

// const placeholderImage = "https://via.placeholder.com/150";

// const Leaders = [
//   { name: "Benjamin", image: PastorImage, role: ["Senior Pastor"] },
//   { name: "Elma", image: ElmaImage, role: ["Assistant Pastor", "Administration leaders"] },
//   { name: "Ashura Ngwashi Makoba", image: AshuraImage, role: ["Administration leader", "Media Team"] },
//   { name: "Dr Kwon", image: ProfKwonImage, role: ["Senior Elder"] },
//   { name: "Mr JK Lee", image: SponsorsImage, role: ["Senior Elder"] },
//   { name: "Kenan Wafula Masinde", image: KenanWafulaMasindeImage, role: ["Media Team"] },
//   { name: "Joel Mwende", image: JoelMwendeImage, role: ["Media Team"] },
//   { name: "Tusiimire Lamson", image: TusiimireLamsonImage, role: ["Media Team", "Finance Management"] },
//   { name: "Debora", image: DeboraImage, role: ["Finance Management", "Hospitality"] },
//   { name: "Namaganda Patricia", image: PatriciaNamagandaImage, role: ["Hospitality"] },
//   { name: "Nirera Marie Ella", image: MarieEllaImage, role: ["Hospitality"] },
//   { name: "Gaparaye jerry Jesse", image: JesseJerryCarrelImage, role: ["Event planner"] },
//   { name: "Budanagi Lauria", image: LauriaBudanagiImage, role: ["Event planner"] },
//   { name: "Rwotngeyo Roy Innocent", image: RoyInnocentImage, role: ["Event planner"] },
//   { name: "Mukiibi Mosses", image: MosesMukiibiImage, role: ["Instrumentalist"] },
//   { name: "Ntakarutimana Lievin", image: LievinNtakarutimanaImage, role: ["Instrumentalist"] },
//   { name: "Natus Fransics", image: NatusFrancisImage, role: ["Instrumentalist"] },
//   { name: "Emmanuel", image: EmmanuelImage, role: ["Instrumentalist"] },
//   { name: "Albert Nshimirimana", image: AlbertImage, role: ["Choir"] },
//   { name: "Susani Anthony Mrefu", image: AnthonyMrefuImage, role: ["Choir"] },
//   { name: "Eunice Faustin", image: EuniceFaustinImage, role: ["Choir"] },
//   { name: "Enny Kathia", image: EnnyKathiaImage, role: ["Choir"] },
// ];

// function Officials() {
//   return (
//     <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Leaders</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {Leaders.map((leader, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <img 
//               src={leader.image || placeholderImage} 
//               alt={leader.name} 
//               className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-center text-gray-900">{leader.name}</h3>
//             <p className="text-sm text-center text-gray-600">{leader.role.join(", ")}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Officials;
import React from "react";
import {
  AlbertImage,
  AnthonyMrefuImage,
  ElmaImage,
  EnnyKathiaImage,
  EuniceFaustinImage,
  JesseJerryCarrelImage,
  JoelMwendeImage,
  KenanWafulaMasindeImage,
  LauriaBudanagiImage,
  LievinNtakarutimanaImage,
  MarieEllaImage,
  MosesMukiibiImage,
  NatusFrancisImage,
  PatriciaNamagandaImage,
  PastorImage,
  RoyInnocentImage,
  TusiimireLamsonImage,
  DeboraImage,
  AshuraImage,
  ProfKwonImage,
  EmmanuelImage,
  SponsorsImage,
} from "./Images";

const placeholderImage = "https://via.placeholder.com/150";

const Leaders = [
  { name: "Benjamin Ndih", image: PastorImage, role: ["Senior Pastor"] },
  { name: "Elma Carmen", image: ElmaImage, role: ["Assistant Pastor", "Administration leaders"] },
  { name: "Ashura Ngwashi Makoba", image: AshuraImage, role: ["Administration leader", "Media Team"] },
  { name: "Dr Kwon", image: ProfKwonImage, role: ["Senior Elder"] },
  { name: "Mr JK Lee", image: SponsorsImage, role: ["Senior Elder"] },
  { name: "Kenan Wafula Masinde", image: KenanWafulaMasindeImage, role: ["Media Team"] },
  { name: "Joel Mwende", image: JoelMwendeImage, role: ["Media Team"] },
  { name: "Tusiimire Lamson", image: TusiimireLamsonImage, role: ["Media Team", "Finance Management"] },
  { name: "Debora", image: DeboraImage, role: ["Finance Management", "Hospitality"] },
  { name: "Namaganda Patricia", image: PatriciaNamagandaImage, role: ["Hospitality"] },
  { name: "Nirera Marie Ella", image: MarieEllaImage, role: ["Hospitality"] },
  { name: "Gaparaye jerry Jesse", image: JesseJerryCarrelImage, role: ["Event planner"] },
  { name: "Budanagi Lauria", image: LauriaBudanagiImage, role: ["Event planner"] },
  { name: "Rwotngeyo Roy Innocent", image: RoyInnocentImage, role: ["Event planner"] },
  { name: "Mukiibi Mosses", image: MosesMukiibiImage, role: ["Instrumentalist"] },
  { name: "Ntakarutimana Lievin", image: LievinNtakarutimanaImage, role: ["Instrumentalist"] },
  { name: "Natus Fransics", image: NatusFrancisImage, role: ["Instrumentalist"] },
  { name: "Emmanuel", image: EmmanuelImage, role: ["Instrumentalist"] },
  { name: "Albert Nshimirimana", image: AlbertImage, role: ["Choir"] },
  { name: "Susani Anthony Mrefu", image: AnthonyMrefuImage, role: ["Choir"] },
  { name: "Eunice Faustin", image: EuniceFaustinImage, role: ["Choir"] },
  { name: "Enny Kathia", image: EnnyKathiaImage, role: ["Choir"] },
];
function Officials() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Our Church Leaders
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Leaders.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={leader.image || placeholderImage}
                  alt={leader.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-xl font-semibold text-white p-4 w-full bg-black bg-opacity-60">
                    {leader.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {leader.role.map((role, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Officials;



