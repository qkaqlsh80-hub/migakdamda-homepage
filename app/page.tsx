"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}

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
    items: ["냉채", "전", "국수", "구이", "식사"],
  },
  {
    id: "alacha",
    number: "",
    title: "알아차림",
    subtitle: "계절과 셰프의 구성을 담은 미각담다의 대표 코스",
    price: "80,000원",
    image: "/images/ara-charim-01.jpg",
    items: ["냉채", "전", "만두", "국수", "볶음", "구이", "식사"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site" id="home">
      <header className={`topNav ${scrolled ? "visible" : ""}`}>
        <span className="topNavLogo">미각담다</span>
        <span className="topNavTag">Korean Dining</span>
      </header>

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
              <a href="#gallery" onClick={() => setMenuOpen(false)}>갤러리</a>
              <a href="#info" onClick={() => setMenuOpen(false)}>이용 안내</a>
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
        <Reveal>
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
        </Reveal>
      </section>

      <section className="section" id="gallery">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2>미각담다 갤러리</h2>

          <div className="galleryGrid">
            {galleryImages.map((img, index) => (
              <div className="galleryItem" key={img}>
                <img src={img} alt={`미각담다 갤러리 ${index + 1}`} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section dark" id="info">
        <Reveal>
          <p className="eyebrow">Guide</p>
          <h2>이용 안내</h2>

          <div className="infoGrid">
            <div className="infoCard">
              <h3>주차</h3>
              <p>
                매장 주차장(실내)
                <br />
                1시간 3,000원 · 추가 1시간당 3,000원
              </p>
              <p className="infoNote">
                단성 오피스텔 유료 주차장(1시간 3,000원)도 이용 가능합니다.
              </p>
            </div>

            <div className="infoCard">
              <h3>콜키지</h3>
              <p>
                와인 · 병당 30,000원
                <br />
                위스키 · 병당 50,000원
                <br />
                기타 주류 · 병당 30,000원
              </p>
            </div>

            <div className="infoCard">
              <h3>룸 안내</h3>
              <p>4~14인 · 인당 최소 50,000원 주문</p>
              <p className="infoNote">
                룸 2개, 각 6~7석 / 개방 시 12~14인 수용 가능
                <br />
                룸 이용 시 차림메뉴로만 진행됩니다.
              </p>
            </div>

            <div className="infoCard">
              <h3>이용 참고</h3>
              <p>
                코스와 술을 즐기는 다이닝 공간으로
                <br />
                노키즈존으로 운영됩니다.
              </p>
              <p className="infoNote">유아용 의자는 준비되어 있습니다.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section dark" id="origin">
        <Reveal>
          <p className="eyebrow">Origin</p>
          <h2>원산지 표시</h2>
          <p className="sectionDesc">
            주요 식재료의 원산지는 매장 기준에 따라 투명하게 안내드립니다.
          </p>
        </Reveal>
      </section>

      <section className="contactSection">
        <Reveal>
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
        </Reveal>

        <Reveal className="contactImages">
          <img src="/images/gallery_001.jpg" alt="미각담다 이미지" />
          <img src="/images/gallery_002.jpg" alt="미각담다 이미지" />
        </Reveal>
      </section>
    </main>
  );
}