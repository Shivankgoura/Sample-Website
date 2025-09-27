


import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const cn = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(' ');

// Main reusable FAQ component
export const FAQ = ({ 
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props 
}: {
    title?: string,
    subtitle?: string,
    categories: Record<string, string>,
    faqData: Record<string, { question: string, answer: string }[]>,
    className?: string,
    [key: string]: any 
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      className={cn(
        "relative overflow-hidden bg-[var(--background)] px-4 py-12 text-[var(--foreground)]",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs 
        categories={categories}
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FAQList 
        faqData={faqData}
        selected={selectedCategory} 
      />
    </section>
  );
};

const FAQHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center">
    {subtitle && <span className="mb-8 bg-gradient-to-r from-[var(--primary)] to-[color:var(--primary)/0.6] bg-clip-text font-medium text-transparent">
      {subtitle}
    </span>}
    {title && <h2 className="mb-8 text-4xl md:text-5xl font-bold font-heading">{title}</h2>}
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-[color:var(--primary)/0.1] to-[color:var(--primary)/0.05] blur-3xl" />
  </div>
);

const FAQTabs = ({ categories, selected, setSelected }: { categories: Record<string, string>, selected: string, setSelected: (category: string) => void }) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500",
          selected === key
            ? "border-[var(--primary)] text-[var(--primary-foreground)]"
            : "border-[var(--border)] bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="absolute inset-0 z-0 bg-[var(--primary)]"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

const FAQList = ({ faqData, selected }: { faqData: Record<string, { question: string, answer: string }[]>, selected: string }) => (
  <div className="mx-auto mt-12 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="space-y-4"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

// FIX: Changed component to be typed with React.FC to correctly handle React-specific props like 'key', resolving a type error.
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
        isOpen ? "bg-zinc-900/80" : "bg-zinc-900/50"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0px", 
          marginBottom: isOpen ? "16px" : "0px" 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-[var(--muted-foreground)]">{answer}</p>
      </motion.div>
    </motion.div>
  );
};