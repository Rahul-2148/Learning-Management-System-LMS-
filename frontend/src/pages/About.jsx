import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto px-4 mt-5">
        {/* Mission & Vision Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            🌟 Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to empower learners worldwide with an interactive and
            intuitive platform, ensuring quality education reaches everyone,
            anywhere.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            💡 Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              {
                emoji: "🤝",
                title: "Integrity",
                description: "Upholding honesty and ethics.",
              },
              {
                emoji: "🚀",
                title: "Innovation",
                description: "Embracing cutting-edge solutions.",
              },
              {
                emoji: "🌍",
                title: "Global Reach",
                description: "Connecting learners worldwide.",
              },
              {
                emoji: "🎓",
                title: "Excellence",
                description: "Striving for unparalleled quality.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white rounded-lg p-4 shadow-lg"
              >
                <h3 className="text-3xl font-bold">{value.emoji}</h3>
                <h4 className="mt-2 text-xl font-semibold">{value.title}</h4>
                <p className="mt-1 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">👨‍💻 Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {[
              {
                name: "Rahul",
                role: "Founder & CEO",
                intro: "Visionary leader with 8+ years in ed-tech.",
                image: "../../src/assets/Rahul formal.jpg",
                cover: "../../src/assets/coverandcourse.jpg",
                linkedin: "#",
              },
              {
                name: "Mudassar",
                role: "Co-Founder & CTO",
                intro: "Tech guru driving innovative solutions.",
                image: "../../src/assets/mudassar img.jpg",
                cover: "../../src/assets/coverandcourse.jpg",
                linkedin: "https://www.linkedin.com/in/md-mudassar/",
              },
              {
                name: "Ahmad",
                role: "Product Manager",
                intro: "Strategist ensuring seamless delivery.",
                image: "../../src/assets/Ahmad.jpg",
                cover: "../../src/assets/coverandcourse.jpg",
                linkedin: "#",
              },
              {
                name: "Arbaz",
                role: "Lead Developer",
                intro: "Code wizard behind our platform.",
                image: "../../src/assets/Arbaz dp.jpg",
                cover: "../../src/assets/coverandcourse.jpg",
                linkedin: "#",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Cover Photo */}
                <div
                  className="h-40"
                  style={{
                    backgroundImage: `url(${member.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Profile Picture */}
                <div className="relative -mt-16 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-4 pb-4 px-4">
                  <h3 className="text-lg font-bold text-gray-800 flex justify-center items-center gap-2">
                    {member.name}
                    <img
                      src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                      alt="Verified"
                      className="w-5 h-5"
                    />
                  </h3>
                  <p className="text-sm font-semibold text-gray-600">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{member.intro}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center gap-2 no-underline font-semibold"
                  >
                    <i className="fab fa-linkedin"></i> View Profile on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            🏆 Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🎓",
                title: "10,000+ Students",
                description: "Learners globally benefiting.",
              },
              {
                icon: "📚",
                title: "50+ Courses",
                description: "Diverse and impactful topics.",
              },
              {
                icon: "🌐",
                title: "Global Community",
                description: "Students from 20+ countries.",
              },
              {
                icon: "⏳",
                title: "5+ Years of Excellence",
                description: "Revolutionizing education.",
              },
              {
                icon: "🚀",
                title: "95% Satisfaction Rate",
                description: "Positive feedback from students.",
              },
              {
                icon: "💻",
                title: "Interactive Learning Tools",
                description: "State-of-the-art LMS platform.",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-3 flex items-center gap-4"
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* History/Story Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600">
            SeekhSmart LMS was created with the vision of simplifying learning
            through technology. Our platform was born out of a need to bridge
            the gap between traditional classroom settings and the digital
            world, providing students with access to educational resources
            anytime and anywhere.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Over the years, we have continually improved the platform, adding
            new features and tools to make learning more engaging,
            collaborative, and personalized.
          </p>
        </section>
        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">📞 Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            For inquiries or support, reach out to us at:
          </p>
          <a
            href="mailto:seekhsmartlms@gmail.com"
            className="text-lg font-semibold text-blue-500 mt-2 inline-block no-underline"
          >
            seekhsmartlms@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;