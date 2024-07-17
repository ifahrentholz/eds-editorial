import { html } from 'lit';

export const navTemplate = () => {
  return html`
   <div class="ls-nav-select theme-mobile-nav">
                <select>
                    <option disabled="" selected="">Go to…</option>
                    <optgroup label="Basics">
                        <option>Button</option>
                        <option>Colors</option>
                        <option>Grid</option>
                        <option>Icons</option>
                        <option>Typography</option>
                    </optgroup>
                    <optgroup label="Elements">
                        <option>Image</option>
                        <option>Link</option>
                        <option>Media</option>
                        <option>Footnote</option>
                    </optgroup>
                    <optgroup label="Modules">
                        <option>Banner</option>
                        <option>Features</option>
                        <option>Posts</option>
                        <option>Form</option>
                        <option>Table</option>
                    </optgroup>
                </select>
            </div>
        <div class="ls-page__sidebar">
          <h1>
            <img src="/public/icons/Adobe_Corporate_logo.svg" height="40" alt="" />
          </h1>
          <div>
            <div class="ls-search-input">
              <input placeholder="Search" />
              <img class="search-input-icon" src="/public/icons/search.svg" alt="Search icon" />
            </div>
          </div>
          <div class="theme-sidebar-category-title">Basics</div>
          <div>
            <div class="ls-sidebar-list-item"><a href="#button">
              <span href="#buttons-container" class="ls-sidebar-element">Button</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#colors">
              <span href="#colors-container" class="ls-sidebar-element">Colors</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#grid">
              <span href="#grid-container" class="ls-sidebar-element">Grid</span></a>
            </div>
            <div class="ls-sidebar-list-item" ><a href="#icons">
              <span href="#icons-container" class="ls-sidebar-element">Icons</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#typhography">
              <span href="#typography-container" class="ls-sidebar-element">Typography</span></a>
            </div>
          </div>
          <div class="theme-sidebar-category-title">Elements</div>
          <div>
            <div class="ls-sidebar-list-item"><a href="#image">
              <span href="#image-container" class="ls-sidebar-element">Image</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#link">
              <span href="#link-container" class="ls-sidebar-element">Link</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#media">
              <span href="#media-container" class="ls-sidebar-element">Media</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#footnote">
              <span href="#footnote-container" class="ls-sidebar-element">Footnote</span></a>
            </div>
          </div>
          <div class="theme-sidebar-category-title">Blocks</div>
          <div>
            <div class="ls-sidebar-list-item"><a href="#banner">
              <span href="#banners-container" class="ls-sidebar-element">Banner</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#features">
              <span href="#features-container" class="ls-sidebar-element">Features</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#posts">
              <span href="#posts-container" class="ls-sidebar-element">Posts</span></a>
            </div>
          </div>
          <div class="theme-sidebar-category-title">Components</div>
          <div>
            <div class="ls-sidebar-list-item"><a href="#form">
              <span href="#form-container" class="ls-sidebar-element">Form</span></a>
            </div>
            <div class="ls-sidebar-list-item"><a href="#table">
              <span href="#table-container" class="ls-sidebar-element">Table</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
