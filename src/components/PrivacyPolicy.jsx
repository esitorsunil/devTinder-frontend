import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-base-300 text-base-content p-4 m-3">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>DevTinder</strong>, we respect your privacy and are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard your data when you use our website
        and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address,
        contact number, and payment information when you register, log in, or
        interact with our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To create and manage your account</li>
        <li>To process payments securely via Razorpay</li>
        <li>To improve our services and user experience</li>
        <li>To send important updates and notifications</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information. However, we may share
        data with trusted third-party providers (such as Razorpay) to facilitate
        payments and comply with legal obligations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your browsing experience. You can
        manage cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your personal
        information. However, no method of transmission over the Internet is
        100% secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. For any such requests, please contact us at{" "}
        <a
          href="mailto:sunil.esitor@gmail.com"
          className="text-blue-600 underline"
        >
          sunil.esitor@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at: <br />
        <strong>Email:</strong> sunil.esitor@gmail.com
      </p>

      <p className="text-sm text-gray-600 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
