export const NavigationItems = [
  "Home",
  "Services",
  "About",
  "Portfolio",
  "Tuition",
];

export const NavigationItemsMobile = [
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

export const RemoveSlashFromURl = (name) => {
  return name.replace(/\//g, "").charAt(0).toUpperCase() + name.slice(2);
};
