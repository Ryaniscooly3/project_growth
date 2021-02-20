import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Dropzone from "react-dropzone";
import request from "superagent";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [counter, setCounter] = useState(0);

  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlogs(newBlogs);
  // }

  const handleImage = (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID {{5da0e990902236f}}");

    var formdata = new FormData();
    formdata.append(
      "image",
      "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    Promise
      .resolve(
         {
          data: {
            id: "orunSTu",
            title: null,
            description: null,
            datetime: 1495556889,
            type: "image/gif",
            animated: false,
            width: 1,
            height: 1,
            size: 42,
            views: 0,
            bandwidth: 0,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: 0,
            is_ad: false,
            in_most_viral: false,
            tags: [],
            ad_type: 0,
            ad_url: "",
            in_gallery: false,
            deletehash: "x70po4w7BVvSUzZ",
            name: "",
            link: "http://i.imgur.com/orunSTu.gif",
          },
          success: true,
          status: 200,
        }
      )
      //.then((response) => response.text())
      .then((result) => {
        console.log(result);
        const blog = { imageNumber: counter, src: result.data.link };
        setCounter(counter + 1);
        setBlogs([blog, ...blogs]);
        window.scrollTo(0,document.body.scrollHeight);
      })
      .catch((error) => console.log("error", error));

    // const blog = {
    //   imageNumber: counter,
    //   src:
    //     "https://tse1.mm.bing.net/th?id=OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK&pid=Api",
    // };
    // setCounter(counter + 1);
    // setBlogs([blog, ...blogs]);
    // // React transition? Animation
    // window.scrollTo(0,document.body.scrollHeight);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  console.log(blogs);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
      {/* <input type="image" src="logo192" alt="Submit" onChange={ handleImage }/> */}
      {/* <input type="text" onChange={handleImage} /> */}
      <Dropzone onDrop={handleImage} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => {
          return (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {<button className="upload">Upload</button>}
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default Home;