const UpdateBlogWindow = (props: any) => {
  const { updatedBlog, setUpdatedBlog, handleUpdate, setIsUpdating } = props;
  return (
    <>
      {" "}
      <div className="updated">
        <div className="card">
          <div className="header">
            <input
              value={updatedBlog.title}
              type="text"
              name="title"
              placeholder="enter title"
              onChange={(e) => {
                setUpdatedBlog({ ...updatedBlog, title: e.target.value });
              }}
            />
          </div>
          <div className="body">
            <input
              value={updatedBlog.description}
              type="text"
              name="description"
              placeholder="enter description"
              onChange={(e) => {
                setUpdatedBlog({
                  ...updatedBlog,
                  description: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                handleUpdate(updatedBlog.id);
              }}
            >
              update
            </button>
            <button
              onClick={() => {
                setIsUpdating(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateBlogWindow;
