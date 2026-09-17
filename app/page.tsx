"use client";

import { useState } from "react";

const naverMapUrl =
  "https://map.naver.com/p/entry/place/1644794960?c=15.00,0,0,0,dh";

const catchTableUrl =
  "https://app.catchtable.co.kr/ct/map/search-map?keyword=%EB%AF%B8%EA%B0%81%EB%8B%B4%EB%8B%A4%EB%8B%A4%EC%9D%B4%EB%8B%9D";

const galleryImages = Array.from({ length: 17 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `/images/gallery_${num}.jpg`;
});

const courses = [
  {
    id: "makgim",
    number: "",
    title: "맡김차림",
    subtitle: "한식의 정갈함을 부담 없이 경험할 수 있는 코스",
    price: "50,000원",
    image: "/images/matgim-charim-01.jpg",
    items: [
      "제철 맞이 한입",
      "맑은 국물 또는 계절 죽",
      "오늘의 생선 또는 해산물",
      "제철 채소 요리",
      "메인 육류 요리",
      "식사",
      "후식과 차",
    ],
  },
  {
    id: "alacha",
    number: "",
    title: "알아차림",
    subtitle: "계절과 셰프의 구성을 담은 미각담다의 대표 코스",
    price: "80,000원",
    image: "/images/ara-charim-01.jpg",
    items: [
      "계절 한입",
      "오늘의 전채",
      "따뜻한 국물",
      "주요리",
      "식사",
      "후식",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <main className="site" id="home">
      <button className="hamburger" onClick={() => setMenuOpen(true)}>
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="sideMenuWrap">
          <div className="sideDim" onClick={() => setMenuOpen(false)} />
          <aside className="sideMenu">
            <button className="closeBtn" onClick={() => setMenuOpen(false)}>
              ×
            </button>

            <a href="#home" className="sideLogo" onClick={() => setMenuOpen(false)}>
              <strong>미각담다</strong>
              <span>MIGAKDAMDA</span>
            </a>

            <nav className="sideLinks">
              <a href="#course" onClick={() => setMenuOpen(false)}>코스</a>
              <a href="#alacarte" onClick={() => setMenuOpen(false)}>단품 메뉴</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>갤러리</a>
              <a href="#origin" onClick={() => setMenuOpen(false)}>원산지</a>
              <a href={naverMapUrl} target="_blank">길찾기</a>
              <a href={catchTableUrl} target="_blank">온라인예약</a>
            </nav>

            <div className="sideInfo">
              <p>서울 강남구 강남대로 240</p>
              <p>미각담다 다이닝</p>
            </div>
          </aside>
        </div>
      )}

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Korean Dining</p>
          <h1>미각담다</h1>
          <p className="subtitle">계절의 맛을 정갈하게 담아내는 한식 다이닝</p>

          <div className="heroButtons">
            <a href={catchTableUrl} target="_blank" className="btn primary">
              온라인예약
            </a>
            <a href={naverMapUrl} target="_blank" className="btn secondary">
              길찾기
            </a>
          </div>
        </div>
      </section>

      <section className="section courseSection" id="course">
        <p className="eyebrow">Course</p>
        <h2>두 가지 코스</h2>

        <div className="courseGrid">
          {courses.map((course) => (
            <button
              key={course.id}
              className={`card courseCard ${
                selectedCourse.id === course.id ? "active" : ""
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              <span>{course.number}</span>
              <h3>{course.title}</h3>
              <p>{course.subtitle}</p>
              <strong>{course.price}</strong>
            </button>
          ))}
        </div>

        <div className="courseDetail">
          <div className="courseDetailText">
            <p className="eyebrow">Selected Course</p>
            <h3>{selectedCourse.title}</h3>
            <p>{selectedCourse.subtitle}</p>
            <strong>{selectedCourse.price}</strong>

            <ol>
              {selectedCourse.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <div className="heroButtons">
              <a href={catchTableUrl} target="_blank" className="btn primary">
                온라인예약
              </a>
              <a href={naverMapUrl} target="_blank" className="btn darkBtn">
                길찾기
              </a>
            </div>
          </div>

          <img src={selectedCourse.image} alt={selectedCourse.title} />
        </div>
      </section>

      <section className="section dark" id="alacarte">
        <p className="eyebrow">A La Carte</p>
        <h2>곁들임 · 단품 메뉴</h2>
        <p className="sectionDesc">
          코스와 함께 즐기기 좋은 곁들임 메뉴와 단품 메뉴를 준비했습니다.
        </p>
      </section>

      <section className="section" id="gallery">
        <p className="eyebrow">Gallery</p>
        <h2>미각담다 갤러리</h2>

        <div className="galleryGrid">
          {galleryImages.map((img, index) => (
            <img key={img} src={img} alt={`미각담다 갤러리 ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="section dark" id="origin">
        <p className="eyebrow">Origin</p>
        <h2>원산지 표시</h2>
        <p className="sectionDesc">
          주요 식재료의 원산지는 매장 기준에 따라 투명하게 안내드립니다.
        </p>
      </section>

      <section className="contactSection">
        <div>
          <div className="line" />
          <p className="eyebrow white">바로 여기서 기다리고 있어요</p>
          <h2>저희 레스토랑에<br />방문하세요</h2>

          <p className="address">
            서울 강남구 강남대로 240<br />
            미각담다 다이닝
          </p>

          <div className="heroButtons">
            <a href={naverMapUrl} target="_blank" className="btn whiteBtn">
              길찾기
            </a>
            <a href={catchTableUrl} target="_blank" className="btn whiteBtn">
              온라인예약
            </a>
          </div>
        </div>

        <div className="contactImages">
          <img src="/images/gallery_001.jpg" alt="미각담다 이미지" />
          <img src="/images/gallery_002.jpg" alt="미각담다 이미지" />
        </div>
      </section>
    </main>
  );
}