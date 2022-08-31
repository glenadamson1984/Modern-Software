const maxWidthMedia = (maxWidth) => `@media (max-width: ${maxWidth}px)`;
const minWidthMedia = (minWidth) => `@media (min-width: ${minWidth}px)`;

export const media = {
  forMobile: maxWidthMedia(1199),
  forDesktop: minWidthMedia(1200),

  forPhoneOnly: maxWidthMedia(599),
  forTabletPortraitAndUp: maxWidthMedia(1199),
  forTabletLandscapeAndUp: minWidthMedia(900),
  forDesktopAndUp: minWidthMedia(1200),
  forDesktopWideScreen: minWidthMedia(1600),
  forBigDesktopAndUp: minWidthMedia(1920),
};

export const colours = {
  white: "#fff",
  whiteBorder: "#e8e8e8",
  red: "#E51F28",
  black: "#232323",
  grey: "#6B6B6B",
  darkWhite: "#BFBFBF",
};
