import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51QC1uEI8sInWbbt4ioMAiWk6J5onxQJbFJWRxTwUuuwcdYqEB2HrL19jwHHpSoKwkxrMEbrU5bWW3dJrxeykXZin00IBQiRiOw"
  );
  const [clientSecret, setClientSecret] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  
  // Get total from URL parameters
  const total = parseFloat(searchParams.get("total") || "0");

  useEffect(() => {
    // Redirect to cart if no total or total is 0
    if (!total) {
      navigate('/cart');
      return;
    }

    const createPaymentIntent = async () => {
      try {
        const { data } = await axiosPublic.post("/paymentStripe", {
          price: total,
        });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error.message);
        // Redirect to cart on error
        navigate('/cart');
      }
    };

    createPaymentIntent();
  }, [total, navigate, axiosPublic]);

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-32 z-[999999]">
      <div className="max-w-lg mx-auto p-4">
        {/* Order Summary Section */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <p className="text-gray-600">Total Amount: ${total.toFixed(2)}</p>
        </div>

        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutPage clientSecret={clientSecret} total={total} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;