import { html } from 'lit';

export const template = () => {
  return html`
    <div class="section form-container" data-section-status="initialized">
      <div class="form-wrapper" style="padding: 20px;">
        <div class="form block" data-block-name="form" data-block-status="loaded" style="display: block;">
          <!----><form-component pathname="/development/iza/form.json"
            ><!---->
            <form method="post" data-action="/development/iza/form">
              <div class="row gtr-uniform">
                <!--?lit$02787408$--><!----><!--?lit$02787408$-->
                <div class="col-6 col-12-xsmall">
                  <!--?lit$02787408$--><label id="form-firstname-label" for="form-firstname"
                    ><!--?lit$02787408$-->First Name</label
                  >
                  <input
                    id="form-firstname"
                    name="firstname"
                    placeholder="e.g. Joe"
                    required="true"
                    type="text"
                    aria-labelledby="form-firstname-label"
                  />
                  <!--?lit$02787408$-->
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-6 col-12-xsmall">
                  <!--?lit$02787408$--><label id="form-surname-label" for="form-surname"
                    ><!--?lit$02787408$-->Surname</label
                  >
                  <input
                    id="form-surname"
                    name="surname"
                    placeholder="e.g. Smith"
                    required="true"
                    type="text"
                    aria-labelledby="form-surname-label"
                  />
                  <!--?lit$02787408$-->
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div>
                  <!--?lit$02787408$--><label id="form-age-label" for="form-age"><!--?lit$02787408$-->Age</label>
                  <input
                    id="form-age"
                    name="age"
                    placeholder="Your age..."
                    type="text"
                    aria-labelledby="form-age-label"
                  />
                  <!--?lit$02787408$-->
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-12">
                  <!--?lit$02787408$--><label id="form-country-label" for="form-country"
                    ><!--?lit$02787408$-->Country</label
                  >
                  <select id="form-country" name="country">
                    <!--?lit$02787408$--><!---->
                    <option value="usa"><!--?lit$02787408$-->USA</option>
                    <!----><!---->
                    <option value="brazil"><!--?lit$02787408$-->Brazil</option>
                    <!----><!---->
                    <option value="germany"><!--?lit$02787408$-->Germany</option>
                    <!----><!---->
                    <option value="spain"><!--?lit$02787408$-->Spain</option>
                    <!---->
                  </select>
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-4 col-12-small">
                  <!--?lit$02787408$-->
                  <input
                    id="demo-priority-low"
                    name="priority"
                    value="Low"
                    type="radio"
                    aria-labelledby="form-priority-label"
                  />
                  <!--?lit$02787408$--><label id="form-priority-label" for="demo-priority-low"
                    ><!--?lit$02787408$-->Low</label
                  >
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-4 col-12-small">
                  <!--?lit$02787408$-->
                  <input
                    id="demo-priority-normal"
                    name="priority"
                    value="Normal"
                    type="radio"
                    aria-labelledby="form-priority-label-1"
                  />
                  <!--?lit$02787408$--><label id="form-priority-label-1" for="demo-priority-normal"
                    ><!--?lit$02787408$-->Normal</label
                  >
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-4 col-12-small">
                  <!--?lit$02787408$-->
                  <input
                    id="demo-priority-high"
                    name="priority"
                    value="High"
                    type="radio"
                    aria-labelledby="form-priority-label-2"
                  />
                  <!--?lit$02787408$--><label id="form-priority-label-2" for="demo-priority-high"
                    ><!--?lit$02787408$-->High</label
                  >
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-6 col-12-small">
                  <!--?lit$02787408$-->
                  <input
                    id="demo-email"
                    name="email-copy"
                    value="checked"
                    type="checkbox"
                    aria-labelledby="form-email-copy-label"
                  />
                  <!--?lit$02787408$--><label id="form-email-copy-label" for="demo-email"
                    ><!--?lit$02787408$-->Email me a copy</label
                  >
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-6 col-12-small">
                  <!--?lit$02787408$-->
                  <input
                    id="demo-human"
                    name="iamhuman"
                    value="checked"
                    type="checkbox"
                    aria-labelledby="form-iamhuman-label"
                  />
                  <!--?lit$02787408$--><label id="form-iamhuman-label" for="demo-human"
                    ><!--?lit$02787408$-->I am a human</label
                  >
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-12">
                  <!--?lit$02787408$--><label id="form-message-label" for="form-message"
                    ><!--?lit$02787408$-->Message</label
                  >
                  <textarea
                    id="form-message"
                    name="message"
                    placeholder="Your message..."
                    aria-labelledby="form-message-label"
                  ></textarea>
                </div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-12"><input type="reset" id="form-reset" name="reset" /></div>
                <!--?--><!----><!----><!--?lit$02787408$-->
                <div class="col-12">
                  <button class="col-12" type="submit"><!--?lit$02787408$-->submit</button>
                </div>
                <!--?--><!---->
              </div>
            </form></form-component
          >
        </div>
      </div>
    </div>
  `;
};
