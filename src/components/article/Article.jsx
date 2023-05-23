import React from "react";
import Image from "next/image";

const Article = ({
  headline,
  imagePosition,
  imageUrl,
  imageAlt,
  imageHeight,
  imageWidth,
  headlinePosition,
  children,
  isDesktop,
  sentence1,
  sentence2,
  sentence3,
  sentence4,
}) => {
  if (!isDesktop) {
    return (
      <div className="pb-10">
        {headline && (
          <div className="px-6 pt-16 text-4xl font-Inter text-pink sm:pt-8 sm:flex-1">
            {headline}
          </div>
        )}
        {sentence1 && (
          <div className="px-6 pt-16 text-xl font-Inter sm:pt-8 ">
            {sentence1}
          </div>
        )}
        {sentence2 && (
          <div className="px-6 pt-16 text-xl font-Inter ">{sentence2}</div>
        )}
        {sentence3 && (
          <div className="px-6 pt-16 text-xl font-Inter ">{sentence3}</div>
        )}
        {imageUrl && (
          <div className="flex justify-center w-screen py-10">
            <div className="relative overflow-hidden rounded-full w-96 h-96">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        )}
        {sentence4 && (
          <div className="px-6 pt-16 text-xl font-Inter ">{sentence4}</div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center pb-10">
      <div className="flex-col flex-1 pl-20">
        {headline && headlinePosition === "left" && (
          <div className="px-6 pt-8 text-4xl font-Inter text-pink ">
            {headline}
          </div>
        )}
        {imagePosition === "left" && (
          <div className="flex justify-center flex-1 px-6 pt-16">
            <div className="relative overflow-hidden rounded-full w-96 h-96 hover:animate-zoom">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        )}
        {imagePosition !== "left" && (
          <>
            <div className="px-6 pt-16 text-xl font-Inter sm:pt-8 ">
              {sentence1}
            </div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence2}</div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence3}</div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence4}</div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-1 pr-20">
        {headline && headlinePosition === "right" && (
          <div className="px-6 pt-8 text-4xl font-Inter text-pink ">
            {headline}
          </div>
        )}
        {imagePosition === "right" && (
          <div className="flex justify-center flex-1 px-6 pt-16">
            <div className="relative overflow-hidden rounded-full w-96 h-96 hover:animate-zoom">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        )}
        {imagePosition !== "right" && (
          <>
            <div className="px-6 pt-16 text-xl font-Inter sm:pt-8 ">
              {sentence1}
            </div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence2}</div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence3}</div>
            <div className="px-6 pt-8 text-xl font-Inter ">{sentence4}</div>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default Article;
