import React from "react";
import KakaoMap from "../components/studyMap/KaKaoMap";
import StudyDetail from "../components/studyMap/StudyDetail";

export default function StudyMapPage() {

  return (
    <div className="flex flex-row">
      <KakaoMap/>
      <StudyDetail/>
    </div>
  );
}