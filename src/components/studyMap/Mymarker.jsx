import React, { useEffect, useState } from "react";

export default function Mymarker({ map, location, kakao, onMarkerMove }) {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (map) {
      // 마커 생성
      var imageSrc = "/studyMap/profilemarker.png",
        imageSize = new kakao.maps.Size(69, 69),
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      // 처음에는 현재 위치에 마커 생성
      var markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
      );

      var newMarker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      // 지도에 마커 추가
      newMarker.setMap(map);
      setMarker(newMarker);

      //지도의 중심이 변경될 때 마커 위치 업데이트
      kakao.maps.event.addListener(map, "center_changed", function () {
        var latlng = map.getCenter();
        newMarker.setPosition(latlng);
        console.log(`위도: ${latlng.getLat()} 경도: ${latlng.getLng()}`);
        onMarkerMove(latlng);
      });
    }
  }, [map]);

  return <div></div>;
}