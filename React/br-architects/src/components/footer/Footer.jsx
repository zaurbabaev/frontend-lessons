import React from "react";

const FooterSection = () => {
  return (
    <div>
      <footer className="text-center bg-black p-4 my-5">
        <p className="text-white">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500">
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
};

export default FooterSection;
