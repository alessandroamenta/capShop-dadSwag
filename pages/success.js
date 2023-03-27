import { useState } from "react";
import { useRouter } from "next/router";
import { fetchPostJSON } from "../utils/apiHelpers";

const Success = () => {
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  const getOrder = async (sessionId) => {
    const response = await fetchPostJSON("/api/getOrder", { sessionId });
    setOrderId(response.orderId);
  };

  const handleClick = () => {
    router.push("/");
  };

  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    if (sessionId) {
      getOrder(sessionId);
    }
  }

  return (
      <div className="max-w-4xl mx-auto my-4 p-4 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Thank you for your purchase!
        </h1>
        {orderId && (
          <div className="text-gray-900 mb-4">
            <p>Your order id is: {orderId}</p>
          </div>
        )}
        <button
          onClick={handleClick}
          className="bg-gray-800 text-white py-2 px-4 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
  );
};

export default Success;
