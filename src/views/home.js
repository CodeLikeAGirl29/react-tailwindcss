import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Stellar Explorations</title>
        <meta property="og:title" content="Galaxy Ventures" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">Galaxy Ventures.</h1>
            <h1 className="home-text01 HeadingOne">Inspiring the Future</h1>
            <span className="home-text02 Lead">
              <span>
               Discovering the Universe:<br/>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Where Dreams Take Flight!
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695964638/icons/logo-pinterest_mt4hka.svg"
                className="home-image"
              />
              <img
                alt="image"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695964638/icons/logo-netflix_aovh5a.svg"
                className="home-image01"
              />
              <img
                alt="image"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695964892/icons/Untitled_design_1_q3juux.svg"
                className="home-image02"
              />
              <img
                alt="image"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695964637/icons/logo-nasa_awn8ts.svg"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="home-image04" />
      <section className="home-features">
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          image_src="/cube1.svg"
        ></FeatureCard>
        <FeatureCard image_src="/camera.svg"></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Education"
          image_src="/grad-cap.svg"
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Mission Diary"
          image_src="/mission-icon.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text05 HeadingOne">
            <span className="home-text06">Charting the Way to Otherworldly Discoveries</span>
          </h1>
          <span className="home-text07">
            <span className="home-text08">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695947649/samples/sky-pic_tmqp30.png"
              className="home-image05"
            />
            <span className="home-text09 Small">
              <span className="home-text10">
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className="home-text12">-NOAA</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695947650/samples/galaxy_ez7mwf.png"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695947649/samples/moon_ccw0n5.png"
              className="home-image07"
            />
            <div className="home-container11">
              <h3 className="HeadingTwo">
                <span className="home-text14">
                  Beyond Our World: A Journey Through the Enigmatic Galaxies of Space
                </span>
              </h3>
              <p>
                <br></br>
                <span className="home-text16">
                 In the vast tapestry of the cosmos, galaxies stand as majestic islands of stars, gas, and dust, each a testament to the infinite wonders of the universe. They are the building blocks of the cosmos, the engines of creation, and the stage upon which the cosmic drama unfolds. Join us on a journey through the mesmerizing realms of space galaxies, and discover the captivating stories they have to tell.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text19">
                  Imagine our universe as a metropolis of lights, with galaxies serving as neighborhoods. Each galaxy is a self-contained city, bustling with stars, planets, and a myriad of cosmic inhabitants. Our very own Milky Way is but one of billions of galaxies populating the cosmic landscape.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text22">
                 Galaxies come in various shapes and sizes, ranging from majestic spirals to enigmatic ellipticals. Spirals, such as the iconic Andromeda galaxy, boast elegant arms adorned with bright stars and interstellar gas clouds, while ellipticals appear as round, football-shaped masses of stars. Irregular galaxies defy classification, displaying a haphazard assortment of stars and cosmic debris.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text23 HeadingOne">Sky's the Limit</h2>
              <p className="home-text24 Lead">
                <span className="home-text25">
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className="home-text26 Body">
                <span className="home-text27">
                  &quot;That's one small step for man, one giant leap for mankind.&quot;
                </span>
              </p>
              <p className="home-text28">Neil Armstrong, Apollo 11</p>
              <p className="home-text29 Small">American Astronaut</p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/team1.png"
                  className="home-image08"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/team3.png"
                  className="home-image09"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/team2.png"
                  className="home-image10"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container18">
              <div className="home-container19">
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/boeing.svg"
                    className="home-image11"
                  />
                </div>
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/tesla.svg"
                    className="home-image12"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/blue-origin.svg"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/spacex.svg"
                    className="home-image14"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/starlink.svg"
                    className="home-image15"
                  />
                </div>
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/iss.svg"
                    className="home-image16"
                  />
                </div>
              </div>
              <div className="home-container27">
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/esa.svg"
                    className="home-image17"
                  />
                </div>
                <div className="home-container29">
                  <img
                    alt="image"
                    src="/nasa.svg"
                    className="home-image18"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image19" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <section className="home-contaier">
        <div className="home-container30">
          <div className="home-container31">
           <svg className="home-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2v77l-144 84V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v56 32 24c0 13.3 10.7 24 24 24s24-10.7 24-24v-8H192v32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12v16c0 8.8 7.2 16 16 16h96V448c0-8.8 7.2-16 16-16s16 7.2 16 16v64h96c8.8 0 16-7.2 16-16V480c0-4.6-2-9-5.5-12L320 416.7V384H464v8c0 13.3 10.7 24 24 24s24-10.7 24-24V368 336 280c0-13.3-10.7-24-24-24s-24 10.7-24 24v18.8l-144-84v-77c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7z"/></svg>
          </div>
          <h2 className="home-text30 HeadingTwo">
            <span className="home-text31">Take a Trip to Space</span>
          </h2>
          <h3 className="home-text32 HeadingTwo">
            <span className="home-text33">Things to Know</span>
            <br></br>
          </h3>
          <span className="home-text34">
            <span className="home-text35">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <div className="home-container34"></div>
            <div className="home-container35">
            <svg className="home-icon2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
              <h1 className="home-text36 HeadingOne">Become an Astronaut</h1>
              <span className="home-text37">
                <span>Explore the Galaxy</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container36">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container37">
          <div className="home-container38">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container39">
            <div className="home-container40"></div>
            <div className="home-container41">
             <svg className="home-icon4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>
              <h1 className="home-text40 HeadingOne">Join the Journey</h1>
              <span className="home-text41">
                <span> Become an Astronaut Today & Explore the Cosmos Tomorrow</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
