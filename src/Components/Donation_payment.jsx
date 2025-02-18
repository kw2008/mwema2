import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment_form";

// Replace with your Stripe publishable key
const stripePromise = loadStripe("your_publishable_key");

const DonationPayment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Complete Your Donation
          </h2>
          <Elements stripe={stripePromise}>
            <PaymentForm
              amount={50}
              onSuccess={() => {
                // Handle successful payment
                console.log("Payment successful");
              }}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default DonationPayment;
