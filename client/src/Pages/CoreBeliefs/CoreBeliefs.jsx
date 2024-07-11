import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coreBeliefs = {
  "English":[
    {
      "title": "Authority of Scripture",
      "content": "We believe that the Bible is the inspired and infallible Word of God, containing everything necessary for salvation and godly living (2 Timothy 3:16-17; 2 Peter 1:20-21). As such, we submit to its absolute authority in all matters of faith and practice."
    },
    {
      "title": "Salvation by Grace through Faith",
      "content": "We affirm that salvation is a gift of God's grace, received through faith in Jesus Christ alone (Ephesians 2:8-9). Through His life, death, and resurrection, Jesus provided the atonement for our sins, reconciling us to God and offering eternal life to all who believe (Romans 5:8; John 3:16)."
    },
    {
      "title": "Deity of Jesus Christ",
      "content": "We confess Jesus Christ as the Son of God, fully divine and fully human (John 1:1, 14; 1 John 5:7 (kjv); 1 Timothy 3:16). He is the Savior of the world, the only mediator between God and humanity (1 Timothy 2:5). We proclaim His lordship and seek to follow His teachings and example in all areas of life (Colossians 1:15-20)."
    },
    {
      "title": "The Trinity",
      "content": "We affirm the doctrine of the Trinity, acknowledging one God in three persons: the Father, the Son, and the Holy Spirit (Matthew 28:19, 1 John 5:7). Each person of the Trinity is distinct yet fully God, working together in perfect unity to accomplish the purposes of God (John 14:16-17; 2 Corinthians 13:14)."
    },
    {
      "title": "The Great Commission",
      "content": "We embrace Jesus' commission to make disciples of all nations, baptizing them and teaching them to obey His commands (Matthew 28:18-20). We are committed to proclaiming the Gospel of the Kingdom of God both locally and globally, sharing the love and truth of Christ with all people."
    },
    {
      "title": "Holiness and Sanctification",
      "content": "We believe in the ongoing process of sanctification, being set apart for God's purposes and growing in holiness. 1 Thessalonians 4:7 says, 'For God has not called us for impurity, but in holiness.'"
    },
    {
      "title": "The Second Coming of Christ",
      "content": "We believe in the second coming of our Lord Jesus (1 Thessalonians 4:16-18) and we eagerly await the return of Jesus Christ, who will judge the living and the dead. Revelation 22:12 proclaims, 'Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has done.'"
    },
    {
      "title": "Unity in Christ",
      "content": "With the help of the Holy Spirit we experience the love of God (Romans 5:5) and we strive to maintain unity within the body of believers, loving one another as Christ has loved us. Colossians 3:14 encourages us to 'put on love, which binds everything together in perfect harmony.'"
    },
    {
      "title": "Compassion and Outreach",
      "content": "We are called to love our neighbors as ourselves and demonstrate the love of Christ through acts of service and compassion. Galatians 6:10 urges us, 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.'"
    }
  ],
  "Korean":[
    {
      "title": "성경의 권위",
      "content": "우리는 성경이 하나님의 영감을 받은 틀림없는 말씀이며, 구원과 경건한 삶을 위해 필요한 모든 것을 담고 있다고 믿습니다 (디모데후서 3:16-17; 베드로후서 1:20-21). 이에 따라, 우리는 모든 신앙과 실천의 문제에서 성경의 절대적 권위에 복종합니다."
    },
    {
      "title": "은혜로운 구원, 믿음을 통해",
      "content": "우리는 구원이 하나님의 은혜의 선물이며, 오직 예수 그리스도를 통한 믿음으로 받아들여진다고 확언합니다 (에베소서 2:8-9). 예수님의 생애, 죽음, 그리고 부활을 통해, 예수님은 우리의 죄에 대한 속죄를 제공하고 하나님과 화해시켜주며 믿는 모든 이에게 영원한 생명을 제공합니다 (로마서 5:8; 요한복음 3:16)."
    },
    {
      "title": "예수 그리스도의 신성",
      "content": "우리는 예수 그리스도를 하나님의 아들로, 완전히 신적이며 인간적인 존재로 고백합니다 (요한복음 1:1, 14; 요한일서 5:7 (KJV); 디모데전서 3:16). 그분은 세상의 구원자이며 하나님과 인류 사이의 유일한 중재자입니다 (디모데전서 2:5). 우리는 그분의 주권을 선포하며 모든 삶의 영역에서 그분의 가르침과 본을 따르기를 추구합니다 (골로새서 1:15-20)."
    },
    {
      "title": "삼위일체",
      "content": "우리는 삼위일체의 교리를 확증하며, 성부, 성자, 성령 삼위가 한 하나님임을 인정합니다(마태복음 28:19, 요한일서 5:7). 삼위 각각은 구별되지만 완전히 하나님으로서, 하나님의 목적을 이루기 위해 완벽한 일치 속에서 함께 일합니다(요한복음 14:16-17; 고린도후서 13:14)."
    },
    {
      "title": "대위임령",
      "content": "우리는 예수님의 모든 민족을 제자로 삼으라는 위임을 받아들입니다. 그들을 세례 주고 그의 명령을 따르도록 가르칩니다(마태복음 28:18-20). 우리는 하나님의 나라의 복음을 지역적으로나 전 세계적으로 선포하며, 모든 사람에게 그리스도의 사랑과 진리를 나누는 데 전념합니다."
    },
    {
      "title": "거룩함과 성화",
      "content": "우리는 거룩함을 향한 지속적인 성화 과정, 즉 하나님의 목적을 위해 구별되어 성장하는 것을 믿습니다. 데살로니가전서 4:7은 이렇게 말합니다: '하나님이 우리를 부르신 것은 불결함이 아니라 거룩함에 있습니다.'"
    },
    {
      "title": "그리스도의 재림",
      "content": "우리는 우리 주 예수의 두 번째 오심을 믿습니다(데살로니가전서 4:16-18). 우리는 예수 그리스도의 귀환을 간절히 기다리며, 그분이 산 자와 죽은 자를 심판하실 것입니다. 요한계시록 22:12는 이렇게 선언합니다: '보라, 내가 속히 오리니, 내가 갚을 것을 가지고 오리라. 각 사람에게 그의 행위대로 갚으리라.'"
    },
    {
      "title": "그리스도 안의 일치",
      "content": "성령의 도움으로 우리는 하나님의 사랑을 경험하며(로마서 5:5), 믿는 이들의 공동체 내에서 일치를 유지하고자 애쓰며, 그리스도께서 우리를 사랑하신 것처럼 서로를 사랑합니다. 골로새서 3:14는 '사랑을 입으라. 사랑은 모든 것을 완전한 화합으로 묶는 띠니라'고 격려합니다."
    },
    {
      "title": "자비와 봉사",
      "content": "우리는 이웃을 자신과 같이 사랑하고 봉사와 자비의 행위를 통해 그리스도의 사랑을 실천하도록 부름 받았습니다. 갈라디아서 6:10은 우리에게 이렇게 촉구합니다: '그러므로 우리가 기회가 있을 때에 모든 사람에게 선을 행하고, 믿음의 가족들에게 특히 선을 행하자.'"
    }
  ]
}
// Object.entries(coreBeliefs).forEach(([key, value]) => console.log([key, value]))
const loopThroughObject = (coreBeliefs) => {
  return Object.entries(coreBeliefs).map(([key, value]) => {
    return {
      language: key,
      beliefs: value.map(belief => ({
        title: belief.title,
        content: belief.content
      }))
    };
  });
};
console.log(loopThroughObject(coreBeliefs))


function CoreBeliefs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  const processedBeliefs = loopThroughObject(coreBeliefs)
  return (
  //   <div className="container mx-auto px-4 py-8">
  //   {processedBeliefs.map(({ language, beliefs }) => (
  //     <div key={language} className="mb-12">
  //       <h2 className="text-3xl font-bold text-gray-800 mb-6">{language}</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {beliefs.map(({ title, content }) => (
  //           <div key={title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
  //             <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
  //             <p className="text-gray-600 text-sm">{content}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   ))}
  // </div>
  <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {coreBeliefs.English.map((belief, index) => (
          <div key={belief.title} className="px-4">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">{belief.title}</h3>
                <p className="text-gray-600 text-sm">{belief.content}</p>
              </div>
              <div className="md:w-1/2 p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">{coreBeliefs.Korean[index].title}</h3>
                <p className="text-gray-600 text-sm">{coreBeliefs.Korean[index].content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CoreBeliefs