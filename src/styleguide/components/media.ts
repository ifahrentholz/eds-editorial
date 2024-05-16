import { html } from 'lit';

export const template = () => {
  return html`
    <h2>Normal Image</h2>
    <picture>
      <source
        sizes="(min-width: 2560px) calc(((100vw - 188px)/12) * 6 - 52px),
                                                    (min-width: 1920px) calc(((100vw - 192px)/12) * 6 - 32px),
                                                    (min-width: 1440px) calc(((100vw - 72px)/12) * 6 - 24px),
                                                    (min-width: 1024px) calc(((100vw - 64px)/12) * 6 - 16px),
                                                    (min-width: 768px)  calc(((100vw - 48px)/12) * 12 - 16px),
                                                                        calc(((100vw - 24px)/12) * 12 - 8px)"
        srcset="
          https://dummyimage.com/358x201/dcd8c0/ffffff   358w,
          https://dummyimage.com/492x277/dcd8c0/ffffff   492w,
          https://dummyimage.com/660x371/dcd8c0/ffffff   660w,
          https://dummyimage.com/716x403/dcd8c0/ffffff   716w,
          https://dummyimage.com/832x468/dcd8c0/ffffff   832w,
          https://dummyimage.com/1074x604/dcd8c0/ffffff 1074w,
          https://dummyimage.com/1134x638/dcd8c0/ffffff 1134w
        "
      />

      <img loading="lazy" alt="alt text ..." />
    </picture>

    <h2 class="bm-h6">Different Images on mobile and desktop</h2>

    <picture>
      <source
        sizes="calc(((100vw - 24px)/12) * 12 - 8px)"
        srcset="
          https://dummyimage.com/350x350/aa8479/ffffff    350w,
          https://dummyimage.com/358x358/aa8479/ffffff    358w,
          https://dummyimage.com/492x492/aa8479/ffffff    492w,
          https://dummyimage.com/660x660/aa8479/ffffff    660w,
          https://dummyimage.com/832x832/aa8479/ffffff    832w,
          https://dummyimage.com/1074x1074/aa8479/ffffff 1074w,
          https://dummyimage.com/1134x1134/aa8479/ffffff 1134w
        "
        media="(max-width: 767.99px)"
      />
      <source
        sizes="(min-width: 2560px) calc(((100vw - 188px)/12) * 6 - 52px),
                                                        (min-width: 1920px) calc(((100vw - 192px)/12) * 6 - 32px),
                                                        (min-width: 1440px) calc(((100vw - 72px)/12) * 6 - 24px),
                                                                            calc(((100vw - 64px)/12) * 6 - 16px)"
        srcset="
          https://dummyimage.com/350x197/dcd8c0/ffffff   350w,
          https://dummyimage.com/358x201/dcd8c0/ffffff   358w,
          https://dummyimage.com/492x277/dcd8c0/ffffff   492w,
          https://dummyimage.com/660x371/dcd8c0/ffffff   660w,
          https://dummyimage.com/832x468/dcd8c0/ffffff   832w,
          https://dummyimage.com/1074x604/dcd8c0/ffffff 1074w,
          https://dummyimage.com/1134x638/dcd8c0/ffffff 1134w
        "
      />

      <img loading="lazy" alt="alt text ..." />
    </picture>
  `;
};
