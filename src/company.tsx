import { TwoColumnsContainer } from './containers'
import { LanguageSelector } from './language-selector'

const CompanyJa = () => (
  <div id="ja">
    <h3>会社概要</h3>
    <table class="table">
      <tr>
        <th>会社名</th>
        <td>株式会社 水谷壮市デザイン事務所</td>
      </tr>
      <tr>
        <th>代表取締役</th>
        <td><a href="/about">水谷壮市</a></td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>〒150-0031<br />東京都渋谷区桜丘町16-13 桜丘フロントIIビル 3F MIDORI.so SHIBUYA<br /><a href="https://goo.gl/maps/HHcSAjJ9WwQ2" target="_blank" title="">Google Maps</a></td>
      </tr>
      <tr>
        <th>連絡先</th>
        <td>
          <ul>
            <li>TEL : 090-3435-3679</li>
            <li>Email : <a href="mailto:soichi@soichi-mizutani.com" title="Soichi Mizutani">soichi@soichi-mizutani.com</a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>資本金</th>
        <td>10,000,000円</td>
      </tr>
      <tr>
        <th>業務内容</th>
        <td>
          <dl>
            <dt>建築設計</dt>
            <dd>住宅、別荘</dd>
            <dd>マンション、集合住宅</dd>
            <dd>複合商業ビル</dd>
            <dd>オフィスビル</dd>
          </dl>
          <dl>
            <dt>インテリアデザイン</dt>
            <dd>飲食店（レストラン、バー、カフェ等）</dd>
            <dd>物販店（ブティック、量販店、百貨店等）</dd>
            <dd>オフィス</dd>
            <dd>医療施設</dd>
            <dd>ヘアーサロン、エステティックサロン</dd>
            <dd>ギャラリー、美術館</dd>
            <dd>ホテル、宿泊施設</dd>
            <dd>住宅、マンションリフォーム</dd>
            <dd>各種展示会会場構成</dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>家具・プロダクトデザイン</dd>
            <dd>デザインコンサルタント業務</dd>
            <dd>公共事業</dd>
          </dl>
        </td>
      </tr>
      <tr>
        <th>主要取引先</th>
        <td>
          <ul>
            <li>日本アイ・ビー・エム株式会社</li>
            <li>株式会社エルメスジャポン</li>
            <li>森ビル株式会社</li>
            <li>株式会社イナックス</li>
            <li>三井物産株式会社</li>
            <li>株式会社ピープル</li>
            <li>不動建設株式会社</li>
            <li>東急不動産株式会社</li>
            <li>株式会社アデロン</li>
            <li>株式会社柏屋</li>
            <li>株式会社アゴスト</li>
            <li>株式会社東京放送（TBS）</li>
            <li>DSD（大日本印刷株式会社グループ）</li>
            <li>デロイ・トトーマツコンサルタントグループ（U.S.）</li>
            <li>株式会社ワールド</li>
            <li>株式会社パルコビューティシステムズ</li>
            <li>株式会社テーオーシー</li>
          </ul>
          <div>※ 順不同</div>
        </td>
      </tr>
    </table>
  </div>
)

const CompanyEn = () => (
  <div id="en">
    <h3>Company Information</h3>
    <table>
      <tr>
        <th>Company Name</th>
        <td>Soichi Mizutani Design Office Co., Ltd.</td>
      </tr>
      <tr>
        <th>President</th>
        <td>Soichi Mizutani</td>
      </tr>
      <tr>
        <th>Address</th>
        <td>MIDORI.so SHIBUYA, Sakuragaoka Front Building II 3F<br />16-13, Sakuragaoka, Shibuya-ku, Tokyo, Japan, 150-0031<br /><a href="https://goo.gl/maps/HHcSAjJ9WwQ2" target="_blank" title="">Google Maps</a></td>
      </tr>
      <tr>
        <th>Contact</th>
        <td>
          <ul>
            <li>TEL : 090-3435-3679</li>
            <li>Email : <a href="mailto:soichi@soichi-mizutani.com" title="Soichi Mizutani">soichi@soichi-mizutani.com</a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Capital</th>
        <td>10,000,000 JPY</td>
      </tr>
      <tr>
        <th>Business Areas</th>
        <td>
          <dl>
            <dt>Architecture</dt>
            <dd>Houses</dd>
            <dd>Collective Housing</dd>
            <dd>Business Complex</dd>
            <dd>Offices</dd>
          </dl>
          <dl>
            <dt>Interior Design</dt>
            <dd>Restaurant, Bar, Cafe</dd>
            <dd>Shop, Boutique</dd>
            <dd>Office</dd>
            <dd>Medical Institution</dd>
            <dd>Hair and beauty salon</dd>
            <dd>Gallery, Museum</dd>
            <dd>Hotel</dd>
            <dd>Reform for Housing</dd>
            <dd>Exhibition</dd>
          </dl>
          <dl>
            <dt>Others</dt>
            <dd>Furniture and product design</dd>
            <dd>Design consulting</dd>
            <dd>Public enterprise</dd>
          </dl>
        </td>
      </tr>
      <tr>
        <th>Major Clients</th>
        <td>
          <ul>
            <li>IBM Japan</li>
            <li>HERMÈS JAPON CO., LTD.</li>
            <li>Mori Building Co., Ltd.</li>
            <li>Inax Corporation</li>
            <li>MITSUI &amp; CO., LTD.</li>
            <li>Fudo Tetra Corporation</li>
            <li>Tokyu Land Corporation</li>
            <li>KASHIWAYA Co,Ltd.</li>
            <li>TOKYO BROADCASTING SYSTEM HOLDINGS, INC.</li>
            <li>Dai Nippon Printing Co., Ltd.</li>
            <li>Deloitte Tohmatsu LLC</li>
            <li>World Co., Ltd.</li>
            <li>TOC Co.,Ltd.</li>
          </ul>
          <div>In random order</div>
        </td>
      </tr>
    </table>
  </div>
)

export const Company = () => (
  <div id="company">
    <TwoColumnsContainer>
      <section data-lang-root data-active-lang="ja">
        <h2>Company</h2>
        <LanguageSelector />
        <div data-lang-panel="ja">
          <CompanyJa />
        </div>
        <div data-lang-panel="en" hidden aria-hidden="true">
          <CompanyEn />
        </div>
      </section>
    </TwoColumnsContainer>
  </div>
)
