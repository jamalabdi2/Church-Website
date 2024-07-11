// import React from 'react'

// const activitiesData = [
//   {
//     "title":{
//       "englishTitle":"New student Welcome Service",
//       "koreanTitle":"23년 신입생 환영회"
//     },
//     "youtubeLink":"https://www.youtube.com/watch?v=L3_58I3qNGI",
//     "date":"Dec 24. 2023",
//   },
//   {
//     "title":{
//       "englishTitle":"Nepal student Christmas worship service",
//       "koreanTitle":"네팔 학생 크리스마스 예배"
//     },
//     "youtubeLink":"https://www.youtube.com/watch?v=pHvH0Ubj12I",
//     "date":"Dec 24. 2023"
    
//   },
//   {
//     "title":{
//       "englishTitle":"Winter Camp",
//       "koreanTitle":"겨울 캠프"
//     },
//     "youtubeLink":"https://youtu.be/bhBTjtHTQLw",
//     "date":"Jan 01. 2024"
//   },
//   {
//     "title":{
//       "englishTitle":"Medical Check-up",
//       "koreanTitle":"건강검진"
//     },
//     "youtubeLink":"https://youtu.be/3mBXVfXK2eU",
//     "date":"7th of Apr 2024"
//   },
//   {
//     "title":{
//       "englishTitle":"Worship and Praise in Mulchi Methodist Church",
//       "koreanTitle":"예배와 찬양"
//     },
//     "youtubeLink":"https://youtu.be/38ZVcYZpSFA",
//     "date":"14th of Apr 2024"
//   },
//   {
//     "title":{
//       "englishTitle":"Outreach & workshop ",
//       "koreanTitle":"중간고사 후"
//     },
//     "youtubeLink":"https://youtu.be/sUiQrl7QFvY?feature=shared",
//     "date":"1st of May 2024"
//   },
// ]
  

// function Activities() {
//   return (
//     <div>
//         <h1>Church Activites On Youtube</h1>
      
        
//     </div>
//   )
// }

// export default Activities

import React from 'react'

const activitiesData = [
  {
    "title":{
      "englishTitle":"New student Welcome Service",
      "koreanTitle":"23년 신입생 환영회"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=L3_58I3qNGI",
    "date":"Dec 24. 2023",
  },
  {
    "title":{
      "englishTitle":"Nepal student Christmas worship service",
      "koreanTitle":"네팔 학생 크리스마스 예배"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=pHvH0Ubj12I",
    "date":"Dec 24. 2023"
    
  },
  {
    "title":{
      "englishTitle":"Winter Camp",
      "koreanTitle":"겨울 캠프"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=bhBTjtHTQLw",
    "date":"Jan 01. 2024"
  },
  {
    "title":{
      "englishTitle":"Medical Check-up",
      "koreanTitle":"건강검진"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=3mBXVfXK2eU",
    "date":"7th of Apr 2024"
  },
  {
    "title":{
      "englishTitle":"Worship and Praise in Mulchi Methodist Church",
      "koreanTitle":"예배와 찬양"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=38ZVcYZpSFA",
    "date":"14th of Apr 2024"
  },
  {
    "title":{
      "englishTitle":"Outreach & workshop ",
      "koreanTitle":"중간고사 후"
    },
    "youtubeLink":"https://www.youtube.com/watch?v=sUiQrl7QFvY",
    "date":"1st of May 2024"
  },
]

function Activities() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Church Activities On Youtube</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activitiesData.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={`https://www.youtube.com/embed/${activity.youtubeLink.split('v=')[1]}`} 
                title={activity.title.englishTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{activity.title.englishTitle}</h2>
              <h3 className="text-lg text-gray-700 mb-2">{activity.title.koreanTitle}</h3>
              <p className="text-sm text-gray-600">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities