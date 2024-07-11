import React from 'react';

function YearlyActivities() {
  const activities = [
    {
      month: "January",
      events: [
        "New Year's Day Service: A service to start the new year with prayer, worship, and messages of encouragement.",
        "Week of Prayer: A week dedicated to intense prayer and fasting to seek God's guidance for the upcoming year.",
        "Vision Casting: Leadership shares the vision and goals for the church in the new year."
      ]
    },
    {
      month: "February",
      events: [
        "Love Relationship Seminar: A seminar focused on strengthening and promoting healthy relationships.",
        "Back-to-School Prayer Service: A service to pray for students, teachers, and parents as they start a new school year."
      ]
    },
    {
      month: "March",
      events: [
        "Evangelistic Campaign: A series of services focused on evangelism and reaching out to the community with the Gospel.",
        "Leadership Training: Workshops and seminars to equip church leaders with skills for effective ministry."
      ]
    },
    {
      month: "April",
      events: [
        "Easter Celebrations (부활절 예배): Special services to commemorate the death and resurrection of Jesus Christ.",
        "Community Outreach (공동체 훈련): Service or events to serve the local community and share the love of Christ.",
        "Spring Revival (봄 부흥회): A series of services focused on spiritual renewal & revival within the church."
      ]
    },
    {
      month: "May",
      events: [
        "Pentecost Sunday (오순절 주일): Celebration of the day of the Holy Spirit was poured out on the early church.",
        "Youth Talent Show: A showcase of talents and gifts among the youth group, promoting creativity and fellowship."
      ]
    },
    {
      month: "June",
      events: [
        "Vacation Bible School (여름성경학교): A program focused on teaching biblical principles through games, crafts, and other activities.",
        "Church Picnic (교회 야유회): A fun outdoor event for church members to gather, enjoy food, and build relationships."
      ]
    },
    {
      month: "July",
      events: [
        "Summer Camp (여름캠프): A camp focused on spiritual growth, fellowship, and outdoor activities."
      ]
    },
    {
      month: "August",
      events: [
        "Back-to-School Prayer Service (개강예배): A service to pray for students, teachers, and parents as they start a new school year.",
        "Church Leadership Retreat (리더십 수련회): A time for church leaders to retreat, pray, and plan for the upcoming ministry year."
      ]
    },
    {
      month: "September",
      events: [
        "Fall Revival (가을 부흥회): A series of services focused on spiritual renewal and revival as the church enters the fall season.",
        "Discipleship Classes (제자훈련): Classes and small groups to help believers grow in their faith and deepen their understanding of the Bible."
      ]
    },
    {
      month: "October",
      events: [
        "Month of Evangelism (전도행사): A whole month focused on evangelism, going out in small groups, and testimonies."
      ]
    },
    {
      month: "November",
      events: [
        "Thanksgiving Service (추수감사 주일): A special service to give thanks to God for His blessings, provision, and faithfulness throughout the year.",
        "Community Thanksgiving Dinner (추수감사 저녁만찬): A dinner hosted by the church for the local community to come together and celebrate Thanksgiving."
      ]
    },
    {
      month: "December",
      events: [
        "Christmas Service (크리스마스 예배): A beautiful service on Christmas, carols, and a message of hope and salvation.",
        "Winter Camp/Crossover Service (겨울캠프): A service to end the year with worship, prayer, and reflection, and to dedicate the upcoming year to God."
      ]
    }
  ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Yearly Activities</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {activities.map((activity, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-blue-600 text-white py-2 px-4">
//               <h3 className="text-xl font-semibold">{activity.month}</h3>
//             </div>
//             <ul className="p-4 space-y-2">
//               {activity.events.map((event, eventIndex) => (
//                 <li key={eventIndex} className="text-gray-700">
//                   <span className="font-medium">{event.split(':')[0]}:</span>
//                   {event.split(':')[1]}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Yearly Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6">
              <h3 className="text-2xl font-bold">{activity.month}</h3>
            </div>
            <ul className="p-6 space-y-4">
              {activity.events.map((event, eventIndex) => (
                <li key={eventIndex} className="text-gray-700">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">
                    {event.split(':')[0]}
                  </h4>
                  <p className="text-sm leading-relaxed pl-4 border-l-2 border-blue-200">
                    {event.split(':')[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YearlyActivities;