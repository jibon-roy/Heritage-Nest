import Logo from "../design/Logo";
import Section from "../design/Section";

export default function Footer() {
  return (
    <Section className={"bg-blue-50"}>
      <footer className="footer  text-base-content p-10">
        <aside>
          <Logo />
          <p>
            Design amazing digital experiences <br />
            that create more happy in theworld.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title normal-case">Product</h6>
          <a className="link link-hover font-semibold text-slate-600">
            Overview
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Features
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Solutions
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Tutorials
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Pricing
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Releases
          </a>
        </nav>
        <nav>
          <h6 className="footer-title normal-case">Company</h6>
          <a className="link link-hover font-semibold text-slate-600">
            About us
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Careers
          </a>
          <a className="link link-hover font-semibold text-slate-600">Press</a>
          <a className="link link-hover font-semibold text-slate-600">News</a>
          <a className="link link-hover font-semibold text-slate-600">
            Media Kit
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title normal-case">Resources</h6>
          <a className="link link-hover font-semibold text-slate-600">Blog</a>
          <a className="link link-hover font-semibold text-slate-600">
            Newsletter
          </a>
          <a className="link link-hover font-semibold text-slate-600">Events</a>
          <a className="link link-hover font-semibold text-slate-600">
            Help centre
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Tutorials
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Support
          </a>
        </nav>
        <nav>
          <h6 className="footer-title normal-case">Social</h6>
          <a className="link link-hover font-semibold text-slate-600">
            Twitter
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Linkedin
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Facebook
          </a>
          <a className="link link-hover font-semibold text-slate-600">GitHub</a>
          <a className="link link-hover font-semibold text-slate-600">
            AngelList
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Dribbble
          </a>
        </nav>
        <nav>
          <h6 className="footer-title normal-case">Legal</h6>
          <a className="link link-hover font-semibold text-slate-600">Terms</a>
          <a className="link link-hover font-semibold text-slate-600">
            Privacy
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Cookies
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Licenses
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Settings
          </a>
          <a className="link link-hover font-semibold text-slate-600">
            Contact
          </a>
        </nav>
      </footer>
    </Section>
  );
}
