import { SingleColumnContainer } from './containers'

export const Top = () => {
  const works = [
    { title: 'iGUANEYE', path: 'interior-shop/iguaneye' },
    { title: 'E.Dental&Ortho', path: 'interior-medical/e' },
    { title: 'Al-che-cciano con cert', path: 'interior-restaurant/al-che-cciano-con-cert' },
    { title: 'Senshu Jakarta', path: 'interior-restaurant/senshu' },
    { title: 'Murakami House', path: 'architecture-house/murakami-ex' },
    { title: 'Hasegawa Dental Office Fujinomiya', path: 'interior-medical/hasegawa' },
    { title: 'Ito Dental Clinic Odawara', path: 'interior-medical/ito' },
    { title: '0035 gather Yamagata', path: 'interior-shop/0035gather' },
    { title: 'Showroom EYES', path: 'interior-gallery/eyes' },
  ]

  return (
    <div id="top">
      <SingleColumnContainer>
        <section>
          <div><img src="/img/header.jpg" alt="iGUANEYE Aoyama" /></div>
          <ul>
            {works.map(work => {
              return (
                <li key={work.path}>
                  <a href={`/works/${work.path}`}>
                    <img src={`/img/works/${work.path}/1.jpg`} alt={work.title} />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
        <ul>
          <li><a href="https://goo.gl/maps/MTqyYU2fsq62">MIDORI.so SHIBUYA, Sakuragaoka Front Building II 3F, 16-13, Sakuragaoka, Shibuya-ku, Tokyo</a></li>
          <li>090-3435-3679</li>
          <li><a href="mailto:soichi@soichi-mizutani.com" title="Soichi Mizutani">soichi@soichi-mizutani.com</a></li>
        </ul>
      </SingleColumnContainer>
    </div >
  )
}
