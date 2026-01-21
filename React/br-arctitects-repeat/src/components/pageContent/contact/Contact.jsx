const inputClass =
  "w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500";

const buttonClass =
  "bg-black text-white px-6 py-2 rounded flex items-center justify-center space-x-2 hover:bg-gray-800 transition";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pt-8">
      <h2 className="border-b border-gray-300 pb-4 text-2xl font-semibold">
        Contact
      </h2>
      <p className="mt-2 mb-6 text-gray-600">
        Let's get in touch and talk about your next project
      </p>

      <form action="/action_page.php" target="_blank" className="space-y-4">
        <input type="text" placeholder="Name" required className={inputClass} />
        <input
          type="email"
          placeholder="Email"
          required
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Subject"
          required
          className={inputClass}
        />
        <textarea
          placeholder="Comment"
          rows={4}
          required
          className={inputClass}
        ></textarea>
        <button type="submit" className={buttonClass}>
          <i className="fa fa-paper-plane"></i>
          <span>SEND MESSAGE</span>
        </button>
      </form>

      {/* Map */}
      <img src="/map.jpg" alt="Map" className="mt-6 w-full rounded" />
    </div>
  );
}
