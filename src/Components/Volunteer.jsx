const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-[url('/cloud3.webp')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            MWEMA Education Foundation
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 font-light">
            Volunteer Opportunities
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Join us in making a difference in the lives of children in Uganda
          </p>
          <a
            href="#apply"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold 
                hover:bg-blue-50 transition-all transform hover:scale-105 
                hover:shadow-lg inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 mb-8">
            Join us in making a difference in the lives of children in Uganda.
            Our volunteer roles offer a chance to contribute your skills and
            passion to support education and community initiatives. Whether
            you're helping in classrooms, organising events, or just playing
            games with our children, your efforts will have a lasting impact.
          </p>

          {/* Volunteer Roles Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Teaching Assistant</h3>
              <p className="text-gray-600">
                Assist teachers in classrooms, help with lesson planning, and
                provide one-on-one support to students. Ideal for those with a
                background in education and working with children.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Events</h3>
              <p className="text-gray-600">
                Contribute towards our fundraisers and events to raise awareness
                and funds for our project. Perfect for individuals with strong
                organisational skills.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Agricultural Work</h3>
              <p className="text-gray-600">
                Provide essential nutrition and herbal remedies for our
                children, while learning about our agricultural practices.
              </p>
            </div>
          </div>
        </section>

        {/* Empower Through education */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="h-64 rounded-lg">
            <img
              src="/volunteer2.png"
              alt="Empower Through Education"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Empower Though Education
            </h2>
            <p className="text-gray-700">
              Volunteers play a crucial role in providing educational support
              and mentorship to children. Your involvement can help shape their
              future and empower them to achieve their dreams.
            </p>
            <p className="text-gray-700 mt-4">
              Help assist our teachers in our children's home, host your own
              dynamic lessons or take part in our extracurricular activities
              like football, drama and art classes.
            </p>
          </div>
        </section>

        {/* Mentorship Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Mentorship and Growth</h2>
            <p className="text-gray-700">
              Our volunteers provide essential mentorship, helping children
              develop critical skills and confidence. Join usto inspire and
              guide the next generation.
            </p>
            <p className="text-gray-700 mt-4">
              Build the minds of our children and experience Ugandan hospitality
              by spending time in our children's home ,sharing stories-
              knowledge and having fun! This also allows the children to
              practice other languages as well as their mother tongues.
            </p>
          </div>
          <div className="h-64 rounded-lg">
            <img
              src="/volunteer1.png"
              alt="Mentorship"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Community Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="h-64 rounded-lg">
            <img
              src="/volunteer3.png"
              alt="Community"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Community and Collaboration
            </h2>
            <p className="text-gray-700">
              Volunteering with us means becoming part of a supportive community
              dedicated to making a difference. Collaborate with like-minded
              individuals and create lasting change.
            </p>
            <p className="text-gray-700 mt-4">
              Meet members of the community doing incredible work and experience
              the beauty of Ugandan culture.
            </p>
          </div>
        </section>

        {/* Green Mission Section */}
        <section className="py-16 bg-lime-800 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                <img
                  src="/fruit.png"
                  alt="Sustainable Agriculture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-amber-300 space-y-4">
                <h2 className="text-3xl font-bold mb-4">
                  Join Our Green Mission
                </h2>
                <p className="text-gray-100 text-lg leading-relaxed">
                  At Mwema we are passionate about sustainable agriculture.
                  While we grow grains, potatoes, berries and exotic fruits for
                  our children, we also grow medicinal herbs and decorative
                  plants! We make juices from Hibiscus, we grow giant Jackfruits
                  and we always wish to grow more diverse crops!
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-lime-800 rounded-lg hover:bg-lime-50 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />

        {/* Workshops Section */}
        <section className="py-16 bg-gray-800 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                <img
                  src="/volunteer4.png"
                  alt="Indigenous Mud Hut Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white space-y-4">
                <h2 className="text-3xl font-bold mb-4">Join Our Workshops</h2>
                <p className="text-gray-100 text-lg leading-relaxed">
                  Experience the art of traditional mud hut building with our
                  skilled artisans. We host Indigenous Mud Hut workshops for a
                  small fee. You can learn about the important process of hut
                  making that has survived thousands of years.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section
          id="apply"
          className="mt-20 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Start Your Volunteer Journey
          </h2>
          <form className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Tell us about yourself and why you'd like to volunteer..."
                ></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-bold text-lg">
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default VolunteerPage;
