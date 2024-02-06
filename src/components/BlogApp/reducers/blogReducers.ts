import { saveBlogsToLocalStorage } from "../utils/blogConstants";

export const blogsReducer = (state: Iblog[], action: any) => {
  console.log("action is", action);
  console.log("state is", state);
  const { type, id, blog, updatedBlog, updatedStatus, blogs } = action;
  switch (type) {
    case "patchBlogs":
      return blogs;
    case "addBlog":
      if (!blog.title || !blog.description) {
        window.alert("enter valid blog details");
        return;
      }
      blog.id = Date.now();
      localStorage.setItem("blogs", JSON.stringify([blog, ...state]));
      saveBlogsToLocalStorage([blog, ...state]);
      return [blog, ...state];

    case "deleteBlog":
      const updatedBlogAfterDelete = state.filter((blog) => {
        return blog.id !== id;
      });
      saveBlogsToLocalStorage(updatedBlogAfterDelete);
      return updatedBlogAfterDelete;
    case "updateBlog":
      const updatedBlogAfterupdate = state.map((blog) => {
        return blog.id === updatedBlog.id ? updatedBlog : blog;
      });
      saveBlogsToLocalStorage(updatedBlogAfterupdate);
      return updatedBlogAfterupdate;
    case "changeBlogStatus":
      const updatedBlogAfterStausChange = state.map((blog: Iblog) => {
        return blog.id === id ? { ...blog, isCompleted: updatedStatus } : blog;
      });
      saveBlogsToLocalStorage(updatedBlogAfterStausChange);
      return updatedBlogAfterStausChange;

    default:
      console.log("unsupported action type");
  }
};
