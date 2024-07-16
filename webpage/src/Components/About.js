import React from "react";
import M1 from "../assets/member01.jpg";
import M2 from "../assets/member02.jpg";
import M3 from "../assets/member03.png";
import M4 from "../assets/member04.jpg";
import "./AboutUs.css";

function About() {
  return (
    <div className="about-us">
      <section className="history">
        <div className="text">
          <h1>History</h1>
          <p>
            Founded in 2005 by renowned stylist Sarah Thompson, Salon Serenity
            has been a pillar of elegance and innovation in the beauty industry
            for over a decade. What started as a humble studio in downtown
            Chicago has blossomed into a premier destination known for its
            exceptional service and cutting-edge techniques. Over the years, we
            have cultivated a loyal clientele who trust us to deliver not just
            stunning hair and makeup, but an unparalleled experience of luxury
            and relaxation. Today, Salon Serenity continues to redefine beauty
            standards with a commitment to creativity, professionalism, and
            personalized care.
          </p>
        </div>
      </section>
      <section className="mission">
        <div className="text">
          <h1>Our Mission</h1>
          <p>
            At Salon Serenity, our mission is to empower every client to look
            and feel their best. We strive to create a welcoming and inclusive
            environment where beauty meets wellness. Through our skilled team of
            stylists and beauty experts, we aim to inspire confidence and
            enhance natural beauty with personalized services tailored to each
            individual. We are committed to using high-quality products and
            staying at the forefront of industry trends to ensure every visit
            exceeds expectations. Our goal is not only to enhance outer beauty
            but also to nurture inner well-being, leaving each client refreshed,
            rejuvenated, and ready to conquer the world.
          </p>
        </div>
      </section>
      <section className="values">
        <div className="text">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Integrity:</strong> We adhere to the highest ethical
              standards in all our actions.
            </li>
            <li>
              <strong>Innovation:</strong> We continually seek new and creative
              ways to solve problems.
            </li>
            <li>
              <strong>Excellence:</strong> We are committed to delivering
              high-quality results.
            </li>
            <li>
              <strong>Teamwork:</strong> We believe in the power of
              collaboration and mutual respect.
            </li>
            <li>
              <strong>Customer Focus:</strong> Our customers are at the center
              of everything we do.
            </li>
          </ul>
        </div>
      </section>
      <section className="team">
        <h2>Our Team Members</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={M1} alt="Jane Smith" className="team-image" />
            <div className="team-text">
              <h3>Jane Smith</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={M2} alt="Mikly" className="team-image" />
            <div className="team-text">
              <h3>Mikly</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={M3} alt="Emily" className="team-image" />
            <div className="team-text">
              <h3>Emily</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={M4} alt="Davis" className="team-image" />
            <div className="team-text">
              <h3>Davis</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="join-us">
        <div className="text">
          <h2>Join Us</h2>
          <p>
            Are you passionate about beauty and wellness? Join our team at Salon
            Serenity and become part of a dynamic community dedicated to
            creativity, professionalism, and client satisfaction. Whether you're
            a seasoned stylist or just starting your career, we offer
            opportunities for growth, ongoing training, and a supportive work
            environment. Discover your potential with us and embark on a
            rewarding journey in the beauty industry. Explore our current
            openings and apply today to join our talented team.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
