import * as React from "react";
import { Section } from "../section";

const Card = ({ data, index, parentField = ""  }) => {
  return (
    <div className="lc flex bg-accent1 text-white w-full py-4 px-10 md:px-6 sm:px-4" data-tinafield={`${parentField}.${index}`}>
      <div className="lc-image-wrap w-12 h-12 mr-6 rounded-lg">
        {data.imageSrc && (
          <img
            alt={data.name}
            src={data.imageSrc}
            className=""
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div className="flex w-full">
        <div className="flex-1 w-1/2">
          {data.name && <h2 className="font-bold text-lg" data-tinafield={`${parentField}.${index}.name`}>{data.name}</h2>}
          {data.twitter && (
            <a className="text-md"
              data-tinafield={`${parentField}.${index}.twitter`}
              href={`https://twitter.com/${data.twitter.toLowerCase()}`}
              target="_blank">
              {`@${data.twitter}`}
            </a>
          )}
        </div>
        <div
          className="w-12 h-12 bg-contain bg-no-repeat mr-12 md:mr-6 sm:mr-4"
          style={{backgroundImage: `url(./img/flag-${data.country}.png)`}}
        ></div>
        <div className="w-8 h-12 bg-contain bg-no-repeat" style={{backgroundImage: `url(./img/badge-${data.badge}.png)`}}></div>
      </div>
    </div>
  )
}


export const LeaderCards = ({ data, parentField = "" }) => {
  const headerCard = "flex bg-black text-white text-md py-4 px-6 font-display2 md:px-6 lg:px-10";
  return (
    <Section className="py-20 px-12" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="">
        {data.headline && <h2 className="font-bold font-display2 text-xl uppercase text-center text-white mb-8" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
      </div>
      <div className="leader-cards max-w-desktop-full mx-auto grid gap-8 grid-cols-2 md:gap-6 sm:gap-4 sm:grid-cols-1">
        <div className={headerCard}>
          <span className="w-1/3 flex-1">Name</span>
          <span className="px-6">Country</span>
          <span>Tier</span>
        </div>
        <div className={`${headerCard} sm:hidden`}>
          <span className="w-1/3 flex-1">Name</span>
          <span className="px-6">Country</span>
          <span>Tier</span>
        </div>
        {data.items && (
          data.items.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              parentField={`${parentField}.items`}
            />
          })
        )}
      </div>
    </Section>
  );
};
