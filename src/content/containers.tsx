import type { FC } from 'hono/jsx';

const CompanyHeading = () => (
  <h1>
    <a href="/" title="Soichi Mizutani Design Office Co., Ltd.">
      <span>Soichi Mizutani</span> Design Office Co., Ltd.
    </a>
  </h1>
)

const Footer = () => (
  <small>Copyright &copy; 2025 Soichi Mizutani Design Office Co,.Ltd. All Rights Reserved.</small>
)

export const SingleColumnContainer: FC = ({ children }) => (
  <div id="container">
    <div></div>
    <header>
      <CompanyHeading />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export const TwoColumnsContainer: FC = ({ children }) => (
  <div id="container">
    <div></div>
    <header>
      <CompanyHeading />
    </header>
    <main>
      <nav>nav</nav>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)
