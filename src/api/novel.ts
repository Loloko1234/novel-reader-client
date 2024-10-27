import axios from "axios";

export interface Novel {
  id: number;
  title: string;
  author: string;
  description: string;
  last_chapter_number: number;
  base_url: string;
}

export const fetchNovel = async (id: number): Promise<Novel> => {
  const response = await axios.get(`http://localhost:5000/api/novels/${id}`);
  return response.data;
};
