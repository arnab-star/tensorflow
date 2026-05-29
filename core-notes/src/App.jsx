import { Routes, Route } from "react-router-dom";
import SignUpPages from "./pages/signupPages";
import DetailsPage from "./pages/detailspage";
import SubjectNine from "./components/class/nine/nine";
import SubjectTen from "./components/class/ten/ten";
import SubjectEleven from "./components/class/eleven/eleven";
import SubjectTwelve from "./components/class/twelve/twelve";
import NineMath from "./components/syllabus/nine/nine-math";
import NineLife from "./components/syllabus/nine/nine-life";
import NinePhysics from "./components/syllabus/nine/nine-physics";
import NineHistory from "./components/syllabus/nine/nine-history";
import NineBengali from "./components/syllabus/nine/nine-bengali";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPages />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/subjectsnine" element={<SubjectNine />} />
      <Route path="/subjectsten" element={<SubjectTen />} />
      <Route path="/subjectseleven" element={<SubjectEleven />} />
      <Route path="/subjectstwelve" element={<SubjectTwelve />} />
      <Route path="/mathematics" element={<NineMath />} />
      <Route path="/life-science" element={<NineLife />} />
      <Route path="/physical-science" element={<NinePhysics />} />
      <Route path="/history" element={<NineHistory />} />
      <Route path="/bengali" element={<NineBengali />} />
    </Routes>
  )
}