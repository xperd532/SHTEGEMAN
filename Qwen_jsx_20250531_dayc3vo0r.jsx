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

  // Маршруты с ближайшей остановки
  const publicTransportRoutes = {
    nearbyStop: "Остановка «Улица Чернышевского»",
    routes: [
      {
        type: "Троллейбус",
        number: "№ 1",
        direction: "Центр города – Старый проспект",
        time: "Интервал ~10 мин"
      },
      {
        type: "Автобус",
        number: "№ 9",
        direction: "Ж/д вокзал – Юго-западный жилмассив",
        time: "Интервал ~7–12 мин"
      },
      {
        type: "Автобус",
        number: "№ 5",
        direction: "Центр города – посёлок Озёрный",
        time: "Интервал ~15–20 мин"
      },
      {
        type: "Троллейбус",
        number: "№ 5а",
        direction: "Южный вокзал – Центр города",
        time: "Интервал ~15 мин"
      },
    ],
  };

  // Данные о достопримечательностях
  const mockAttractions = [
    {
      name: "Фридландские ворота",
      description:
        "Единственные уцелевшие городские ворота Кёнигсберга. Символ города и важный исторический памятник.",
      images: [
        "https://placehold.co/600x300/fcd08c/fcd08c?text=Фридландские+ворота+1",
        "https://placehold.co/600x300/fbe5b0/fbe5b0?text=Фридландские+ворота+2",
        "https://placehold.co/600x300/fbc86d/fbc86d?text=Фридландские+ворота+3",
      ],
    },
    {
      name: "Зоопарк «Южный»",
      description:
        "Современный зоопарк на юго-западе Калининграда, в котором представлены животные со всего мира.",
      images: [
        "https://placehold.co/600x300/f7eac5/f7eac5?text=Зоопарк+Южный+1",
        "https://placehold.co/600x300/fcecc9/fcecc9?text=Зоопарк+Южный+2",
        "https://placehold.co/600x300/eecfa5/eecfa5?text=Зоопарк+Южный+3",
      ],
    },
    {
      name: "Башня Врангеля",
      description:
        "Историческая водонапорная башня в стиле неоготики. Имеет интересную архитектуру и вид на город.",
      images: [
        "https://placehold.co/600x300/fcd08c/fcd08c?text=Башня+Врангеля+1",
        "https://placehold.co/600x300/fbe5b0/fbe5b0?text=Башня+Врангеля+2",
        "https://placehold.co/600x300/fbc86d/fbc86d?text=Башня+Врангеля+3",
      ],
    },
  ];

  const getPageContent = (page) => {
    if (page === "Общественный транспорт") {
      return (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">Общественный транспорт</h2>
          <p className="text-yellow-700 mb-6">
            Ближайшая остановка общественного транспорта к вашему адресу:
            <br />
            <strong>ул. Чернышевского, д. 33А (остановка «Улица Чернышевского»)</strong>
            <br />
            Ниже представлены доступные маршруты.
          </p>

          {/* Список маршрутов */}
          <ul className="space-y-4">
            {publicTransportRoutes.routes.map((route, index) => (
              <li key={index} className="bg-yellow-100 p-4 rounded shadow-sm">
                <h3 className="font-semibold text-yellow-900">{route.type} {route.number}</h3>
                <p className="text-yellow-700">Направление: {route.direction}</p>
                <p className="text-yellow-700">График: {route.time}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (page === "Достопримечательности района Амалиенау") {
      return (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">Достопримечательности Амалиенау</h2>
          <p className="text-yellow-700 mb-6">
            Район Амалиенау — один из самых старых районов Калининграда, богатый историей и культурой. Ниже вы найдете популярные места,
            которые стоит посетить.
          </p>

          {/* Список достопримечательностей */}
          <ul className="space-y-8">
            {mockAttractions.map((attraction, idx) => (
              <li key={idx} className="bg-yellow-100 p-4 rounded shadow-sm">
                <h3 className="font-semibold text-yellow-900 text-xl">{attraction.name}</h3>
                <p className="text-yellow-700 mt-2 mb-4">{attraction.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {attraction.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={attraction.name}
                      className="rounded shadow-md w-full h-auto"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    switch (page) {
      case "home":
        return {
          title: "Добро пожаловать в Апартаменты Stegeman strasse",
          text: "Уютные апартаменты в районе Амалиенау с современными удобствами и прекрасным видом на окрестности. Исследуйте наши возможности и окружение.",
          image: "https://placehold.co/600x300/eecfa5/eecfa5?text=Stegeman+Strasse",
        };
      case "Электронный замок":
        return {
          title: "Электронный замок",
          text: "Электронный замок обеспечивает безопасность и удобство. Подробная инструкция по использованию находится здесь.",
          image: "https://placehold.co/600x300/fcd08c/fcd08c?text=Электронный+замок",
        };
      case "Стиральная машина":
        return {
          title: "Стиральная машина",
          text: "Современная стиральная машина с несколькими режимами стирки. Инструкции по эксплуатации и уходу за техникой.",
          image: "https://placehold.co/600x300/fbe5b0/fbe5b0?text=Стиральная+машина",
        };
      default:
        return {
          title: page,
          text: `Это описание для раздела "${page}". Здесь можно разместить информацию, изображения и дополнительные детали.`,
          image: `https://placehold.co/600x300/${["f7eac5", "fcecc9", "fbe5b0", "fcd08c", "fbc86d"][Math.floor(Math.random() * 5)]}/${[
            "f7eac5",
            "fcecc9",
            "fbe5b0",
            "fcd08c",
            "fbc86d",
          ][Math.floor(Math.random() * 5)]}?text=${encodeURIComponent(page)}`,
        };
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      {/* Header with logo */}
      <header className="bg-yellow-100 shadow-md p-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="https://placehold.co/80x80/ede4c1/ede4c1?text=Прусский+дом"
            alt="Логотип Прусский дом"
            className="w-16 h-16 rounded-md shadow-sm"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-900">Апартаменты Stegeman Strasse</h1>
        </div>
        <p className="text-yellow-700 italic">Стильное жильё в историческом районе Амалиенау</p>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-8 relative">
        {/* Decorative frame around the main content */}
        <div className="absolute top-0 left-0 w-full h-full border-8 border-dashed border-yellow-300 pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden">
          {/* Sidebar with vertical menu */}
          <aside className="bg-yellow-200 p-6 shadow-inner w-full md:w-64 flex-shrink-0">
            <h2 className="text-xl font-bold text-yellow-900 mb-6">Инструкции и советы</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActivePage("home")}
                className={`block w-full text-left px-4 py-2 rounded-full transition-all duration-300 ${
                  activePage === "home" ? "bg-yellow-400 text-yellow-900 font-medium" : "bg-yellow-300 hover:bg-yellow-400"
                }`}
              >
                Главная
              </button>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActivePage(item)}
                  className={`block w-full text-left px-4 py-2 rounded-full transition-all duration-300 ${
                    activePage === item
                      ? "bg-yellow-400 text-yellow-900 font-medium"
                      : "bg-yellow-300 hover:bg-yellow-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-6">
            {(activePage === "Достопримечательности района Амалиенау" ||
              activePage === "Общественный транспорт") ? (
              getPageContent(activePage)
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
                  {getPageContent(activePage).title}
                </h2>
                <p className="text-yellow-700 mb-6">{getPageContent(activePage).text}</p>
                <img
                  src={getPageContent(activePage).image}
                  alt={activePage}
                  className="rounded shadow-md"
                />
              </>
            )}
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-yellow-800">
          &copy; 2025 Апартаменты Stegeman Strasse. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default App;