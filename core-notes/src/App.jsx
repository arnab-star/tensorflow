import { Routes, Route } from "react-router-dom";
import SignUpPages from "./pages/signupPages";
import DetailsPage from "./pages/detailspage";
import SubjectNine from "./components/class/nine/nine";
import SubjectTen from "./components/class/ten/ten";
import SubjectEleven from "./components/class/eleven/eleven";
import SubjectTwelve from "./components/class/twelve/twelve";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPages />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/subjectsnine" element={<SubjectNine />} />
      <Route path="/subjectsten" element={<SubjectTen />} />
      <Route path="/subjectseleven" element={<SubjectEleven />} />
      <Route path="/subjectstwelve" element={<SubjectTwelve />} />
      {/*<Route path="/details" element={<DetailsPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/details" element={<DetailsPage />} /> */}
    </Routes>
  )
}