import { Iblog } from "../interface/commonInterface";

export const defaultBlog: Iblog = {
  id: Date.now(),
  title: "",
  description: "",
  isCompleted: false,
};

export const saveBlogsToLocalStorage = (blogs: Iblog[]) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};
