// import React from 'react'
// import churchPhoto from "../../static/churchPicture.png"
// import kyungdongUniversity from "../../static/kyungdong.jpg"

// function Location() {
//   return (
//     <div className="container mx-auto px-4 py-12 bg-gray-100">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Church Location 교회 위치</h1>
      
//       <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//         <div className="w-full md:w-1/2">
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12531.647285683453!2d128.5566161!3d38.2583511!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1720449134790!5m2!1sen!2skr" 
//             width="100%" 
//             height="450" 
//             style={{border: 0}} 
//             allowFullScreen="" 
//             loading="lazy" 
//             referrerPolicy="no-referrer-when-downgrade" 
//             title='Church location'
//             className="rounded-lg shadow-md"
//           ></iframe>
//         </div>
        
//         <div className="w-full md:w-1/2 space-y-6">
//           <img 
//             src={churchPhoto} 
//             alt="Church" 
//             className="w-full h-auto rounded-lg shadow-md"
//           />
          
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-blue-700 mb-4 font-bold">
//               Every Sunday at 3:00 PM, a service is held in the educational hall of Cheonjin Church 
//             </p>
//             <p className="text-blue-700 font-bold">
//               매주 주일 오후3시 천진 교회 교육관에서 주일 예배가 진행됩니다.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Location
import React from 'react'
import churchPhoto from "../../static/churchPicture.png"
import kyungdongUniversity from "../../static/kyungdong.jpg"

function Location() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Church Location 교회 위치</h1>
      
      {/* Cheonjin Church */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12531.647285683453!2d128.5566161!3d38.2583511!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1720449134790!5m2!1sen!2skr" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title='Cheonjin Church'
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <img 
            src={churchPhoto} 
            alt="Church" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-blue-700 mb-4 font-bold">
              Every Sunday at 3:00 PM, a service is held in the educational hall of Cheonjin Church 
            </p>
            <p className="text-blue-700 font-bold">
              매주 주일 오후3시 천진 교회 교육관에서 주일 예배가 진행됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Kyungdong University */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12532.973405659768!2d128.55656!3d38.2506617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fd8bc9684d149bb%3A0x9ab34314319ef6a2!2sKyungdong%20University!5e0!3m2!1sen!2skr!4v1720452587818!5m2!1sen!2skr" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title='Kyungdong University location'
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <img 
            src={kyungdongUniversity} 
            alt="Kyungdong University" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-blue-700 mb-4 font-bold">
              Every Wednesday at 7:30 AM, there is a service and seminar at the school.
            </p>
            <p className="text-blue-700 font-bold">
              매주 수요일 오전 7시30분 학교내 예배 및 세미나가 진행됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location