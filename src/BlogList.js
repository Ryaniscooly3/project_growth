const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, i) => (
        // use key to alternate between classNames
        // string templates
        // backtick
        // 'this is a string ${blog.imageNumber}'
        <>
          <h1>{`this is a string ${blog.imageNumber}`}</h1>
        <div className={`vine${blog.imageNumber % 2 === 0 ? `Even` : `Odd`}`} key={i}>
            <img alt={blog.imageNumber} src={blog.src} />
        </div>
        </>
      ))}
    </div>
  );
};

export default BlogList;
