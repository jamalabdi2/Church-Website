// import React from "react";
// import IUCEA_student from "../../../static/Iucea_student.png";

// function About() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 mb-8 lg:mb-0">
//           <img
//             src={IUCEA_student}
//             alt="IUCEA student"
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//         <div className="lg:w-1/2 lg:pl-12">
//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
//             Welcome to the <span className="text-blue-600">International Christian Worship Center</span>
//           </h1>
//           <div className="space-y-6">
//             <h3 className="text-lg text-gray-700 leading-relaxed font-semibold">
//               Welcome to Kungdong Global Christian Community Church (KGC), where
//               our foundation is firmly rooted in the timeless truths of the
//               Bible and our focus is unwaveringly centered on Jesus Christ. As
//               pastor, I am delighted to share with you our mission, core
//               beliefs, and commitment to proclaiming the Gospel of the kingdom
//               of God and nurturing discipleship within our community.
//             </h3>
//             <h3 className="text-lg text-gray-700 leading-relaxed font-semibold">
//               경동 글로벌 크리스천 교회에 오신 것을 환영합니다. 본 교회는 성경의
//               변함없는 진리에 깊은 뿌리를 두고 있으며, 모든 활동의 중심은
//               일관되게 예수 그리스도에 집중되어 있습니다. 저는 교회의 목사로서,
//               우리 교회의 사명, 기본 신조, 그리고 하나님의 나라 복음을 선포하고
//               우리 공동체 내에서 제자 양성을 위한 전념을 여러분과 공유하게 되어
//               큰 영광으로 생각합니다.
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";
import IUCEA_student from "../../../static/Iucea_student.png";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={IUCEA_student}
              alt="IUCEA student"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Welcome to the <br />
              <span className="text-blue-600">
                International Christian Worship Center
              </span>
            </h1>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Kungdong Global Christian Community Church (KGC), our
                foundation is firmly rooted in the timeless truths of the Bible,
                and our focus is unwaveringly centered on Jesus Christ. As
                pastor, I am delighted to share with you our mission, core
                beliefs, and commitment to proclaiming the Gospel of the kingdom
                of God and nurturing discipleship within our community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                경동 글로벌 크리스천 교회에 오신 것을 환영합니다. 본 교회는
                성경의 변함없는 진리에 깊은 뿌리를 두고 있으며, 모든 활동의
                중심은 일관되게 예수 그리스도에 집중되어 있습니다. 저는 교회의
                목사로서, 우리 교회의 사명, 기본 신조, 그리고 하나님의 나라
                복음을 선포하고 우리 공동체 내에서 제자 양성을 위한 전념을
                여러분과 공유하게 되어 큰 영광으로 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
