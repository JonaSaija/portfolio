// Define the custom element class
class SideNav extends HTMLElement {
    constructor() {
      super();
  
      // Create a container element for the card
      const container = document.createElement('div');
      container.classList.add('side-nav');
  
      // Define the HTML content for the card
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
            <span class="changeBackstoryTextSmallerScreen"></span>             
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./levelPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="changeLevelTextSmallerScreen"></span>
            <span aria-hidden="" class="cybr-btn_glitch">
            <span class="changeLevelTextSmallerScreen"></span>
            </span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>

        <form action="./blogPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="BlogButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch">Blog_</span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>

        <form action="./ncpdDataPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="NcpdDataButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch">Ncpd data_</span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./gigsPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="GigsButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch">Gig's_</span>
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./contactInfo.html"class="navButton">
          <button class="cybr-btn">
            <span class="CyberContactButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch"
              >Cyber contact_</span
            >
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
        <form action="./infoPage.html"class="navButton">
          <button class="cybr-btn">
            <span class="CharacterInfoButtonText"></span>
            <span aria-hidden="" class="cybr-btn_glitch"
              >Character info_</span
            >
            <span aria-hidden="" class="cybr-btn_tag">2005</span>
          </button>
        </form>
       
          <div class="navSocial">
              <h4>Social's</h4>
              <a href="https://nl.linkedin.com/" class="navSocialIcons" target="_blank">
                  <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" class="navIcon"/>
              </a>
              <a href="https://www.instagram.com/" class="navSocialIcons" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" class="navIcon"/>
              </a>
              <a href="mailto:someone@example.com" class="navSocialIcons" target="_blank">
                  <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" class="navIcon"/>
              </a>
          </div>
      </div>
  </nav>
      `;      
      
      // Append the container directly to the custom element without Shadow DOM
      this.appendChild(container);
    }

    getCurrentPage() {
      // Get the current page's filename (e.g., 'index.html' from '/index.html' or './index.html')
      return window.location.pathname.split('/Pages/').pop();
    }
  
    getFormActionPage(actionUrl) {
      // Get the filename from the form action attribute (e.g., 'index.html' from './index.html')
      return actionUrl.split('./').pop();
    }
    
    connectedCallback() {
        this.changeCurrentPageButton();
      }
      
      changeCurrentPageButton() {
        const currentPage = this.getCurrentPage(); // Get the current page path
        const forms = this.querySelectorAll('form');
        
        forms.forEach(form => {
          let formAction = this.getFormActionPage(form.getAttribute('action')); // Get form action attribute
          
          console.log("Value of current page:" + currentPage)
          console.log("Value of button action:" + formAction)
          if (currentPage === formAction) { // Check if the current page matches the form action
            const buttonText = form.querySelector('span');
            console.log("Value of button/buttontext:" + buttonText.className)
            formAction = "/index.html"
            console.log("Value of button action must have changed:" + formAction)
            buttonText.className = "changeToHomepage"; // Changes the button of that page to homepage button.
            console.log("Value of button/buttontext must have changed:" + buttonText.className)
          }
        });
      }
}
  
  // Register the custom element
  customElements.define('side-nav', SideNav);
  