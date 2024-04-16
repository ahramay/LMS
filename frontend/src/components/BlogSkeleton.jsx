import React from "react";
import Skeleton from "react-loading-skeleton";
const BlogSkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((item, index) => (
      <div
        className="flex flex-col md:flex-row gap-10 p-5 w-full hover:shadow-xl rounded-lg transition-all"
        key={index}
      >
        <div className="w-full md:w-2/6">
          <Skeleton width={300} height={150} />
        </div>
        <div className="w-full md:w-4/6 flex flex-col justify-center">
          <h6 className="text-md  text-theme-green mb-2">
            <Skeleton />
          </h6>
          <h2 className="text-xl font-bold text-black mb-2 cursor-pointer">
            <Skeleton />
          </h2>
          <h5 className="text-md line-clamp-2  text-black mb-5">
            <Skeleton count={2} style={{ marginBottom: ".8rem" }} />
          </h5>
        </div>
      </div>
    ));
};

export default BlogSkeleton;
