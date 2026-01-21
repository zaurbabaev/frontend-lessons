import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState(false);

  const isShort = password.length > 0 && password.length < 6;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Password</h2>

        <div
          className={`flex items-center rounded-lg border px-3 transition-colors duration-200 ${touched && isShort ? "border-red-500" : "border-gray-300"} focus-within:border-blue-500`}
        >
          <FaLock className="text-gray-400" />
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Password"
            className="w-full px-3 py-2 outline-none"
          />

          <button
            className="text-gray-500 hover:text-gray-800"
            type="button"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p
          className={`mt-2 text-sm text-red-500 ${touched && isShort ? "visible" : "invisible"}`}
        >
          Simvol sayı 6-dan az ola bilməz
        </p>
      </div>
    </div>
  );
}

export default PasswordForm;
