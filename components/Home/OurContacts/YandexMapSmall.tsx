import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMapSmall = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.750449, 37.730967], zoom: 11 }}
        width={300}
        height={300}
      >
        <Placemark defaultGeometry={[55.750449, 37.730967]} />
      </Map>
    </YMaps>
  );
};

export default YandexMapSmall;
