import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[url('/cloud3.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <img
            src="/Logo 2.png"
            alt="Mwema Education Foundation Logo"
            className="w-90 h-55 mb-8"
          />
          <h1 className="text-5xl font-bold mb-4">
            Mwema Education Foundation
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Empowering children in Uganda through education and community
            support
          </p>
          <div className="flex gap-4">
            <Link
              to="/donate"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/Volunteer"
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-yellow-800 to-yellow-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-amber-300 font-bold leading-tight">
                Let's address the issue
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  Join us in providing daily education to explore and support
                  underprivileged children in Uganda. Your support funds school
                  fees, supplies, and cross-community activities, creating a
                  project that can foster growth.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  We are always looking for volunteers to help with teaching,
                  specialized work, supporting neighboring children's projects,
                  or even playing sports with the children!
                </p>
              </div>
              <Link
                to="/volunteer"
                className="inline-block mt-4 px-8 py-4 bg-amber-300 text-yellow-900 
                     rounded-lg font-semibold hover:bg-amber-400 
                     transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get Involved
              </Link>
            </div>

            {/* Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/home1.png"
                alt="Mission"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl font-bold text-blue-600">80+</h3>
                <p className="text-gray-600 mt-2 font-bold">
                  Children Supported
                </p>
                <p className="text-gray-600 mt-4">
                  Supported through your generous donations
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl font-bold text-blue-600">15</h3>
                <p className="text-gray-600 mt-2 font-bold">
                  Dedicated Teachers
                </p>
                <p className="text-gray-600 mt-4">
                  Dedicated staff providing invaluable support
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <img
                  src="/home5.png"
                  alt="Impact visual 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <img
                  src="/home6.png"
                  alt="Impact visual 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info Section */}

      <section className="py-16 bg-lime-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Container */}
            <div className="rounded-lg overflow- shidden shadow-xl">
              <img
                src="/home2.png"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl text-amber-300 font-bold mb-8">
                Empowering Children Through Education
              </h2>
              <p className="text-lg text-white mb-6">
                Mwema Education Foundation houses and supports impoverished
                children in the Bugiri District of Eastern Uganda. We aim to
                give young children a dynamic and invaluable education by
                focusing on schooling and extracurricular activities.
              </p>
              <p className="text-lg text-white">
                We have classrooms, activity spaces and a library giving
                children a safe space to learn and grow. We host many volunteer
                and monetised initiatives to help our project, but we always
                want to collaborate and grow so we can support more children
                with an effective approach
              </p>
              <br />
              <h2 className="text-3xl text-amber-300 font-bold mb-8">
                {" "}
                Class Trips{" "}
              </h2>
              <p className="text-lg text-white mb-6">
                Our class trips to National Museums and Natural Workers offer
                children exposure to new environments, enhancing their learning
                experiences.
              </p>
              <h2 className="text-3xl text-amber-300 font-bold mb-8">
                {" "}
                Activities{" "}
              </h2>
              <p className="text-lg text-white mb-6">
                We conduct extracurricular lessons in agriculture, the arts and
                languages, fostering practical skills and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
              <p className="text-lg text-gray-700 mb-8">
                At Mwema Education Foundation, we provide a safe haven and
                quality education for children who cannot live at home. Our
                dedicated in-house teachers offer dynamic learning experiences,
                laying a strong foundation for their future. We also support
                families in the community by covering school fees and providing
                guidance for higher education and employment opportunities. We
                are directly addressing the education and employment crisis in
                Uganda.
              </p>
              <Link
                to="/volunteer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Become a Volunteer
              </Link>
            </div>

            {/* Image Container */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/home3.png"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Stay connected with our mission
            </p>
            <p className="text-white/80">
              Get monthly updates about our impact, volunteer opportunities, and
              success stories
            </p>
          </div>

          <form className="max-w-lg mx-auto mb-8">
            <div className="bg-white p-1 rounded-full shadow-xl flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-gray-700 rounded-full focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
