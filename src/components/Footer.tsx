// import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

    <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div className="col-span-full xl:col-span-2">
        <a
        rel="noreferrer noopener"
        href="/"
        className="font-bold text-xl flex"
        >
        {/* <LogoIcon /> */}
        <img src="src\assets\DataLens.png" alt="Data Lens Logo" className="h-6 w-6 mr-2" />
        Data Lens
        </a>
      </div>

      <div className="flex flex-col gap-2">
      </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Services
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Team
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@paruidev"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 All Right reserved made by Team{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/shreyawatane/DataLens"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Zero Coder
          </a>
        </h3>
      </section>
    </footer>
  );
};
