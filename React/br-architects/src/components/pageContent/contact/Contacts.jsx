const ContactSection = () => {
  return (
    <div id="contact" className="container mx-auto px-4 pt-8">
      {/* Başlıq */}
      <h2 className="border-b border-gray-300 pb-4 text-2xl font-semibold">
        Contact
      </h2>
      <p className="mt-2 mb-6 text-gray-600">
        Lets get in touch and talk about your next project
      </p>

      {/* Form */}
      <form action="/action_page.php" target="_blank" className="space-y-4">
        <input
          className="w-full border border-gray-300 px-3 py-2 rounded"
          type="text"
          placeholder="Name"
          required
          name="Name"
        />
        <input
          className="w-full border border-gray-300 px-3 py-2 rounded"
          type="email"
          placeholder="Email"
          required
          name="Email"
        />
        <input
          className="w-full border border-gray-300 px-3 py-2 rounded"
          type="text"
          placeholder="Subject"
          required
          name="Subject"
        />
        <textarea
          className="w-full border border-gray-300 px-3 py-2 rounded"
          placeholder="Comment"
          required
          name="Comment"
          rows={4}></textarea>
        <button
          className="bg-black text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-gray-800 transition"
          type="submit">
          <i className="fa fa-paper-plane"></i>
          <span>SEND MESSAGE</span>
        </button>
      </form>

      {/* Map */}
      <img src="https://www.w3schools.com/w3images/map.jpg" alt="Map" className="w-full mt-6 rounded" />

    </div>
  );
};

export default ContactSection;
