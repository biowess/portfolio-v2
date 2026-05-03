import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "CSS Crash Course For Beginners",
    issuer: "Udemy / Proper Dot Institute",
    date: "Sept 1, 2024",
    description:
      "Focusing on modern styling and layout design.",
    link: "https://ude.my/UC-4dbf5b9e-cc5f-496b-8883-ecd48452f2c1",
  },
  {
    id: 2,
    title: "Introduction to ChatGPT",
    issuer: "DataCamp",
    date: "Mar 27, 2025",
    description:
      "Focusing on prompt engineering, AI limitations, and ethical best practices.",
    link:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/d31fa47fdc304f7d1bc49d84c969cd3462fa82a3",
  },
  {
    id: 3,
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Nov 30, 2024",
    description:
      "Covering data structures, functions, and control flow for data analysis.",
    link:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/0667df0808b030f01e7644001b1d6b178b378859",
  },
];

export function Certificates() {
  return (
    <>
      <SEO
        title="Certificates"
        description="Professional certifications and credentials."
      />

      <section className="bg-apple-light dark:bg-apple-dark text-apple-textLight dark:text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[800px] mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="hero-heading mb-6">
              Certificates & Credentials
            </h1>
            <p className="text-[21px] font-light text-black/70 dark:text-white/70">
              Professional certifications and academic credentials in medicine,
              computer science, and security.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-apple-surfaceDark1 rounded-[12px] p-6 shadow-apple flex flex-col gap-4"
              >
                {/* Badge */}
                <span className="inline-flex w-fit px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Completed
                </span>

                {/* Title */}
                <h2 className="text-[18px] font-semibold leading-tight">
                  {cert.title}
                </h2>

                {/* Issuer + Date */}
                <div className="text-[14px] text-hematology font-medium">
                  {cert.issuer}
                </div>
                <div className="text-[13px] text-black/50 dark:text-white/50">
                  Completed {cert.date}
                </div>

                {/* Description */}
                <p className="text-[15px] text-black/70 dark:text-white/70">
                  {cert.description}
                </p>

                {/* Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <button className="btn btn-outline btn-sm flex items-center gap-2">
                    <ExternalLink size={16} />
                    Verify
                  </button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <section className="text-center py-16">
            <div className="border border-dashed rounded-[12px] p-6 max-w-[400px] mx-auto opacity-70">
              <p className="italic text-sm">
                More certificates are being added as they are verified. Check
                back soon for updates.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}