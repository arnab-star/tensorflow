import { Link } from "react-router-dom";
export default function Details() {
  return (
    <div className="class-buttons">
      <h1>Choose Your Class</h1>
      <Link to="/subjectsnine">
      <button className="class-btn class-9">
        Class 9 →
      </button>
      </Link>

      <Link to="/subjectsten">
        <button className="class-btn class-10">
          Class 10 →
        </button>
      </Link>

      <Link to="/subjectseleven">
        <button className="class-btn class-11">
          Class 11 →
        </button>
      </Link>

      <Link to="/subjectstwelve">
        <button className="class-btn class-12">
          Class 12 →
        </button>
      </Link>

    </div>
  );
}