import React from "react";

function Mission() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mission Statements
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">English</h2>
            <p className="text-gray-600 leading-relaxed">
              At KGC, our mission is to reveal the Kingdom, the Power, the Glory,
              and Love of God, equipping believers, and engaging our community
              with the transforming power of the Gospel. We strive to fulfill the
              Great Commission by making disciples of all nations, baptizing them
              in the name of the Father, Son, and Holy Spirit, and teaching them
              to obey everything Jesus commanded (Matthew 28:18-20)
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">한국어</h2>
            <p className="text-gray-600 leading-relaxed">
              KGC 교회의 사명은 하나님의 나라, 권능, 영광, 그리고 사랑을 드러내고,
              성도들을 복음의 역량으로 무장시키며, 복음의 혁신적인 힘으로 공동체
              안에서 서로 교통합니다. 우리는 모든 민족을 제자로 삼고, 그들을
              아버지와 아들과 성령의 이름으로 세례를 주며, 예수님이 명령하신 모든
              것을 가르쳐 지키게 함으로써 위대한 사명(마태복음 28:18-20)을 이루기
              위해 노력합니다
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Mission;