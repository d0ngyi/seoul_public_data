import Link from "next/link";
import classes from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/">로고들어갈 예정</Link>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link href="/event">행사보기</Link>
        </li>
        <li>
          <Link href="/calendar">달력보기</Link>
        </li>
        <li>
          <Link href="/myEvent">찜한 행사보기</Link>
        </li>
        <li>
          <Link href="/login">로그인 / 마이페이지</Link>
        </li>
      </ul>
    </div>
  );
}
