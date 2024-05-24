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
           Machine learning boosts geospatial analysis, with Python
          leading due to its ease of use and robust libraries. This chapter
          covers Python libraries and QGIS plugins for advanced geospatial
          tasks. map segmentation.
        </p>
      </div>
    </>
  );
};

export default Book;
