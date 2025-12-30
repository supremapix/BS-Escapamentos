export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LocationData {
  slug: string;
  name: string;
  type: 'neighborhood' | 'city';
}

export interface MetaData {
  title: string;
  description: string;
  canonical: string;
}