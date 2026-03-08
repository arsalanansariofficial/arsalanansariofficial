import * as Brands from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(props: {
  email: string;
  gitHub: string;
  linkedIn: string;
  whatsApp: string;
}) {
  return (
    <footer className='relative top-24 container mx-auto max-w-3xl space-y-4 p-8 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0'>
      <ul className='mx-auto flex max-w-fit gap-2 sm:order-1 sm:mx-0 sm:max-w-none'>
        <li className='h-4 w-4'>
          <a
            className='text-muted-foreground hover:text-foreground'
            href={props.email}
            target='_blank'
            title='Email'>
            <FontAwesomeIcon icon={faEnvelope} size='sm' />
          </a>
        </li>
        <li className='h-4 w-4'>
          <a
            className='text-muted-foreground hover:text-foreground'
            href={props.gitHub}
            target='_blank'
            title='GitHub'>
            <FontAwesomeIcon icon={Brands.faGithub} size='sm' />
          </a>
        </li>
        <li className='h-4 w-4'>
          <a
            className='text-muted-foreground hover:text-foreground'
            href={props.linkedIn}
            target='_blank'
            title='LinkedIn'>
            <FontAwesomeIcon icon={Brands.faLinkedin} size='sm' />
          </a>
        </li>
        <li className='h-4 w-4'>
          <a
            className='text-muted-foreground hover:text-foreground'
            href={props.whatsApp}
            target='_blank'
            title='WhatsApp'>
            <FontAwesomeIcon icon={Brands.faWhatsapp} size='sm' />
          </a>
        </li>
      </ul>
      <p className='text-muted-foreground text-center text-xs leading-5 font-light md:text-left'>
        created by <b>Arsalan Ansari</b>.
      </p>
    </footer>
  );
}
