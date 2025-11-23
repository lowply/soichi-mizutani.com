import type { FC } from 'hono/jsx'

const CompanyHeading = () => (
  <h1>
    <a href="/" title="Soichi Mizutani Design Office Co., Ltd.">
      <span>Soichi Mizutani</span> Design Office Co., Ltd.
    </a>
  </h1>
)

const Footer = () => (
  <div>
    <div><a href="/about">About</a> | <a href="/company">Company</a></div>
    <small>Copyright &copy; {new Date().getFullYear()} Soichi Mizutani Design Office Co,.Ltd. All Rights Reserved.</small>
  </div>
)

const SideManu = () => (
  <nav>
    <h5>Interior Design</h5>
    <ul>
      <li><a href="/works/interior-shop/">Shop</a></li>
      <li><a href="/works/interior-restaurant/">Restaurant</a></li>
      <li><a href="/works/interior-bar/">Bar</a></li>
      <li><a href="/works/interior-gallery/">Gallery</a></li>
      <li><a href="/works/interior-office/">Office</a></li>
      <li><a href="/works/interior-medical/">Medical</a></li>
      <li><a href="/works/interior-hotel/">Hotel</a></li>
    </ul>
    <h5>Architecture</h5>
    <ul>
      <li><a href="/works/architecture-house/">House</a></li>
    </ul>
    <h5>Exhibition</h5>
    <ul>
      <li><a href="/works/exhibition/void/">Void &gt; 0<sup>4</sup> / 1998</a></li>
      <li><a href="/works/exhibition/pole/">一本の棒 / 2011</a></li>
    </ul>
    <h5>Other Works</h5>
    <ul>
      <li><a href="/works/other-complex/">Complex</a></li>
      <li class="disabled">Graphic</li>
      <li class="disabled">Fixture</li>
      <li class="disabled">Furniture</li>
    </ul>
  </nav>
)

export const SingleColumnContainer: FC = ({ children }) => (
  <div id="container" class="single-column">
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
  <div id="container" class="two-columns">
    <div></div>
    <header>
      <CompanyHeading />
    </header>
    <main>
      <SideManu />
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)
