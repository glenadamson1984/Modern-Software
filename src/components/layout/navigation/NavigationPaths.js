export const NavigationItems = [
  "Home",
  "Portfolio",
  "Services",
  "About",
];

export const NavigationItemsMobile = [
  "Home",
  "Portfolio",
  "Services",
  "About",
  "Contact Us",
];

export const ConvertPathNameToURL = (name) => {
  return name.toLowerCase().replace(/\s/g, "");
};

export const RemoveSlashFromURl = (name) => {
  return name.replace(/\//g, "").charAt(0).toUpperCase() + name.slice(2);
};
