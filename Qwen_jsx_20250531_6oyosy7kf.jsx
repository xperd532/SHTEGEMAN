import React, { useState } from "react";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const menuItems = [
    "Электронный замок",
    "Стиральная машина",
    "Электро камин",
    "Посудомоечная машина",
    "Котел отопление",
    "Духовая печь",
    "Смарт ТВ / Кино",
    "Аптечка",
    "Огнетушитель",
    "Правила проживания",
    "Рестораны поблизости",
    "Магазины поблизости",
    "Аптеки поблизости",
    "Достопримечательности района Амалиенау",
    "Общественный транспорт",
  ];

  // Маршруты общественного транспорта
  const publicTransportRoutes = {
    nearbyStop: "Остановка «Улица Чернышевского»",
    yandexLink: "https://yandex.ru/maps/11038/kaliningrad/?ll=20.511769%2C54.711541&z=16&masstransit[stopId]=stop__9889395",
    routes: [
      {
        type: "Троллейбус",
        number: "№ 1",
        direction: "Центр города – Старый проспект",
        time: "Интервал ~10 мин",
        yandexRouteLink: "https://yandex.ru/maps/11038/kaliningrad/?ll=20.511769%2C54.711541&z