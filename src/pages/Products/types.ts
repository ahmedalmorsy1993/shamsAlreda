
import { ICategory } from '@/components/Home/OurServices/ServiceCard/types';

export interface IProduct {
  category: ICategory;
  description: string;
  id: number;
  image: string;
  meta_description: string;
  title: string;
}

