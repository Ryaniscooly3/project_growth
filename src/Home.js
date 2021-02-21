import React, { useState } from "react";
import VineList from "./VineList";
import Dropzone from "react-dropzone";

const Home = () => {
  const [vines, setVines] = useState([]);
  const [mids, setMids] = useState([]);
  const [counter, setCounter] = useState(0);

  const cycleMids = () => {
    if (counter % 2 === 0) {
      return "vine2.png";
    } else {
      return "vine.png";
    }
  };

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

    Promise.resolve({
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
    })
      .then((result) => {
        console.log(result);
        const vine = { imageNumber: counter, src: result.data.link };
        const mid = { imageNumber: counter, src: cycleMids() };
        setCounter(counter + 1);
        setVines([vine, ...vines]);
        setMids([mid, ...mids]);
        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch((error) => console.log("error", error));



    // fetch("https://api.imgur.com/3/image", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
        // console.log(result);
        // const vine = { imageNumber: counter, src: result.data.link };
        // const mid = { imageNumber: counter, src: cycleMids() };
        // setCounter(counter + 1);
        // setVines([vine, ...vines]);
        // setMids([mid, ...mids]);
        // window.scrollTo(0, document.body.scrollHeight);
    //       })
    //   .catch((error) => console.log("error", error));



  };

  console.log(vines);
  console.log(mids);
  return (
    <div className="home">
      <VineList vines={vines} mids={mids}/>
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
