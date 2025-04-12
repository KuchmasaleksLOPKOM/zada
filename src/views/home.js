import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container2">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M7.8 16h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6zm2.85-3.6l1.3-3.75h.1l1.3 3.75zM12 23.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container3">
              <span className="Card-Heading home-heading1">
                <span>{/*locale-Heading_5wAFLm*/}</span>
              </span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container">
              <span className="home-link1 Navbar-Link">
                <span>{/*locale-link_xB2xBc*/}</span>
              </span>
              <span className="home-link2 Navbar-Link">
                <span>{/*locale-link_XbWQM-*/}</span>
              </span>
              <span className="home-link3 Navbar-Link">
                <span>{/*locale-link_piCHMC*/}</span>
              </span>
              <span className="Navbar-Link">
                <span>{/*locale-link_n3JU1g*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <span>
        <span>{/*locale-text_x7ZeYE*/}</span>
      </span>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-container4">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              <span>{/*locale-Heading_sjBE9g*/}</span>
            </h1>
            <span className="home-text2">
              <span>{/*locale-Text_8FaWb5*/}</span>
            </span>
            <div className="home-cta-btn-container">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYYXMumFiak1KNxKBoemiCMDj6JpASifzKKHLSTV7wBFaL9g/viewform"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn Anchor button"
              >
                <span className="home-text3">
                  <span>{/*locale-text_h1A6qC*/}</span>
                </span>
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.pinimg.com/originals/fa/b2/03/fab203f35c91febc66dfb2452d60d22a.png"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text4">
            <span>{/*locale-text_fYjFaw*/}</span>
          </h2>
          <span className="home-text5">
            <span>{/*locale-text_sogjOf*/}</span>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon16"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading3">
                <span>{/*locale-heading_Z2K25X*/}</span>
              </span>
              <span className="home-text6">
                <span>{/*locale-text_RIxt4a*/}</span>
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading4">
                <span>{/*locale-heading_3J2nFU*/}</span>
              </span>
              <span className="home-text7">
                <span>{/*locale-text_pFpIVK*/}</span>
              </span>
            </div>
          </div>
          <div className="home-card3">
            <div className="home-icon-container3">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon20">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container3">
              <span className="home-heading5">
                <span>{/*locale-heading_KBktqQ*/}</span>
              </span>
              <span className="home-text8">
                <span>{/*locale-text_2o2-oR*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <a
            href="https://github.com/KuchmasaleksLOPKOM"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="home-icon22"
            >
              <g fill="#181616">
                <path
                  d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545c0 18.797 12.19 34.745 29.095 40.37c2.126.394 2.907-.923 2.907-2.047c0-1.014-.04-4.366-.058-7.92c-11.837 2.573-14.334-5.02-14.334-5.02c-1.935-4.918-4.724-6.226-4.724-6.226c-3.86-2.64.29-2.586.29-2.586c4.273.3 6.523 4.385 6.523 4.385c3.794 6.504 9.953 4.623 12.38 3.536c.383-2.75 1.485-4.628 2.702-5.69c-9.45-1.075-19.384-4.724-19.384-21.026c0-4.645 1.662-8.44 4.384-11.42c-.442-1.072-1.898-5.4.412-11.26c0 0 3.572-1.142 11.7 4.363c3.395-.943 7.035-1.416 10.65-1.432c3.616.017 7.258.49 10.658 1.432c8.12-5.504 11.688-4.362 11.688-4.362c2.316 5.86.86 10.187.418 11.26c2.728 2.978 4.378 6.774 4.378 11.42c0 16.34-9.953 19.938-19.427 20.99c1.526 1.32 2.886 3.91 2.886 7.88c0 5.692-.048 10.273-.048 11.674c0 1.13.766 2.458 2.922 2.04c16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
                <path d="M37.57 62.596c-.095.212-.428.275-.73.13c-.31-.14-.482-.427-.382-.64c.09-.216.424-.277.733-.132c.31.14.486.43.38.642zm1.723 1.924c-.203.187-.6.1-.87-.198c-.278-.297-.33-.694-.124-.884c.208-.188.593-.1.87.197c.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367c-.262-.377-.262-.83.005-1.013c.264-.182.684-.018.95.357c.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163c-.372-.343-.475-.83-.242-1.087c.237-.257.736-.185 1.102.163c.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344c-.482-.146-.796-.536-.7-.872c.1-.336.582-.493 1.067-.342c.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648c-.508.012-.92-.272-.926-.618c0-.354.4-.642.908-.65c.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787c-.494.092-.95-.12-1.014-.46c-.06-.35.297-.7.79-.792c.503-.088.953.118 1.017.466zm0 0"></path>
              </g>
              <path
                d="M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508c0-9.393 4.448-10.63 8.624-10.63c3.614 0 5.17.636 6.162.943c.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66c-7.144 0-14.472 3.038-14.472 17.65c0 14.61 8.39 16.787 15.46 16.787c5.854 0 9.405-2.502 9.405-2.502c.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53a.497.497 0 0 0-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923c0 2.167 1.74 3.925 3.884 3.925c2.146 0 3.885-1.758 3.885-3.925c0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 0 0-.498-.502zm67.606.047h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11s-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804c3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268c.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594c0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107c-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61c1.497 0 3.29-.48 3.586-.59c.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z"
                fill="#100E0F"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
