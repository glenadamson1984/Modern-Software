export const NavigationItems = [
  "Home",
  "Portfolio",
  "Services",
  "Pricing",
  "About",
];

export const NavigationItemsMobile = [
  "Home",
  "Portfolio",
  "Services",
  "Tuition",
  "About",
  "Contact Us",
];

export const ConvertPathNameToURL = (name) => {
  return name.toLowerCase().replace(/\s/g, "");
};

export const RemoveSlashFromURl = (name) => {
  return name.replace(/\//g, "").charAt(0).toUpperCase() + name.slice(2);
};
