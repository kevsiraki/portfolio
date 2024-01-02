export const headerStyles = `
header {
    background-color: rgba(245, 245, 245, 0.6);
    padding-top: 25px;
    padding-bottom: 25px;
    position: fixed;
    top: 0;
    width: 100vw;
    box-shadow: -12px -8px 15px 0px #000;
    z-index: 99999;
    backdrop-filter: blur(10px); /* Standard syntax */
    -webkit-backdrop-filter: blur(10px); /* WebKit/Blink browsers */
  }

  /* Name styles */
  .name h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2em;
    text-align: center;
  }

  .name h1 em {
    color: rgba(0, 0, 0, .5);
    font-style: normal;
    font-weight: 700;
  }

  .name p {
    color: rgba(0, 0, 0, .75);
    font-size: .75em;
    line-height: 1.5;
    margin: 0 8px 0 0;
    text-align: center;
  }
  
  .name-heading {
      font-family: 'Open Sans', sans-serif;
      font-size: 2em;
      text-align: center;
      transition: opacity 0.3s, margin 0.3s; /* Add margin transition */
  }

  .scrolled {
      opacity: 0;
      margin-top: -75px;
  }
  
  @media only screen and (max-width: 339px) {
      .name p {
          font-size: .65em;
      }
  }
`;
