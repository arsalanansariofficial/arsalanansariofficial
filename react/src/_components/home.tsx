import { useState } from 'react';
import * as Radix from '@radix-ui/react-icons';

import { cn } from '@/_lib/utils';
import * as ShadDial from '@/_components/ui/dialog';
import * as ShadSelect from '@/_components/ui/select';
import person from '../../public/about/arsalan-ansari.json';

export default function Home() {
  const [articleFilter, setArticle] = useState('About');
  const [projectFilter, setProjectFilter] = useState('All');
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);

  const filteredProjects = person.projects.filter(project =>
    projectFilter === 'All' ? true : project.category === projectFilter
  );

  return (
    <div className="min-h-screen gap-4 space-y-4 bg-smoky-black p-4 font-sans antialiased md:space-y-8 md:p-16 lg:grid lg:grid-flow-col lg:grid-cols-[15em_1fr] lg:gap-4 lg:space-y-0 lg:p-4">
      <aside className="sidebar contact-list_item container space-y-4 rounded-3xl border border-jet bg-eerie-black-2 p-4 shadow-shadow-1 sm:space-y-4 sm:p-6 md:w-11/12 md:space-y-6 md:p-8 lg:sticky lg:top-4 lg:w-auto lg:max-w-60 lg:space-y-4 lg:self-start lg:px-4 lg:pt-16">
        <div className="sidebar_info relative z-10 grid grid-flow-col grid-cols-[5em_1fr] gap-4 sm:grid-cols-[5.5em_1fr] md:grid-cols-[7em_1fr] md:gap-8 lg:flex lg:flex-col lg:items-center lg:gap-4 lg:text-center">
          <figure className="info_profile-box rounded-3xl bg-bg-gradient-onyx p-2">
            <img
              width={100}
              height={100}
              alt={person.name}
              src={person.profilePicture}
              className="profile-box_img rounded-2xl"
            />
          </figure>
          <div className="info_content space-y-2 self-center">
            <h1 className="content_name font-semibold text-white-2 sm:text-base md:text-base lg:text-2xl">
              {person.name}
            </h1>
            <p className="content_title inline-block rounded-xl bg-onyx px-4 py-2 text-xs text-white-1 sm:text-sm md:text-sm">
              {person.title}
            </p>
          </div>
          <button
            className="info_chevron focus absolute -right-4 -top-4 rounded-bl-3xl rounded-tr-3xl px-2 shadow-shadow-2 before:absolute before:inset-0 before:-z-10 before:block before:rounded-bl-3xl before:rounded-tr-3xl before:content-[''] hover:bg-bg-gradient-yellow-1 focus:bg-bg-gradient-yellow-1 sm:-right-6 sm:-top-6 md:-right-8 md:-top-8 md:px-8 md:py-2 lg:hidden"
            onClick={() =>
              setIsAccordianOpen(isAccordianOpen => !isAccordianOpen)
            }
          >
            <span className="chevron_label hidden text-sm text-orange-yellow-crayola md:inline">
              Show Contacts
            </span>
            <Radix.ChevronDownIcon
              className={cn(
                'chevron_icon aspect-square h-7 w-10 text-orange-yellow-crayola md:hidden',
                isAccordianOpen && 'rotate-180'
              )}
            />
          </button>
        </div>
        <div
          className={cn(
            `sidebar_more-info space-y-4 lg:static lg:h-auto lg:w-auto lg:scale-100 lg:block`,
            !isAccordianOpen && 'hidden'
          )}
        >
          <ul className="info_contact-list grid items-start gap-4 gap-y-4 border-b border-t border-jet py-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 md:gap-y-8 md:py-10 lg:grid-cols-1 lg:gap-4 lg:border-b-0 lg:py-4">
            {Object.keys(person.contactDetails).map(_key => {
              const key = _key as keyof typeof person.contactDetails;
              return (
                <li
                  key={key}
                  className="contact-list_item flex gap-4 text-white md:gap-8 lg:gap-2 lg:px-4"
                >
                  <div className="item_icon relative z-10 aspect-square content-center rounded-lg bg-border-gradient-onyx p-2 text-orange-yellow-crayola shadow-shadow-2 before:absolute before:inset-[1px] before:-z-10 before:block before:rounded-lg before:bg-eerie-black-1 before:content-[''] sm:p-3 md:p-4">
                    {key === 'dob' && <Radix.CalendarIcon />}
                    {key === 'email' && <Radix.EnvelopeOpenIcon />}
                    {key === 'phone' && <Radix.IdCardIcon />}
                    {key === 'location' && <Radix.DrawingPinFilledIcon />}
                  </div>
                  <div className="item_info sm:space-y-1">
                    <h2 className="key text-xs capitalize text-light-gray-70 sm:text-sm">
                      {key}
                    </h2>
                    <p className="value text-xs sm:text-sm lg:text-wrap lg:break-all">
                      {person.contactDetails[key]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="info_social flex gap-4 sm:gap-6 md:gap-6 lg:justify-center">
            <a href={person.social.github} className="text-light-gray-70">
              <Radix.GitHubLogoIcon className="text-[5rem]" fontSize={20} />
            </a>
            <a href={person.social.email} className="text-light-gray-70">
              <Radix.EnvelopeOpenIcon />
            </a>
            <a href={person.social.discord} className="text-light-gray-70">
              <Radix.DiscordLogoIcon />
            </a>
            <a href={person.social.website} className="text-light-gray-70">
              <Radix.Link2Icon />
            </a>
            <a href={person.social.resume} className="text-light-gray-70">
              <Radix.FileTextIcon />
            </a>
          </div>
        </div>
      </aside>
      <main className="main-content text-app-primary container !mb-12 rounded-3xl border border-jet bg-eerie-black-2 p-4 shadow-shadow-2 md:w-11/12 md:p-8 lg:relative lg:col-start-2 lg:-col-end-1 lg:m-0 lg:w-auto lg:max-w-full">
        <nav className="navbar fixed bottom-0 left-0 right-0 z-50 w-full rounded-t-2xl border border-jet bg-[#2b2b2cbf] shadow-shadow-2 backdrop-blur lg:absolute lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:w-auto lg:rounded-bl-xl lg:rounded-tl-none">
          <ul className="navbar_list flex flex-wrap items-center justify-center lg:gap-4 lg:px-4">
            {person.articleCategories.map((filter, index) => {
              return (
                <li
                  key={index}
                  className="list_item flex justify-center text-primary-foreground"
                >
                  <button
                    className={cn(
                      'navbar-link block px-2 py-4 text-xs text-light-gray transition-colors duration-300 ease-in hover:text-light-gray-70 focus-visible:text-light-gray-70 sm:text-sm md:text-base xl:text-xl',
                      filter === articleFilter &&
                        'text-orange-yellow-crayola hover:text-orange-yellow-crayola focus-visible:text-orange-yellow-crayola'
                    )}
                    onClick={() => setArticle(filter)}
                  >
                    {filter}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        {articleFilter === 'About' && (
          <article className="main-content_about space-y-10">
            <header className="about_header">
              <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-1/6 after:max-w-8 after:translate-y-4 after:rounded-full after:bg-text-gradient-yellow after:content-[''] md:text-3xl">
                About Me
              </h2>
            </header>
            <section className="about_about-me space-y-4">
              {person.about.map((about, index) => {
                return (
                  <p key={index} className="text-white-1">
                    {about.content}
                  </p>
                );
              })}
            </section>
            <section className="about_service space-y-4">
              <h3 className="service_title text-2xl font-semibold text-white-1">
                What I am doing
              </h3>
              <ul className="service_list space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                {person.services.map((service, index) => {
                  return (
                    <li
                      key={index}
                      className="service_item relative z-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-border-gradient-onyx p-8 text-center shadow-shadow-2 before:absolute before:inset-[1px] before:-z-10 before:rounded-xl before:bg-bg-gradient-jet before:content-[''] sm:flex-row sm:items-start sm:justify-start sm:p-6 sm:text-left"
                    >
                      <div className="item_icon-box">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="aspect-square max-w-20"
                        />
                      </div>
                      <div className="icon_content-box">
                        <h4 className="content-box_category text-xl font-semibold text-white-1">
                          {service.category}
                        </h4>
                        <p className="content-box_title text-light-gray-70">
                          {service.title}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="about_testimonial space-y-4">
              <h3 className="testimonial_title text-2xl font-semibold text-white">
                Projects
              </h3>
              <ul className="testimonial_list has-scrollbar flex gap-8 overflow-auto py-8 lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-4 lg:overflow-x-auto">
                {person.testimonials.map((testimonial, index) => {
                  return (
                    <ShadDial.Dialog key={index}>
                      <ShadDial.DialogTrigger>
                        <li
                          key={index}
                          className="testimonial_item min-w-80 text-left lg:min-w-0"
                        >
                          <div className="item_content-card before:bg-gradient-jet relative z-10 aspect-video overflow-visible text-balance rounded-xl bg-border-gradient-onyx p-4 shadow-shadow-2 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:content-['']">
                            <figure className="content-card_avatar-box absolute aspect-square max-w-16 -translate-y-10 rounded-xl bg-bg-gradient-onyx">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="aspect-square min-w-12"
                              />
                            </figure>
                            <div className="content-card_text">
                              <h4 className="h4 content-card_title mt-8 text-xl font-semibold text-white">
                                {testimonial.name}
                              </h4>
                              <p className="line-clamp-4 text-light-gray-70">
                                {testimonial.comment}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ShadDial.DialogTrigger>
                      <ShadDial.DialogContent className="bg-eerie-black-2 text-white">
                        <ShadDial.DialogHeader>
                          <ShadDial.DialogTitle className="text-white-1">
                            {testimonial.name}
                          </ShadDial.DialogTitle>
                          <ShadDial.DialogDescription className="text-light-gray-70">
                            {testimonial.comment}
                          </ShadDial.DialogDescription>
                        </ShadDial.DialogHeader>
                      </ShadDial.DialogContent>
                    </ShadDial.Dialog>
                  );
                })}
              </ul>
            </section>
            <section className="about_client space-y-8">
              <h3 className="client_title text-2xl font-semibold text-white-1">
                Tech Stack
              </h3>
              <ul className="client_list has-scrollbar flex gap-8 overflow-auto p-4 lg:grid lg:grid-flow-col lg:overflow-x-auto">
                {person.clients.map((client, index) => {
                  return (
                    <li key={index} className="client_item">
                      <a href={client.website}>
                        <img
                          src={client.image}
                          alt={client.name}
                          className="aspect-square min-w-20 lg:min-w-0"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        )}
        {articleFilter === 'Resume' && (
          <article className="main-content_resume space-y-10">
            <header className="resume_header">
              <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-1/6 after:max-w-8 after:translate-y-4 after:rounded-full after:bg-text-gradient-yellow after:content-[''] md:text-3xl">
                Resume
              </h2>
            </header>
            <section className="resume_education space-y-4">
              <h3 className="education_title flex items-center gap-2 text-lg font-semibold text-white-1">
                <Radix.BookmarkIcon className="relative z-10 aspect-square h-8 w-8 rounded-lg bg-border-gradient-onyx p-2 text-orange-yellow-crayola shadow-shadow-1" />
                Education
              </h3>
              <ol className="education_list ms-10">
                {person.timeline.education.map((education, index) => {
                  return (
                    <li
                      key={index}
                      className="list_item --after:animate-ping --after:absolute --after:-left-6 --after:top-0 --after:z-30 --after:h-[6px] --after:w-[6px] --after:-translate-x-1/2 --after:translate-y-4 --after:rounded-full --after:bg-text-gradient-yellow --after:shadow-shadow-6 --after:content-[''] relative z-10 space-y-1 py-2 text-white-1 before:absolute before:-left-6 before:bottom-0 before:w-[1.5px] before:-translate-x-1/2 before:rounded-t-full before:bg-jet before:content-['']"
                    >
                      <span className="item_bubble absolute -left-6 top-4 flex aspect-square w-3 -translate-x-1/2">
                        <span
                          className={cn(
                            'absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75',
                            index === 0 && 'animate-ping'
                          )}
                        ></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-text-gradient-yellow"></span>
                      </span>

                      <h3 className="item_institution font-semibold capitalize">
                        {education.institution}
                      </h3>

                      <span className="item_duration block text-vegas-gold">
                        {education.duration}
                      </span>

                      <p className="item_description text-light-gray">
                        {education.description}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </section>
            <section className="resume_experience space-y-4">
              <h3 className="experience_title flex items-center gap-2 text-lg font-semibold text-white-1">
                <Radix.BookmarkIcon className="relative z-10 aspect-square h-8 w-8 rounded-lg bg-border-gradient-onyx p-2 text-orange-yellow-crayola shadow-shadow-1" />
                Experience
              </h3>
              <ol className="experience_list ms-10">
                {person.timeline.experience.map((experience, index) => {
                  return (
                    <li
                      key={index}
                      className="list_item --after:absolute --after:-left-6 --after:top-0 --after:z-30 --after:h-[6px] --after:w-[6px] --after:-translate-x-1/2 --after:translate-y-4 --after:rounded-full --after:bg-text-gradient-yellow --after:shadow-shadow-6 --after:content-[''] relative z-10 space-y-1 py-2 text-white-1 before:absolute before:-left-6 before:bottom-0 before:w-[1.5px] before:-translate-x-1/2 before:rounded-t-full before:bg-jet before:content-['']"
                    >
                      <span className="item_bubble absolute -left-6 top-4 flex aspect-square w-3 -translate-x-1/2">
                        <span
                          className={cn(
                            'absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75',
                            index === 0 && 'animate-ping'
                          )}
                        ></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-text-gradient-yellow"></span>
                      </span>
                      <h3 className="item_institution font-semibold capitalize">
                        {experience.institution}
                      </h3>
                      <span className="item_duration block text-vegas-gold">
                        {experience.duration}
                      </span>
                      <p className="item_description text-light-gray">
                        {experience.description}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </section>
            <section className="resume_skill space-y-4">
              <h3 className="skill_title flex items-center gap-2 text-lg font-semibold text-white-1">
                My Skills
              </h3>
              <ol className="skill_list before:shadow-2 relative z-10 cursor-pointer space-y-2 rounded-xl bg-border-gradient-onyx p-4 shadow-shadow-2 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:content-['']">
                {person.skills.map((skill, index) => {
                  return (
                    <li key={index} className="skills_item space-y-2">
                      <div className="item_wrapper flex items-center gap-2">
                        <h5 className="item_title text-sm font-semibold text-white-1">
                          {skill.title}
                        </h5>
                        <data
                          value={skill.percentage}
                          className="item_percentage text-light-gray"
                        >
                          {skill.percentage}%
                        </data>
                      </div>
                      <div className="item_progressbar h-2 rounded-full bg-jet">
                        <div
                          className="progressbar_fill h-full rounded-full bg-text-gradient-yellow"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          </article>
        )}
        {articleFilter === 'Portfolio' && (
          <article className="main-content_portfolio space-y-10">
            <header className="portfolio_header">
              <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-1/6 after:max-w-8 after:translate-y-4 after:rounded-full after:bg-text-gradient-yellow after:content-[''] md:text-3xl">
                Portfolio
              </h2>
            </header>
            <section className="portfolio_section space-y-8">
              <div className="section_project-filter md:hidden">
                <ShadSelect.Select
                  onValueChange={(filter: string) => setProjectFilter(filter)}
                >
                  <ShadSelect.SelectTrigger className="w-full rounded-xl border border-jet py-6 text-base text-light-gray focus:ring-0 focus-visible:ring-0">
                    <ShadSelect.SelectValue placeholder="Select Category" />
                  </ShadSelect.SelectTrigger>
                  <ShadSelect.SelectContent className="mt-2 rounded-xl border border-jet bg-[#1e1e1f] text-white-2 shadow-none">
                    {person.projectCategories.map((category, index) => {
                      return (
                        <ShadSelect.SelectItem
                          key={index}
                          value={category}
                          className="px-3 py-2 text-light-gray focus:rounded-lg focus:bg-[#323234] focus:text-light-gray"
                        >
                          {category}
                        </ShadSelect.SelectItem>
                      );
                    })}
                  </ShadSelect.SelectContent>
                </ShadSelect.Select>
              </div>
              <div className="section_project-filter hidden md:block">
                <ul className="project-list flex gap-4">
                  {person.projectCategories.map((category, index) => {
                    return (
                      <li
                        key={index}
                        className={cn(
                          'project-item text-white-2 duration-100 ease-in hover:text-light-gray-70 focus-visible:text-light-gray-70',
                          category === projectFilter &&
                            'text-orange-yellow-crayola hover:text-orange-yellow-crayola focus-visible:text-orange-yellow-crayola'
                        )}
                      >
                        <button
                          className="capitalize"
                          onClick={() => setProjectFilter(category)}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className="section_project-list space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                {filteredProjects.map((project, index) => {
                  return (
                    <li key={index} className="project-list_item">
                      <a href={project.href} className="">
                        <figure className="item_image-box relative mb-4 aspect-square overflow-hidden rounded-xl before:absolute before:inset-0 before:z-10 before:hidden before:rounded-xl before:bg-[#00000080] before:content-[''] hover:before:block">
                          <div className="image-box_icon-box absolute left-1/2 top-1/2 z-20 hidden aspect-square -translate-x-1/2 -translate-y-1/2 rounded-xl bg-jet p-4">
                            <Radix.EyeOpenIcon className="text-orange-yellow-crayola" />
                          </div>
                          <img
                            alt={project.title}
                            src={project.image}
                            className="image-box_img object-cover-- absolute inset-0 aspect-video h-full w-full object-center"
                          />
                        </figure>
                        <h3 className="item_title text-base font-semibold text-white-2">
                          {project.category}
                        </h3>
                        <p className="item_category text-sm text-light-gray-70">
                          {project.title}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        )}
        {articleFilter === 'Blog' && (
          <article className="main-content_blog space-y-10">
            <header className="blog_header">
              <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-1/6 after:max-w-8 after:translate-y-4 after:rounded-full after:bg-text-gradient-yellow after:content-[''] md:text-3xl">
                Blog
              </h2>
            </header>
            <section className="blog_section space-y-8">
              <ul className="section_blog-list space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                {person.blogs.map((blog, index) => {
                  return (
                    <li key={index} className="blog-list_item">
                      <a
                        href={blog.href}
                        className="relative z-10 bg-border-gradient-onyx shadow-shadow-4 before:absolute before:inset-0 before:-z-10 before:block before:rounded-xl before:border-white-1 before:bg-eerie-black-1 before:content-['']"
                      >
                        <figure className="item_image-box relative mb-4 aspect-video overflow-hidden rounded-xl before:absolute before:inset-0 before:z-10 before:hidden before:rounded-xl before:bg-[#00000080] before:content-[''] hover:before:block">
                          <div className="image-box_icon-box absolute left-1/2 top-1/2 z-20 hidden aspect-square -translate-x-1/2 -translate-y-1/2 rounded-xl bg-jet p-4">
                            <Radix.EyeOpenIcon className="text-orange-yellow-crayola" />
                          </div>
                          <img
                            alt={blog.title}
                            src={blog.image}
                            className="image-box_img absolute inset-0"
                          />
                        </figure>
                        <div className="item_content space-y-2 rounded-b-xl p-4">
                          <span className="item_date flex items-center gap-2 text-sm text-light-gray-70">
                            {blog.category}
                            <strong className="item_dot aspect-square w-1.5 rounded-full bg-light-gray-70"></strong>
                            {blog.date}
                          </span>
                          <h3 className="item_title text-lg font-semibold text-white-2">
                            {blog.title}
                          </h3>
                          <p className="item_description text-sm text-light-gray-70">
                            {blog.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        )}
        {articleFilter === 'Contact' && (
          <article className="main-content_contact space-y-10">
            <header className="contact_header">
              <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-1/6 after:max-w-8 after:translate-y-4 after:rounded-full after:bg-text-gradient-yellow after:content-[''] md:text-3xl">
                Contact
              </h2>
            </header>
            <section className="contact_mapbox h-72 overflow-hidden rounded-xl border border-jet">
              <figure className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111835.38495511685!2d78.76755229999999!3d28.843153450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbea2f5646c9%3A0xb8c97ce4e95398db!2sMoradabad%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1723553915153!5m2!1sen!2sbd"
                  loading="lazy"
                  className="h-full w-full max-w-full grayscale invert"
                ></iframe>
              </figure>
            </section>
            <section className="contact_form space-y-4">
              <h3 className="form_form-title text-base font-semibold text-white-2">
                Contact Form
              </h3>
              <form className="contact_form-form flex flex-col gap-4">
                <div className="form_input-wrapper space-y-4">
                  <input
                    type="text"
                    name="fullname"
                    className="input-wrapper_input w-full rounded-xl border border-jet bg-transparent px-5 py-3 text-sm font-semibold text-white-2 outline-none focus:border-bittersweet-shimmer"
                    placeholder="Full name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="input-wrapper_input w-full rounded-xl border border-jet bg-transparent px-5 py-3 text-sm font-semibold text-white-2 outline-none focus:border-bittersweet-shimmer"
                    placeholder="Email address"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  className="form-input rounded-xl border border-jet bg-transparent px-5 py-3 text-sm font-semibold text-white-2 outline-none focus:border-bittersweet-shimmer"
                  placeholder="Your Message"
                  required
                />
                <button
                  className="form_btn before:bg-gradient-onyx relative z-10 flex items-center justify-center gap-4 rounded-xl bg-border-gradient-onyx p-4 font-semibold capitalize text-orange-yellow-crayola shadow-shadow-3 before:absolute before:inset-0 before:-z-10 before:block before:rounded-xl before:content-['']"
                  type="submit"
                >
                  <Radix.PaperPlaneIcon className="inline-block h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </article>
        )}
      </main>
    </div>
  );
}
