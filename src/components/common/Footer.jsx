import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../design/Logo";
import Section from "../design/Section";
import { PiHandPeace } from "react-icons/pi";

export default function Footer() {
  return (
    <Section sectionClass={"bg-blue-50"}>
      <footer className="footer  text-base-content py-16">
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
      <footer className="py-10 flex justify-between border-t border-blue-100">
        <div>© 2024 Heritage- Nest . All rights reserved.</div>
        <div className="flex gap-6 text-blue-800 text-2xl">
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <PiHandPeace className="cursor-pointer" />
        </div>
      </footer>
    </Section>
  );
}
