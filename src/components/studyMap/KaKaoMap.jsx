import { React, useEffect, useState, useCallback } from "react";
import axios from "axios";
import Mymarker from "./Mymarker";
import Marker from "./Marker";


const { kakao } = window;
//위치데이터받아오기
const LocResonpseURL = process.env.REACT_LOC_RESPONSE_URL
//위치데이터보내기
const LocRequestURL = process.env.REACT_LOC_REQUEST_URL

export default function KakaoMap() {
    const [location, setLocation] = useState("");
    const [map, setMap] = useState();
    const [markerPosition, setMarkerPosition] = useState(null);
    const [user, setUser] = useState();

    const onMarkerMove = (latlng) => {
        setMarkerPosition(latlng);
    };

    // 현재 위치 가져오기
    const getCurrentPosition = useCallback(() => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
        }

        function success(position) {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        }

        function error() {
        setLocation({
            latitude: 33.450701,
            longitude: 126.570667,
        });
        console.log("위치 받기 실패");
        }
    }, []);

    // 카카오지도 API 가져오기
    const kakaoMap = () => {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude), // 지도의 중심 좌표
        level: 3, // 지도의 확대레벨
        };
        setMap(new kakao.maps.Map(container, options)); //지도를 생성합니다
    }

    // 위치데이터 받아오기
    const getLocation = () => {
        axios
        .get(
        `${LocResonpseURL}/api/location/call?latitude=${location.latitude}&longitude=${location.longitude}&distance=3`
        )
        .then(function (response) {
        setUser(response.data);
        console.log("GET");
        console.log(response.data);
        });
    }

    // 위치데이터 보내기
    const postLocation = () => {
        axios
        .post(`${LocRequestURL}/api/location/save`, {
            latitude: markerPosition.getLat(),
            longitude: markerPosition.getLng(),
        })
        .then(function (response) {
            console.log("POST");
            console.log(response.data);
        });
    }

    useEffect(() => {
        getCurrentPosition();
    }, [getCurrentPosition]);

    useEffect(() => {
        if (location) {
        kakaoMap();
        getLocation();
        }
    }, [location]);


    const onClickButton = async () => {
        console.log("서버에 위치데이터 보내기");
        postLocation();
    };
    // if (user) {
    //   console.log(user.locationResponses);
    //   console.log(user.locationResponses.map((v) => console.log(v.latitude)));
    // }

  return (
    <div>
    <div id="map" className="w-[75vw] h-[100vh]">
      {user &&
        user.locationResponses.map((v) => (
          <Marker map={map} location={location} kakao={kakao} mapdata={v} />
        ))}

      <Mymarker
        map={map}
        location={location}
        kakao={kakao}
        onMarkerMove={onMarkerMove}
      />

      {user && user.locationResponses.map((v) => {
      <Marker
        map={map}
        kakao={kakao}
        mapdata={v}
      />
      })             
    }                  
    </div>
    <button onClick={onClickButton}>시작하기</button>
  </div>
  );
}