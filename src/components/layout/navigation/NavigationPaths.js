export const NavigationItems = [
  "Home",
  "Portfolio",
  "Services",
  "SaaS",
  "AI Services",
  "TechStart",
  "About",
];

export const NavigationItemsMobile = [
  "Home",
  "Portfolio",
  "Services",
  "SaaS",
  "AI Services",
  "TechStart",
  "About",
  "Contact Us",
];

export const ConvertPathNameToURL = (name) => {
  return name.toLowerCase().replace(/\s/g, "");
};

export const RemoveSlashFromURl = (name) => {
  return name.replace(/\//g, "").charAt(0).toUpperCase() + name.slice(2);
};
