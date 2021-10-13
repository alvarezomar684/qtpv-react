
import '../App.css';

import { Slide } from './Slide';

export const Home = () => {

  return (
    <div>
      <h6 class="camuflaje-home display-4">
        camuflaje
      </h6>

      <h1 className="text-uppercase  title-principal text-center mb-3 display-1 shadow-title ">
        quality transfers pv
      </h1>

      <p>
        We are open daily
        <span className="text-azulito">
          24/7
        </span>.
        We are at your complete disposal.
      </p>
      <p>
        We offer the best ground transportation and the best tours in Puerto Vallarta.
      </p>
      <p>
        We are a private transportation company in Puerto
        Vallarta that is worth to hire, we will make you feel at
        home, with our service you will be convinced of the
        value we have, thank you for your trust, you will not
        regret traveling with us!
      </p>

      <Slide />

      <section id="videos-QTPV" class="  d-flex flex-column flex-lg-row justify-content-between mb-3 mt-5">
        <div>
          <iframe class="videos-home" src="https://www.youtube-nocookie.com/embed/ZHKO6GlEqpo?controls=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div>
          <iframe class="videos-home" src="https://www.youtube-nocookie.com/embed/2lhfd1IwgDY?controls=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div>
          <iframe class="videos-home" src="https://www.youtube-nocookie.com/embed/yA0igeWBW-Q?controls=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </section>



    </div>
  )
}
