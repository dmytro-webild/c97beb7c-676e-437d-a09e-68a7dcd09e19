"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Kinza Design"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars"}}
      title="Professional Graphic Design That Grows Your Business"
      description="Transforming your brand vision into compelling visual reality. Serving local businesses with high-quality design services."
      buttons={[
        {
          text: "Get a Free Quote",          href: "#contact"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/letter-eyeglasses-smartphone-earphone-coffee-cup-white-desk_23-2148061610.jpg",          imageAlt: "minimalist graphic design studio"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-clipboard-earphone-wrist-watch-eyeglasses-pen-gray-backdrop_23-2148052553.jpg",          imageAlt: "minimalist graphic design studio"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/painting-watercolors-high-angle_23-2149386335.jpg",          imageAlt: "minimalist graphic design studio"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/design-ideas-creative-business-innovation-concept_53876-120333.jpg",          imageAlt: "minimalist graphic design studio"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-laptop-puppet-with-copy-space_23-2148697006.jpg?_wi=1",          imageAlt: "minimalist graphic design studio"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-laptop-puppet-with-copy-space_23-2148697006.jpg?_wi=2",          imageAlt: "minimalist graphic design studio"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="About Kinza Design"
      description="With a passion for creativity and precision, I provide high-impact design solutions tailored to help small businesses stand out in a crowded market."
      metrics={[
        {
          value: "Custom",          title: "Projects Completed"},
        {
          value: "Full",          title: "Satisfaction Rate"},
        {
          value: "10+",          title: "Years Experience"},
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Generic templates",          "High costs",          "Slow turnaround",          "Inconsistent branding",          "Lack of strategy"],
      }}
      positiveCard={{
        items: [
          "Custom branding",          "Affordable rates",          "Fast delivery",          "Strategic design",          "Dedicated support"],
      }}
      title="Core Design Services"
      description="Comprehensive design solutions to cover every touchpoint of your business."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Tech Startup Logo",          price: "Branding",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-people-collage-design_23-2149450429.jpg"},
        {
          id: "2",          name: "Restaurant Brochure",          price: "Print",          imageSrc: "http://img.b2bpic.net/free-photo/mobile-phone-milk-carton-eyeglasses-notebook-diary-magnifying-glass_23-2148061528.jpg"},
        {
          id: "3",          name: "Social Media Kit",          price: "Digital",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443503.jpg"},
        {
          id: "4",          name: "Business Card Suite",          price: "Print",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-desk-elements-arrangement-with-empty-screen-tablet_23-2148708013.jpg"},
        {
          id: "5",          name: "Mobile App UI",          price: "Digital",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443497.jpg"},
        {
          id: "6",          name: "Product Packaging",          price: "Print",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-boards-mdf-material_23-2149418546.jpg"},
      ]}
      title="Selected Work"
      description="A collection of recent branding and design projects."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Great Service",          quote: "Kinza transformed our branding completely. Highly professional!",          name: "Sarah Miller",          role: "CEO"},
        {
          id: "2",          title: "Fast & Efficient",          quote: "The turnaround time was incredible and the quality is top-notch.",          name: "John Doe",          role: "Founder"},
        {
          id: "3",          title: "Creative Mind",          quote: "Kinza always understands the vision perfectly, even without clear instruction.",          name: "Emily Smith",          role: "Marketing"},
        {
          id: "4",          title: "Increased Leads",          quote: "Our new website graphics have led to a noticeable increase in engagement.",          name: "Mark Wilson",          role: "Manager"},
        {
          id: "5",          title: "Excellent Quality",          quote: "Professional, reliable, and incredibly talented. Would recommend to anyone.",          name: "Jane Brown",          role: "Owner"},
      ]}
      title="What Clients Say"
      description="Trusted by businesses local to your area."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How long does a design take?",          content: "Most projects take 3-5 business days depending on complexity."},
        {
          id: "2",          title: "Do you offer revisions?",          content: "Yes, all packages include multiple rounds of revisions."},
        {
          id: "3",          title: "Are your rates affordable?",          content: "I offer competitive pricing tailored for local small businesses."},
        {
          id: "4",          title: "What file formats do you provide?",          content: "I provide high-resolution print-ready files and digital assets."},
        {
          id: "5",          title: "Can I request a custom package?",          content: "Absolutely, feel free to contact me with your specific requirements."},
      ]}
      title="Common Questions"
      description="Learn more about our design process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start Your Project"
      description="Ready to elevate your brand? Reach out for a free quote at fatimakinza673@gmail.com"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project..."}}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Kinza Graphic Design"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
