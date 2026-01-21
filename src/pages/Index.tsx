export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">КРАСНЫЙ*ДРАКОН</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Заказать доставку</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОГНЕННЫЕ РОЛЛЫ,
              <br />
              ЧЕСТНАЯ <span>ЦЕНА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Аутентичная японская кухня в ретро-подаче. Свежайшие роллы, суши и сеты для истинных гурманов азиатской кухни.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/635b2d4b-c03c-41b4-a4f7-7ae0db310a4d/files/bf39c159-929a-4431-ae58-245f95d61127.jpg')" }}>
            <div className="sticker">
              СВЕЖАЯ
              <br />
              РЫБА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЯПОНИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЯММИ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * РОЛЛЫ КОТОРЫЕ РВУТ * ДОСТАВКА ЗА 30 МИНУТ * СВЕЖАЯ РЫБА КАЖДЫЙ ДЕНЬ * ОТКРЫТЫ ДО 23:00 * ЛУЧШИЕ В ГОРОДЕ *
            РОЛЛЫ КОТОРЫЕ РВУТ * ДОСТАВКА ЗА 30 МИНУТ * СВЕЖАЯ РЫБА КАЖДЫЙ ДЕНЬ * ОТКРЫТЫ ДО 23:00 * ЛУЧШИЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ ПРОДАЖ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Филадельфия"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Филадельфия</h3>
                  <span className="price">520 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Классика японской кухни: лосось, сливочный сыр, огурец в рисе и нори. 8 шт.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Спайси Дракон"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Спайси Дракон</h3>
                  <span className="price">650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Угорь, острый соус спайси, авокадо, красная икра. 8 шт.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Калифорния"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Калифорния</h3>
                  <span className="price">480 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Краб, авокадо, огурец, икра тобико. Рис снаружи. 8 шт.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВОСТОК ВСТРЕЧАЕТ РЕТРО.</h2>
            <p className="vibe-text">
              Мы не просто готовим роллы. Мы создаём вкусовые впечатления. От аутентичных японских рецептов до стильной ретро-подачи — каждый ролл сделан с душой. Свежая рыба ежедневно, рис премиум-класса, доставка за 30 минут.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша философия
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @REDDRAGON.SUSHI
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">КРАСНЫЙ*ДРАКОН</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для японской кухни премиум-класса в ретро-стиле. С 2024, но вкус — вне времени.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Чт: 10:00 — 23:00</li>
            <li>Пт-Сб: 10:00 — 00:00</li>
            <li>Вс: 11:00 — 23:00</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 КРАСНЫЙ ДРАКОН</span>
          <span>ВКУС ЯПОНИИ</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  );
}