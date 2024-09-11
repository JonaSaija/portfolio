// Define the custom element class
class SideNav extends HTMLElement {
    constructor() {
      super();

      const container = document.createElement('div');
      container.classList.add('side-nav');

      container.innerHTML = `
       <nav class="navBar">
      <div class="closeNavButtonDiv">
          <button id="menuButton" class="navMenuClose" onclick="toggle()">---------------------------</button>
      </div>

      <!-- Buttons from the nav menu -->
      <div id="navMenuParent" class="menuTable" name="menuTable">
        <form action="./backstoryPage.html" class="navButton">
          <button class="cybr-btn">
            <span class="changeBackstoryTextSmallerScreen"></span>             
            <span aria-hidden="" class="cybr-btn_glitch">
            <span class="changeBackstoryTextSmallerScreen id="dynamicTextButton""></span>             
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./levelPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="changeLevelTextSmallerScreen"></span>
            <span aria-hidden="" class="cybr-btn_glitch">
            <span class="changeLevelTextSmallerScreen" id="dynamicTextButton"></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>

        <form action="./blogPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="BlogButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch">
            <span id="dynamicTextButton" class=""></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>

        <form action="./ncpdDataPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="NcpdDataButtonText"></span>
               <span aria-hidden="" class="cybr-btn_glitch">
            <span id="dynamicTextButton" class=""></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./gigsPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="GigsButtonText"></span>
               <span aria-hidden="" class="cybr-btn_glitch">
            <span id="dynamicTextButton" class=""></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./contactInfo.html"class="navButton">
          <button class="cybr-btn">
            <span class="CyberContactButtonText"></span>
               <span aria-hidden="" class="cybr-btn_glitch">
            <span id="dynamicTextButton" class=""></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./infoPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="CharacterInfoButtonText"></span>
               <span aria-hidden="" class="cybr-btn_glitch">
            <span id="dynamicTextButton" class=""></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
       
          <div class="navSocial">
              <h4>Social's</h4>
              <a href="https://nl.linkedin.com/" class="navSocialIcons" target="_blank">
                  <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" class="navIcon" alt="LogoLinkedIn"/>
              </a>
              <a href="https://www.instagram.com/" class="navSocialIcons" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" class="navIcon" alt="LogoInstagram"/>
              </a>
              <a href="mailto:someone@example.com" class="navSocialIcons" target="_blank">
                  <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" class="navIcon" alt="LogoOutlook"/>
              </a>
          </div>
      </div>
  </nav>
      `;      
      
      this.appendChild(container);
    }

    getCurrentPage() {
      return window.location.pathname.split('/Pages/').pop();
    }
  
    getFormActionPage(actionUrl) {
      return actionUrl.split('./').pop();
    }
    
    connectedCallback() {
        this.changeCurrentPageButton();
      }
      
      changeCurrentPageButton() {
        const currentPage = this.getCurrentPage();
        const forms = this.querySelectorAll('form');
        
        forms.forEach(form => {
          let formAction = this.getFormActionPage(form.getAttribute('action')); 
          
          if (currentPage === formAction) {
            const buttonText = form.querySelector('span');
            const buttonDeepText = form.getElementsByTagName('dynamicTextButton');
            form.setAttribute('action','/portfolio')
            // TODO: fix this f*cking class changing!!!!
            buttonText.className = "changeToHomepage";
            buttonDeepText.className = "changeToHomepage";
            console.log(buttonDeepText.className)
          }
        });
      }
}
  
  customElements.define('side-nav', SideNav);
  