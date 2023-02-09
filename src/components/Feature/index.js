import React from "react";
import "./Feature.scss";
import f1 from "../../assets/img/features/f1.png";
import f2 from "../../assets/img/features/f2.png";
import f3 from "../../assets/img/features/f3.png";
import f4 from "../../assets/img/features/f4.png";
import f5 from "../../assets/img/features/f5.png";
import f6 from "../../assets/img/features/f6.png";

import c1 from "../../assets/category1.png";
import c2 from "../../assets/category2.png";
import c3 from "../../assets/category3.png";
import c4 from "../../assets/category4.png";
import c5 from "../../assets/category5.png";
import c6 from "../../assets/category6.png";
import c7 from "../../assets/category7.png";
import c8 from "../../assets/category8.png";
import c9 from "../../assets/category9.png";

const listCategories = [
  { img: c1, name: "Đồng hồ nam" },
  { img: c2, name: "Đồng hồ nữ" },
  { img: c3, name: "Đồng hồ đôi" },
  { img: c4, name: "Đồng hồ I&W Carrnival" },
  { img: c5, name: "Đồng hồ Carnival" },
  { img: c6, name: "Đồng hồ Lobinni" },
  { img: c7, name: "Đồng hồ Teintop" },
  { img: c8, name: "Đồng hồ Borman" },
  { img: c9, name: "Đồng hồ Aouke" },
  { img: c1, name: "Đồng hồ Mini Focus" },
];

const Feature = () => {
  return (
    // <div className="feature section-m1">
    //   <div className="feature__card">
    //     <img src={f1} alt="" className="feature__img" />
    //     <div className="feature__title">Miễn phí vận chuyển</div>
    //   </div>
    //   <div className="feature__card">
    //     <img src={f2} alt="" className="feature__img" />
    //     <div className="feature__title">Đặt hàng trực tuyến</div>
    //   </div>
    //   <div className="feature__card">
    //     <img src={f3} alt="" className="feature__img" />
    //     <div className="feature__title">Tiết kiệm tiền</div>
    //   </div>
    //   <div className="feature__card">
    //     <img src={f4} alt="" className="feature__img" />
    //     <div className="feature__title">Khuyễn mãi</div>
    //   </div>
    //   <div className="feature__card">
    //     <img src={f5} alt="" className="feature__img" />
    //     <div className="feature__title">Bán vui vẻ</div>
    //   </div>
    //   <div className="feature__card">
    //     <img src={f6} alt="" className="feature__img" />
    //     <div className="feature__title">Hỗ trợ 24/7</div>
    //   </div>
    // </div>

    <div className="feature__category">
      {listCategories.map((item, index) => (
        <div className="feature__category-card" key={index}>
          <img src={item.img} className="feature__category-img" />
          <div className="feature__category-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
