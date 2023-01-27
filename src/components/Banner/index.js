import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__title">Dịch vụ Sửa Chữa</div>
      <div className="banner__des">
        Lên đến<span> Giảm 70%</span> - Tất cả đồng hồ và phụ kiện
      </div>
      <button type="button" className="banner__btn">
        Tìm hiểu thêm
      </button>
    </section>
  );
};

export default Banner;
