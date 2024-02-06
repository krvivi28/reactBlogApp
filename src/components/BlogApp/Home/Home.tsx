import { useEffect, useReducer, useRef, useState } from "react";
import { Iblog } from "../interface/commonInterface";
import { defaultBlog } from "../utils/blogConstants";
import { blogsReducer } from "../reducers/blogReducers";
import UpdateBlogWindow from "../update/UpdateBlogWindow";

const Home = () => {
  const titleRef = useRef(null);
  const [blogs, dispatch] = useReducer(blogsReducer, []);
  const [blog, setBlog] = useState<Iblog>(defaultBlog);
  const [updatedBlog, setUpdatedBlog] = useState<Iblog>(defaultBlog);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("blogs")) {
      dispatch({
        type: "patchBlogs",
        blogs: JSON.parse(localStorage.getItem("blogs")),
      });
    }
    titleRef.current.focus();
  }, []);

  const handleAdd = async () => {
    const action = { type: "addBlog", blog };
    dispatch(action);
    setBlog(defaultBlog);
    titleRef.current.focus();
  };
  const handleUpdate = (id: any) => {
    setUpdatedBlog({ ...updatedBlog, id });
    const action = { type: "updateBlog", updatedBlog };
    dispatch(action);
  };
  const handleDelete = (id: any) => {
    const action = { type: "deleteBlog", id };
    dispatch(action);
  };
  const startBlogUpdate = (id: any) => {
    setIsUpdating(true);
    const currentBlog = blogs.find((blog: Iblog) => {
      return blog.id === id;
    });
    setUpdatedBlog(currentBlog);
  };

  const handleStatusChange = (e: any, id: any) => {
    const action = {
      type: "changeBlogStatus",
      id,
      updatedStatus: e.target.value === "true" ? true : false,
    };
    dispatch(action);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <input
              ref={titleRef}
              value={blog.title}
              type="text"
              name="title"
              placeholder="enter title"
              onChange={(e) => {
                setBlog({ ...blog, title: e.target.value });
              }}
            />
          </div>
          <div className="body">
            <input
              value={blog.description}
              type="text"
              name="description"
              placeholder="enter description"
              onChange={(e) => {
                setBlog({ ...blog, description: e.target.value });
              }}
            />
            <button onClick={handleAdd}>add</button>
          </div>
        </div>
      </div>
      <div className="container allbogs">
        {blogs.map((blog) => {
          return (
            <div
              style={{
                border: "1px solid green",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px 0",
              }}
              key={blog.id}
            >
              <li>_id: {blog.id}</li>
              <li>title: {blog.title}</li>
              {blog.isCompleted ? (
                <li>
                  description:
                  <s>{blog.description}</s>{" "}
                </li>
              ) : (
                <li>description: {blog.description}</li>
              )}
              <label htmlFor="status">
                status of task:
                <select
                  onChange={(e) => {
                    handleStatusChange(e, blog.id);
                  }}
                  name="status"
                  id="status"
                  defaultValue={blog.isCompleted === true ? "true" : "false"}
                >
                  <option value="false">pending</option>
                  <option value="true">completed</option>
                </select>
              </label>
              <br />
              <button
                className="bt btn-sm-success"
                onClick={() => {
                  handleDelete(blog.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  startBlogUpdate(blog.id);
                }}
              >
                update
              </button>
            </div>
          );
        })}
      </div>
      <div className="update-container">
        {isUpdating ? (
          <UpdateBlogWindow
            updatedBlog={updatedBlog}
            setUpdatedBlog={setUpdatedBlog}
            handleUpdate={handleUpdate}
            setIsUpdating={setIsUpdating}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
