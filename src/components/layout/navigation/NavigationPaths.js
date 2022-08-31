export const NavigationItems = [
  "Home",
  "Services",
  "About",
  "Portfolio",
  "Tuition",
  "Contact Us",
];

export const ConvertPathNameToURL = (name) => {
  return name.toLowerCase().replace(/\s/g, "");
};
