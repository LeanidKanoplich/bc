### README.md

#### Проект bconto-website

Этот файл описывает все шаги, которые мы предприняли для создания первой страницы проекта bconto-website, включая структуру файлов, HTML, CSS и JavaScript код с комментариями на русском языке.

---

#### Структура проекта

```
bconto-website/
├── index.html          # Главный HTML файл
├── styles.css          # CSS файл для стилизации
├── scripts.js          # JavaScript файл для функциональности
├── assets/             # Каталог для статических ресурсов
│   └── images/         # Каталог для изображений
│       ├── accountants-image.jpg
│       ├── interface-example.jpg
│       ├── invoice-example.jpg
│       └── clouds-background.jpg
└── README.md           # Документация (этот файл)
```

---

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Установка кодировки страницы -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Адаптивный дизайн -->
    <title>bconto</title> <!-- Название вкладки -->
    <link rel="stylesheet" href="styles.css"> <!-- Подключение CSS -->
    <script src="scripts.js"></script> <!-- Подключение JavaScript -->
</head>
<body>
    <header>
        <div class="logo">bconto</div> <!-- Логотип компании -->
        <nav>
            <ul>
                <li><a href="#">Product</a></li> <!-- Пункт меню Product -->
                <li><a href="#">Integrations</a></li> <!-- Пункт меню Integrations -->
                <li><a href="#">Teaching</a></li> <!-- Пункт меню Teaching -->
                <li><a href="#">Prices</a></li> <!-- Пункт меню Prices -->
                <li><a href="#">Accounting Companies</a></li> <!-- Пункт меню Accounting Companies -->
            </ul>
        </nav>
        <div class="auth-buttons">
            <button onclick="showLogin()">Login</button> <!-- Кнопка входа -->
            <button onclick="showRegister()">Register</button> <!-- Кнопка регистрации -->
        </div>
    </header>
    <main>
        <section class="main-block">
            <div class="background-clouds"></div> <!-- Фоновые облака -->
            <h1>An accounting program in the cloud that unites the accountant and the manager</h1> <!-- Основной заголовок -->
            <button class="start-using">Start using</button> <!-- Кнопка "Start using" -->
            <p class="subtitle">90 days free</p> <!-- Подзаголовок -->
            <img src="assets/images/accountants-image.jpg" alt="Two accountants"> <!-- Изображение бухгалтеров -->
        </section>
        
        <section class="functionality-block">
            <h2>Account recognition within 30 seconds.</h2> <!-- Заголовок секции функционала -->
            <ul>
                <li>Within 30 seconds until full recognition;</li> <!-- Пункт списка функционала -->
                <li>Recognizes non-standard accounts;</li>
                <li>Multiple accounts at once;</li>
                <li>Self-improvement with continued use;</li>
                <li>The account is automatically uploaded to storage.</li>
            </ul>
            <button class="test-recognition">Test recognition</button> <!-- Кнопка тестирования распознавания -->
            <img src="assets/images/interface-example.jpg" alt="Interface example"> <!-- Пример интерфейса -->
        </section>

        <section class="integration-block">
            <h2>Wide integration options</h2> <!-- Заголовок секции интеграций -->
            <ul>
                <li>Automatic import of bank statements;</li> <!-- Пункт списка интеграций -->
                <li>API integration;</li>
                <li>The most popular emails store plugins;</li>
                <li>Synchronization with e-commerce portals;</li>
                <li>Integrations with cash registers and POS systems.</li>
            </ul>
            <button class="integrations-apis">Integrations and APIs</button> <!-- Кнопка интеграций -->
            <img src="assets/images/integration-logos.jpg" alt="Integration logos"> <!-- Логотипы интеграций -->
        </section>

        <section class="benefits-block">
            <h2>Benefits</h2> <!-- Заголовок секции преимуществ -->
            <ul>
                <li>10,000+ companies use bconto - Secure and reliable accounting software</li> <!-- Пункт списка преимуществ -->
                <li>Teamwork - Effective work in one system</li>
                <li>Works with all devices - Available on a smart device, TV, or PC</li>
                <li>Easy choice - Companies providing accounting services</li>
                <li>All accounting modules - From invoicing to balance sheeting</li>
                <li>Friendly to accounting firms - Special conditions for accounting companies</li>
            </ul>
        </section>

        <section class="invoicing-block">
            <h2>Account in 20 seconds</h2> <!-- Заголовок секции выставления счетов -->
            <ul>
                <li>Unlimited number of invoices;</li> <!-- Пункт списка функционала выставления счетов -->
                <li>Ability to send e-mail by mail to the customer;</li>
                <li>Currency and language integration;</li>
                <li>Supports smart devices;</li>
                <li>Adding a logo to your account.</li>
            </ul>
            <button class="invoicing">Invoicing</button> <!-- Кнопка выставления счетов -->
            <img src="assets/images/invoice-example.jpg" alt="Invoice example"> <!-- Пример счета -->
        </section>

        <section class="additional-services-block">
            <h2>Additional Services</h2> <!-- Заголовок секции дополнительных услуг -->
            <div class="service">
                <h3>Free accounting courses</h3>
                <p>The only free accounting courses in Lithuania prepared by qualified teachers</p> <!-- Бесплатные курсы бухгалтерского учета -->
            </div>
            <div class="service">
                <h3>Encyclopedia</h3>
                <p>The free tax and accounting encyclopedia for accounting and tax professionals</p> <!-- Энциклопедия налогов и бухгалтерского учета -->
            </div>
            <div class="service">
                <h3>Accounting comics</h3>
                <p>The largest collection of accounting comics in Lithuania. Accounting that makes you feel good</p> <!-- Бухгалтерские комиксы -->
            </div>
        </section>
    </main>
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>bconto</h4>
                <ul>
                    <li><a href="#">About bconto</a></li> <!-- О bconto -->
                    <li><a href="#">Reviews</a></li> <!-- Отзывы -->
                    <li><a href="#">Free account recognition</a></li> <!-- Бесплатное распознавание счетов -->
                    <li><a href="#">Improvement plan</a></li> <!-- План улучшений -->
                    <li><a href="#">Advantages of the cloud</a></li> <!-- Преимущества облака -->
                    <li><a href="#">Accounting program comparison</a></li> <!-- Сравнение бухгалтерских программ -->
                    <li><a href="#">For partners</a></li> <!-- Для партнеров -->
                </ul>
            </div>
            <div class="footer-section">
                <h4>Calculators</h4>
                <ul>
                    <li><a href="#">Salary calculator 2024</a></li> <!-- Калькулятор зарплаты 2024 -->
                    <li><a href="#">Per diem calculator</a></li> <!-- Суточный калькулятор -->
                    <li><a href="#">Calendar of working days</a></li> <!-- Календарь рабочих дней -->
                    <li><a href="#">Individual activity calculator</a></li> <!-- Калькулятор индивидуальной деятельности -->
                </ul>
            </div>
            <div class="footer-section">
                <h4>Very Serious</h4>
                <ul>
                    <li><a href="#">Rules</a></li> <!-- Правила -->
                    <li><a href="#">Encyclopedia FAQ</a></li> <!-- Вопросы по энциклопедии -->
                    <li><a href="#">Comics</a></li> <!-- Комиксы -->
                    <li><a href="#">Brand</a></li> <!-- Бренд -->
                    <li><a href="#">Contacts</a></li> <!-- Контакты -->
                </ul>
            </div>
            <div class="footer-section">
                <h4>Languages</h4>
                <ul>
                    <li><a href="#">German</a></li> <!-- Немецкий -->
                    <li><a href="#">Polish</a></li> <!-- Польский -->
                    <li><a href="#">English</a></li> <!-- Английский -->
                    <li><a href="#">Russian</a></li> <!-- Русский -->
                </ul>
            </div>
            <form class="newsletter-form">
                <input type="email" placeholder="Email address"> <!-- Поле ввода email -->
                <label>
                    <input type="checkbox"> I agree to