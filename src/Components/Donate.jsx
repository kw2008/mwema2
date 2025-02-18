import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-700 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-12 tracking-tight">
            Please Donate Today
          </h1>
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            {/* Donation Options Cards */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">
                One-Time Donations
              </h2>
              <p className="text-white/90">
                Make a one-time donation to support educational resources and
                facilities for children in Uganda.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">
                Recurring Donations
              </h2>
              <p className="text-white/90">
                Set up a recurring donation to provide continuous support for
                our educational programs and initiatives.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">
                Special Donation Options
              </h2>
              <p className="text-white/90">
                Explore special donation options like sponsoring a classroom or
                funding a specific project.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">
                Physical Donations
              </h2>
              <p className="text-white/90">
                Contact us to make a physical donation of scholastic materials,
                clothes, or anything to help the children in our community!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Process Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ensuring Safe Contributions Every Time
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At Mwema Education Foundation, we prioritize your security. Our
              donation process is designed to protect your personal and
              financial information, ensuring that your contributions reach the
              children in Uganda safely and efficiently.
            </p>
            <button
              onClick={() => navigate("/donate/payment")}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            See the Impact of Your Generous Donation
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Your contributions help us provide essential education and support
            to children in Uganda. With your help, we can offer them a brighter
            future, filled with opportunities and hope. Every donation makes a
            significant difference in their lives.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Follow the Progress
            </h3>
            <p className="text-gray-600">
              Please keep up to date on our children's progress by signing up to
              our newsletter and following us on Instagram. Find our contact
              information at the bottom of this page.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Thank You for Your Support!
          </h2>
          <p className="text-white/90 text-lg">
            Your generous contributions make a significant difference in the
            lives of our children and make our good work possible!
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
