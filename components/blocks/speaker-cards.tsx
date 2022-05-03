import * as React from "react";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Card = ({ data, index, parentField = ""  }) => {
  const ornaments = [
    "img/bio-ornament-1.svg",
    "img/bio-ornament-2.svg"
  ]
  return (
    <div className="relative mb-36" data-tinafield={`${parentField}.${index}`}>
      <img
          src={ornaments[index % 2 == 0 ? 0 : 1]}
          className="absolute -z-1 left-32 -top-16"
          data-tinafield={`${parentField}.${index}.image`}
        />
      <div className="flex items-end w-full mb-8">
        {data.imageSrc && (
          <img
            alt={data.speakerName}
            src={data.imageSrc}
            className="w-40 h-40"
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
        <div className="w-full flex-1 self-bottom pl-5">
          {data.name && (
            <h4
              className="font-bold text-sm"
              data-tinafield={`${parentField}.${index}.name`}
            >{data.name}</h4>
          )}
          {data.title && (
            <h5
              className="text-sm"
              data-tinafield={`${parentField}.${index}.title`}
            >{data.title}</h5>
          )}
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 w-1/2">
          {data.label && (
            <p
              className="text-sm mb-2"
              data-tinafield={`${parentField}.${index}.label`}
            >{data.label}</p>
          )}
          {data.headline && (
            <h3
              className="font-bold text-xl text-primary mb-8"
              data-tinafield={`${parentField}.${index}.headline`}
            >{data.headline}</h3>
          )}
          {data.text?.children && (
            <div className="text-md" data-tinafield={`${parentField}.${index}.text`}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export const SpeakerCards = ({ data, parentField = "" }) => {
  return (
    <Section className="max-w-desktop-full mx-auto px-12" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="">
        {data.headline && <h2 className="font-bold font-display2 text-xl uppercase text-center text-white mb-8" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
      </div>
      <div className="speaker-cards">
        {data.cards && (
          data.cards.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              parentField={`${parentField}.cards`}
            />
          })
        )}
      </div>
    </Section>
  );
};
