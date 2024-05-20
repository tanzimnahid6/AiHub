import React from "react";

const Book = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <img
          src="https://i.ibb.co/59nW8Bj/ezgif-3-624b5e372e.jpg"
          alt=""
          className="rounded"
        />
        <div className="flex flex-col">
          <h1 className="text-semibold  text-xl">
            Geospatial Machine Learning and the Power of Python Programming:
            Libraries, Tools, Applications, and Plugins
          </h1>
        </div>
      </div>
      <p className="text-xs  font-bold mt-2">
        By-Munir Ahmad, Muhammad Awais Ali, Md. Rokibul Hasan, Froilan D. Mobo,
        Shahid Iqbal Rai
      </p>

      <div>
        <p className="mt-4">
          Machine learning can play a critical role in geospatial analysis,
          providing enhanced computing efficiency, flexibility, and scalability,
          improved predictive capabilities, complicated problem resolution, and
          information extraction from big datasets. Python has emerged as the
          predominant language for geospatial machine learning due to its
          user-friendly interface, extensive library support, and versatility.
          This chapter has explored a diverse ecosystem of Python libraries
          ranging from Geopandas, Fiona, Leafmap, Geemap, PySAL, and Shapely for
          geospatial data manipulation to Keras Spatial, TorchGeo, Scikit-learn,
          and TensorFlow for deep learning applications. Complementing this, it
          also explored a variety of QGIS Python plugins that enhance geospatial
          machine learning capabilities, including smart-map, cluster analysis,
          PyQGIS, ClusterPoints, AI vectorizer, mapflow, deepness, and many
          more, offering functionalities for digital mapping, clustering, and
          map segmentation.
        </p>
      </div>
    </>
  );
};

export default Book;
