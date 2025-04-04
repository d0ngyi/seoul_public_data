"use client";
import { data } from "../../../data/dummyData";
import classes from "../../../styles/event.module.css";

export default function Event() {
  return (
    <div>
      <div className={classes.option}>
        <select>
          <option value="">시기</option>
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3">3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
        <select>
          <option value="">전체 지역</option>
          <option value="강남구">강남구</option>
          <option value="강동구">강동구</option>
          <option value="강북구">강북구</option>
          <option value="강서구">강서구</option>
          <option value="관악구">관악구</option>
          <option value="광진구">광진구</option>
          <option value="구로구">구로구</option>
          <option value="금천구">금천구</option>
          <option value="노원구">노원구</option>
          <option value="도봉구">도봉구</option>
          <option value="동대문구">동대문구</option>
          <option value="동작구">동작구</option>
          <option value="마포구">마포구</option>
          <option value="서대문구">서대문구</option>
          <option value="서초구">서초구</option>
          <option value="성동구">성동구</option>
          <option value="성북구">성북구</option>
          <option value="송파구">송파구</option>
          <option value="양천구">양천구</option>
          <option value="영등포구">영등포구</option>
          <option value="용산구">용산구</option>
          <option value="은평구">은평구</option>
          <option value="종로구">종로구</option>
          <option value="중구">중구</option>
          <option value="중랑구">중랑구</option>
        </select>
      </div>

      <div className={classes.container}>
        {data.map((event, index) => (
          <div key={index} className={classes.card}>
            <img
              src={event.main_img}
              alt={event.title}
              className={classes.image}
            />

            <div className={classes.content}>
              <h2 className={classes.title}>{event.title}</h2>
              <p>
                <strong>날짜:</strong> {event.date}
              </p>
              <p>
                <strong>장소:</strong> {event.place}
              </p>

              <a
                href={event.hmpg_addr}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
              >
                자세히 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
