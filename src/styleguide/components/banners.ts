import { html } from 'lit';

export const template = () => {
  return html`
    <div class="banner block" data-block-name="banner" data-block-status="loaded">
      <!---->
      <div id="banner">
        <div class="content">
          <header>
            <h1><!--?lit$126102149$-->Hi, I’m Editorial by HTML5 UP!</h1>
            <p><!--?lit$126102149$-->A FREE AND FULLY RESPONSIVE SITE TEMPLATE</p>
          </header>
          <!--?lit$126102149$--><!---->
          <p>
            <!--?lit$126102149$-->Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
            interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem
            ipsum dolor sit nullam.
          </p>
          <!----><!---->
          <p>
            <!--?lit$126102149$-->Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque
            sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>
          <!---->
          <ul class="actions">
            <!--?lit$126102149$--><!---->
            <li>
              <a class="button big" href="http://localhost:3000/#"><!--?lit$126102149$-->Learn more</a>
            </li>
            <!----><!---->
            <li>
              <a class="button big" href="http://localhost:3000/generic"><!--?lit$126102149$-->Gehe zu Generic</a>
            </li>
            <!---->
          </ul>
        </div>
        <span class="image object"
          ><!--?lit$126102149$--><picture>
            <source
              type="image/webp"
              srcset="
                ./media_18fca17b5770aad624cc462619b04b3c9236b61f0.png?width=2000&amp;format=webply&amp;optimize=medium
              "
              media="(min-width: 600px)"
            />
            <source
              type="image/webp"
              srcset="
                ./media_18fca17b5770aad624cc462619b04b3c9236b61f0.png?width=750&amp;format=webply&amp;optimize=medium
              "
            />
            <source
              type="image/png"
              srcset="
                ./media_18fca17b5770aad624cc462619b04b3c9236b61f0.png?width=2000&amp;format=png&amp;optimize=medium
              "
              media="(min-width: 600px)"
            />
            <img
              loading="eager"
              alt=""
              src="./media_18fca17b5770aad624cc462619b04b3c9236b61f0.png?width=750&amp;format=png&amp;optimize=medium"
              width="736"
              height="512"
            /> </picture
        ></span>
      </div>
    </div>
  `;
};
