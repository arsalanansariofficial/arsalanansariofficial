import * as Brands from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import data from '@/data.json';

export default function Footer() {
  return (
    <footer className="container mx-auto my-8 max-w-3xl space-y-4 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0">
      <ul className="mx-auto flex max-w-fit gap-2 sm:order-1 sm:mx-0 sm:max-w-none">
        <li className="h-4 w-4">
          <a
            title="Email"
            target="_blank"
            href={data.social.email}
            className="text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </a>
        </li>
        <li className="h-4 w-4">
          <a
            title="GitHub"
            target="_blank"
            href={data.social.gitHub}
            className="text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={Brands.faGithub} size="sm" />
          </a>
        </li>
        <li className="h-4 w-4">
          <a
            title="LinkedIn"
            target="_blank"
            href={data.social.linkedIn}
            className="text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={Brands.faLinkedin} size="sm" />
          </a>
        </li>
        <li className="h-4 w-4">
          <a
            target="_blank"
            title="WhatsApp"
            href={data.social.whatApp}
            className="text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={Brands.faWhatsapp} size="sm" />
          </a>
        </li>
        <li className="h-3 w-3">
          <a
            target="_blank"
            title="WhatsApp"
            href={data.social.resume}
            className="text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={faFile} size="sm" />
          </a>
        </li>
      </ul>
      <p className="text-muted-foreground text-center text-xs leading-5 font-light md:text-left">
        created by <b>Arsalan Ansari</b>.
      </p>
    </footer>
  );
}
