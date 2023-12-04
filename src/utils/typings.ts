type MenuItem = {
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  nutritional_info: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
  };
  seasonal_availability: string[];
  customizable_options?: string[];
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

type SeasonalMenu = {
  name: string;
  items: MenuItem[];
};

export type FullMenu = {
  categories: MenuCategory[];
  seasonal_menu: SeasonalMenu;
};

export type online_presenceType = {
  website: string;
  social_media: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
};

export type locationType = {
  address: string;
  latitude: number;
  longitude: number;
};
export type ambianceType = {
  description: string;
};

type initiativesType = {
  name: string;
  description: string;
};

export type sustainabilityTypes = {
  initiatives: initiativesType[];
};

export type ChefType = {
  name: string;
  bio: string;
  signature_dish: string;
};

export type awardsType = {
  year: number;
  organization: string;
  award: string;
};
