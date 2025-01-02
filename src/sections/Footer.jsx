const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex sm:flex-row sm:justify-between items-center flex-wrap gap-5 flex-col">
      <div className="text-white-500 flex gap-2 sm:order-1 order-3">
        <p>Made with ❤️ by <a href="https://www.linkedin.com/in/suyash-tiwari-014412174/">Suyash Tiwari</a></p>
      </div>

      <div className="flex gap-3 sm:order-2 order-1">
        <a href="https://github.com/suyash0007">
        
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        </a>

        <a href="https://x.com/TiwariSuyash99">
        
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        </a>

        <a href="https://www.linkedin.com/in/suyash-tiwari-014412174/">
        
        <div className="social-icon">
          <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
        </a>
      </div>

      <p className="text-white-500 sm:order-3 order-2">© 2025 Suyash Tiwari. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
