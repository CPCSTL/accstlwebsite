import Base from "@layouts/Baseof";
import Link from "next/link";
import React from "react";

const Membership2024 = () => {
  return (
    <Base>
      <div className="w-full flex-col justify-center px-4 text-center lg:px-10">
        <h1 className="pb-10 pt-10 text-3xl">
          ARAB CULTURAL CENTER - St.Louis, MO MEMBERSHIP 2024
        </h1>
        <p className="mb-4 text-lg">
          Welcome to the Arab Cultural Center Membership 2024! As we embark on a
          new year filled with exciting opportunities and enriching experiences,
          we invite you to join our vibrant community dedicated to celebrating
          and preserving the rich heritage of the Arab world.
        </p>
        <p className="mb-4 text-lg">
          Our center serves as a hub for cultural exchange, artistic expression,
          and educational programs, fostering a deeper understanding and
          appreciation of Arab traditions and contemporary contributions. By
          becoming a member, you will gain access to exclusive events,
          workshops, and resources designed to connect, inspire, and engage
          individuals who share a passion for Arab culture.
        </p>
        <p className="mb-4 text-lg">
          Join us in our mission to build bridges across cultures and
          generations, and be part of a dynamic network that honors the past
          while looking forward to a promising future. Welcome to a year of
          discovery, connection, and cultural at the Arab Cultural Center!
        </p>
        <Link
          href="https://www.zeffy.com/ticketing/21a71e90-9cd2-400c-858c-285bc01d1823"
          passHref
        >
          <button className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Join Now
          </button>
        </Link>

        <h1 className="pb-10 pt-10 text-3xl">
          المركز الثقافي العربي - سانت لويس ، ميزوري. العضوية ٢٠٢٤
        </h1>
        <p className="mb-4 text-lg">
          مرحبا بكم في المركز الثقافي العربي العضوية ٢٠٢٤! بينما نبدأ عامًا
          جديدًا مليئًا بالفرص المثيرة والتجارب المثرية، ندعوكم للانضمام إلى
          مجتمعنا النابض بالحياة والمكرس للاحتفال بالتراث الغني للعالم العربي
          والحفاظ عليه.
        </p>
        <p className="mb-4 text-lg">
          يعمل مركزنا كمركز للتبادل الثقافي والتعبير الفني والبرامج التعليمية،
          مما يعزز فهمًا وتقديرًا أعمق للتقاليد العربية والمساهمات المعاصرة. من
          خلال أن تصبح عضوًا، ستتمكن من الوصول إلى الأحداث الحصرية وورش العمل
          والموارد المصممة للتواصل وإلهام وإشراك الأفراد الذين يشتركون في شغف
          الثقافة العربية.
        </p>
        <p className="mb-4 text-lg">
          انضم إلينا في مهمتنا المتمثلة في بناء الجسور بين الثقافات والأجيال،
          وكن جزءًا من شبكة ديناميكية تكرم الماضي وتتطلع إلى مستقبل واعد. مرحبًا
          بكم في عام من الاكتشاف والتواصل والثقافة في المركز الثقافي العربي!
        </p>
        <Link
          href="https://www.zeffy.com/ticketing/21a71e90-9cd2-400c-858c-285bc01d1823"
          passHref
        >
          <button className="my-2 mb-8 mt-4 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            انضم الآن
          </button>
        </Link>
      </div>
    </Base>
  );
};

export default Membership2024;
