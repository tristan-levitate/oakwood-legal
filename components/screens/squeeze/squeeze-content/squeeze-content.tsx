"use client";

import React, { useState } from "react";
import styles from "./squeeze-content.module.css";
import ContactForm from "@/components/globals/contact-us/form/contact-form";
import Image from "next/image";
import { SqueezeProps } from "@/types/types";
import TestimonialsAutoScroll from "@/components/globals/testimonials/testimonials-auto-scroll/testimonials-auto-scroll";

export default function SqueezeContent({ squeeze }: { squeeze: SqueezeProps }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentArea}>
          <div className={styles.squeezeContent}>
            <h1 className={styles.title}>{squeeze.title}</h1>
            <h2 className={styles.subtitle}>{squeeze.subtitle}</h2>
            
            <div className={styles.richContent}>
              <p className={styles.description}>{squeeze.description}</p>
            </div>

            {/* Video if available */}
            {squeeze.video && (
              <div className={styles.videoContainer}>
                {squeeze.video.videoType === "url" && squeeze.video.videoUrl ? (
                  <video
                    src={squeeze.video.videoUrl}
                    controls
                    className={styles.video}
                  />
                ) : squeeze.video.videoType === "file" && squeeze.video.videoFile ? (
                  <video
                    src={squeeze.video.videoFile.asset.url}
                    controls
                    className={styles.video}
                  />
                ) : null}
              </div>
            )}
          </div>

          {/* Testimonials Section */}
          <div className={styles.testimonialsSection}>
            <TestimonialsAutoScroll />
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className={styles.formArea}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <span className={styles.phoneNumber}>
                <div className={styles.divider} />
                (510) 835-6000
              </span>
              <h3 className={styles.formTitle}>Contact Our Law Office</h3>
              <p className={styles.formDescription}>
                Please fill out the form below to request your{" "}
                <span className={styles.highlight}>Free Consultation</span>
              </p>
            </div>
            
            <ContactForm />

            <div className={styles.formFooter}>
              <Image
                src="/images/olg-logo.svg"
                alt="Oakwood Legal Group"
                width={200}
                height={60}
                className={styles.logo}
              />
              <span className={styles.tagline}>
                Dedicated to supporting you and your family
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
