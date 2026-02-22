import React, { useState, useEffect } from "react";

const RandomPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const randomPage = Math.floor(Math.random() * 10) + 1;

      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );

      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Random Photos from Picsum</h1>

      <button onClick={fetchPhotos}>Get New Photos</button>

      {loading && <p>Loading...</p>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", padding: "20px" }}>

        
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.download_url}
            alt={photo.author}
            width="200"
          />
          <p>Author: {photo.author}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RandomPhotos;