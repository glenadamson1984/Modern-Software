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
          <div className="font-baloo text-pink text-4xl pt-16 sm:pt-8 px-6 font-thin sm:flex-1">
            {headline}
          </div>
        )}
        {sentence1 && (
          <div className="font-baloo text-xl pt-16 sm:pt-8 px-6 font-thin">
            {sentence1}
          </div>
        )}
        {sentence2 && (
          <div className="font-baloo text-xl pt-16 px-6 font-thin">
            {sentence2}
          </div>
        )}
        {sentence3 && (
          <div className="font-baloo  text-xl pt-16 px-6 font-thin">
            {sentence3}
          </div>
        )}
        {imageUrl && (
          <div className="flex w-screen justify-center py-10">
            <div className="relative overflow-hidden w-96 h-96 rounded-full">
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
          <div className="font-baloo text-xl pt-16 px-6 font-thin">
            {sentence4}
          </div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center pb-10">
      <div className="flex-1 flex-col pl-20">
        {headline && headlinePosition === "left" && (
          <div className="font-baloo text-pink text-4xl pt-8 px-6 font-thin ">
            {headline}
          </div>
        )}
        {imagePosition === "left" && (
          <div className="flex flex-1 justify-center pt-16 px-6">
            <div className="relative overflow-hidden w-96 h-96 rounded-full hover:animate-zoom">
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
            <div className="font-baloo text-xl pt-16 sm:pt-8 px-6 font-thin ">
              {sentence1}
            </div>
            <div className="font-baloo text-xl pt-8 px-6 font-thin">
              {sentence2}
            </div>
            <div className="font-baloo  text-xl pt-8 px-6 font-thin">
              {sentence3}
            </div>
            <div className="font-baloo text-xl pt-8 px-6 font-thin">
              {sentence4}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-1 pr-20">
        {headline && headlinePosition === "right" && (
          <div className="font-baloo text-pink text-4xl pt-8 px-6 font-thin ">
            {headline}
          </div>
        )}
        {imagePosition === "right" && (
          <div className="flex flex-1 justify-center pt-16 px-6">
            <div className="relative overflow-hidden w-96 h-96 rounded-full hover:animate-zoom">
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
            <div className="font-baloo text-xl pt-16 sm:pt-8 px-6 font-thin ">
              {sentence1}
            </div>
            <div className="font-baloo text-xl pt-8 px-6 font-thin">
              {sentence2}
            </div>
            <div className="font-baloo  text-xl pt-8 px-6 font-thin">
              {sentence3}
            </div>
            <div className="font-baloo text-xl pt-8 px-6 font-thin">
              {sentence4}
            </div>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default Article;
