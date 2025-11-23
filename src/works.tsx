import { TwoColumnsContainer } from './containers'

import { Data } from './data'

interface WorksProps {
  categoryName: string
  workName: string
}

export const Works = ({ categoryName, workName }: WorksProps) => {
  const category = Data[categoryName]
  const work = category.works[workName]
  const photos = work.photos

  return (
    <div id="works">
      <TwoColumnsContainer>
        <section>
          <h2>
            {category.title}
            <span></span>
          </h2>
          <article>
            <nav>
              <ul>
                {Object.keys(category.works).map((key) => (
                  <li>
                    <a
                      href={`/works/${categoryName}/${key}/`}
                      data-title={category.works[key].title_en}
                    >
                      <img src={`/assets/img/works/${categoryName}/${key}/1.jpg`} alt={category.works[key].title_en} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <section>
              <h3>
                <div class="j">{work.title_ja}</div>
                <div class="e">{work.title_en}</div>
              </h3>
              <div>{work.body}</div>
              <div>
                <ul>
                  {[...Array(photos)].map((_, i) => (
                    <li><img src={`/assets/img/works/${categoryName}/${workName}/${i + 1}.jpg`} /></li>
                  ))}
                </ul>
              </div>
            </section>
          </article>
        </section>
      </TwoColumnsContainer>
    </div>
  )
}

