import React from "react";
import Title from "@/common/components/Title/Gradient";
import { useTranslation } from "next-export-i18n";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";

const HowDoWeDoIt = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-7">
      <Title
        content={t("what_we_do.HowDoWeDoIt.titleOne")}
        size="text-[26px] lg:text-[32px]"
        underlineFixed
      />
      <div>
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t("what_we_do.HowDoWeDoIt.descriptionOne")}
        </p>
      </div>
      {/* <TechnologiesSlider />
       TODO AGREGAR SLIDER MODIFICADO
      */}
      <p className="font-poppins text-sm lg:text-base font-normal text-black text-center">
        HTML • CSS • SASS • Typescript • JQuery • Angular Js • Angular • ReactJs
        • NextJs • Bootstrap • Material • Foundation • Tailwind • NodeJs • PHP •
        Java • Python • Ruby • C • C++ • C# • GO • ASP.NET • Express • Ember •
        Laravel • Symfony • CakePHP • Django • Spring • Struts • Ruby on Rails •
        MySQL • Mariadb • SQL • Sqlite • DynamoDB • PostgreSQL • DB2 • HSQLDB •
        Redis • MongoDB • ElastiCache • Elasticsearch • Cordova • Ionic •
        Flutter • Kotlin • Objective-C • Swift • Git • SVN • Gitlab • Github •
        Bitbucket • Vagrant • Docker • Kubernetes • Linux • Windows • AWS •
        Azure • Firebase • WordPress • Ghost • Drupal
      </p>
    </section>
  );
};

export default HowDoWeDoIt;
