import React from 'react';
import './staticHTMLsite.css';

function StaticSite() {
   return (
      <div>
         
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,700,700i" rel="stylesheet" />
        
         {/*<!-- Navbar -->*/}
         <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
               <img className="height50" src="img/logo.png" />
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto p-2">
                  <li className="nav-item">
                     <a className="nav-link" href="/#about">
                        About
              </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/#sponsors">
                        Sponsors
              </a>
                  </li>
                  {/*<li className="nav-item">
                     <a className="nav-link" href="/#faq">
                        FAQ
              </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/#join">
                        Join Us
              </a>
                  </li>*/}
               </ul>
            </div>
         </nav>

         {/*<!-- Header -->*/}
         <section className="container marginTop20 height20vh">
            <h1 className="text-center title">
               The
          <br />
               GoldenHack
        </h1>
         </section>

         {/*<!-- About -->*/}
         <section id="about" className="container marginTop20">
            <div className="row paddingTop10">
               <div className="col-md">
                  <img src="/img/code.svg" className="image" />
               </div>

               <div className="col-md mx-1 my-5">
                  <h2 className="text-center"># What is The GoldenHack?</h2>

                  <p className="text-center">
                     <b>The GoldenHack</b> is a business hackathon held at Laurier on
              <br />
                     <b>October 5-6, 2019.</b>
                     <br />
                     <br />
                     We are accepting 250+ students to come to Laurier to code, design
                     and innovate in this multidisciplinary event. The attendees will
                     solve fun and challenging problems over 24 hours, and we’d love
              for you to be a part of it! We are inviting not only{" "}
                     <b>student developers</b>, but also <b>design</b> and{" "}
                     <b>business</b> students to encourage well-rounded teams.
            </p>
               </div>
            </div>
         </section>

         {/*<!-- More about -->*/}
         <section className="container marginTop5">
            <div className="row">
               <div className="col-md mx-1 marginTop10">
                  <h2 className="text-center"># Being a Business Hackathon</h2>
                  <p className="text-center">
                     As a “business hackathon” our aim is to blend the worlds of
                     business and technology. We often find that business and design
                     students are not encouraged to participate or are underrepresented
                     in hackathons and we want to change that! Laurier prides itself on
                     its business, computer science and user experience design
                     programs, so we decided that it was time to bring these
              complementary disciplines together in <b>The GoldenHack</b>.
            </p>
               </div>

               <div className="col-md">
                  <img src="/img/monitor.svg" className="image" />
               </div>
            </div>
         </section>

         {/*<!-- More More About -->*/}
         <section id="more-more-about" className="container margin10">
            <div className="row">
               <div className="col-md text-center">
                  <img src="img/mission-impossible.svg" className="image" />
               </div>
               <div className="col-md order-first order-md-last">
                  <h2 className="text-center my-2 paddingTop10"># The Inspiration</h2>
                  <p className="text-center">
                     Hackathons are wonderful experiences to build something amazing
                     literally overnight. Students get to network, learn, collect cool
                     sponsor swag, make friends, and get free food all while being 100%
                     sleep deprived. This is an experience that anyone interested in
                     creative problem solving should not miss.
              <br />
                     <br />
                     We are committed to building a prosperous community and having fun
                     while doing it.
            </p>
               </div>
            </div>
         </section>

         {/*<!--  Sponsors -->*/}
         <section id="sponsors" className="container top-buffer-100">
            <div className="row">
               <div className="col-md">
                  <h2 className="text-center my-2 paddingTop10">
                     # Interested in Sponsoring?
            </h2>
                  <p className="text-center"><br />
                     Our goal is to show the world that{" "}
                     <b>innovation is a team sport</b>. We’d love to be the event where
                     a designer, a developer and a business student decide to co-found
                     the next massive social network. Or maybe the next best fintech
                     solution. We want to create an atmosphere where the
                     entrepreneurial and creative spirit thrives, and where everyone
                     feels valued.
              <br />
                     <br />
                     Want to get in on the action?
            </p>
                  <div className="text-center">
                     <a
                        className="btn mailto"
                        style={{"backgroundColor": "#ffc107"}}
                        href="mailto:contact@goldenhacks.com"
                     >
                        Become a Sponsor
              </a>
                     {/*<!--
                    <a className="btn goldenButton" href="/sponsors.html" role="button">Become a Sponsor</a>
                -->*/}
                  </div>
               </div>
               <div className="col-md text-center">
                  <img className="image" src="img/connecting-teams.svg" />
               </div>
            </div>
         </section>

         {/*<!-- FAQ -->*/}
         {/*<!-- <section id="faq" className="container top-buffer-100">
        <div>
            <h2 className="text-center pb-4"># Frequently Asked Questions</h2>
            <div className="row mx-1">
                <div className="col">
                    <img className="image height450" src="img/question.svg">
                </div>
                <div className="col">
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            What is a hackathon anyway?
                        </a>
                        <div className="card-body collapse" id="faq1">
                            // Under construction
                        </div>
                    </div>
                    <br>
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How much does it cost?
                        </a>
                        <div className="card-body collapse" id="faq2">
                            // Under construction
                        </div>
                    </div>
                    <br>
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How will I get there?
                        </a>
                        <div className="card-body collapse" id="faq3">
                            // Under construction
                        </div>
                    </div>
                    <br>
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq4" role="button" aria-expanded="false" aria-controls="collapseExample">
                            What if I don't know how to code?
                        </a>
                        <div className="card-body collapse" id="faq4">
                            // Under construction
                        </div>
                    </div>
                    <br>
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq5" role="button" aria-expanded="false" aria-controls="collapseExample">
                            What should I bring?
                        </a>
                        <div className="card-body collapse" id="faq5">
                            // Under construction
                        </div>
                    </div>
                    <br>
                    <div className="card">
                        <a className="card-header faq-tab" data-toggle="collapse" href="#faq6" role="button" aria-expanded="false" aria-controls="collapseExample">
                            What if I don't see my question here?
                        </a>
                        <div className="card-body collapse" id="faq6">
                            Shoot us an email at
                            <a className="mailto" href="mailto:contact@goldenhacks.com">contact@goldenhacks.com</a>
                            or message us on
                            <a href="https://www.facebook.com/TheGoldenHackOfficial/">Facebook</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section> 
    -->*/}

         {/*<!-- Join Us -->*/}
         {/*<!--
        <section id="join" className="container margin10">
            <h2 className="text-center my-2"># Join Us</h2>
            <p className="text-center">
                Get in touch! We'd love to hear from you.<br>Shoot us an email at
                <a className="mailto" href="mailto:contact@goldenhacks.com">contact@goldenhacks.com</a>
                or message us on
                <a href="https://www.facebook.com/TheGoldenHackOfficial/">Facebook</a>.
            </p>
            <br><br>
            <p className="text-center">
                Interested in joining our team?<br>
            </p>
            <div className="text-center">
                <a className="btn goldenButton disabled" href="" target="_blank" role="button">Sorry, applications are now closed!</a>
            </div>
        </section>
    -->*/}

         {/*<!-- Footer -->*/}
         <div className="footer mt-auto py-3">
            <div className="row" style={{"width":100+"%", "margin":0, "padding": "0 15px"}}>
               <div className="col-auto mr-auto">
                  <span>
                     {/*<!--<a className="mr-2" href="/code" style="color: black">Code of Conduct</a>
            <a href="/privacy" style="color: black">Privacy Policy</a>
            -->*/}
                  </span>
               </div>
               <div className="col-auto">
                  <a
                     className="mr-2"
                     href="https://www.instagram.com/thegoldenhackofficial/"
                  >
                     <img className="image" src="img/instagram.svg" />
                  </a>
                  <a
                     className="mr-2"
                     href="https://www.facebook.com/TheGoldenHackOfficial/"
                  >
                     <img className="image" src="img/facebook.svg" />
                  </a>
                  <a href="https://github.com/golden-hacks">
                     <img className="image height24" src="img/github.svg" />
                  </a>
               </div>
            </div>
         </div>

         {/*<!-- JavaScript -->*/}
         {/*<!-- jQuery first, then Popper.js, then Bootstrap JS -->*/}
         <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
         />
         <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"
         />
         <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
         />
      </div>
   );
}

export default StaticSite; 