"use client";

import { motion } from "framer-motion";

export default function BioContent() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="prose prose-lg lg:prose-xl prose-stone max-w-none"
                >
                    <p className="font-display text-2xl lg:text-3xl text-primary-dark font-medium leading-relaxed mb-12">
                        Irene Muchemi-Ndiritu is a Kenyan-born writer whose work explores the intricate intersections of identity, displacement, and the immigrant experience.
                    </p>

                    <div className="space-y-8 font-sans text-slate-700 leading-relaxed">
                        <p>
                            Born and raised in Nairobi, Kenya, Irene’s journey as a storyteller began in the heart of East Africa before leading her across the Atlantic. In 1998, she moved to the United States to pursue her higher education, a transition that would later serve as a deep well of inspiration for her fiction.
                        </p>

                        <p>
                            With a career rooted in both journalism and creative writing, Irene brings a unique precision and emotional depth to her narratives. She holds an MA in Journalism from Columbia University’s Graduate School of Journalism and an MFA in Creative Writing from the University of Cape Town, where she graduated with distinction. Her time as a journalist in New York City, Washington D.C., and Boston provided her with a front-row seat to the American experience, which she masterfully weaves into her prose.
                        </p>

                        <p>
                            Her debut novel, <strong>Lucky Girl</strong>, has been hailed as a poignant and powerful coming-of-age story. Centered on Soila, a young woman navigating the expectations of her conservative Kenyan upbringing and the complexities of life in America, the novel captures the universal search for belonging.
                        </p>

                        <p>
                            Irene’s shorter fictional works have appeared in prestigious publications such as <em>The Yale Review</em> and <em>Adda</em>. Her talent has been recognized on international stages, including being shortlisted for the Commonwealth Short Story Prize.
                        </p>

                        <p>
                            Today, Irene lives in Cape Town, South Africa, where she continues to write and find inspiration in the vibrant cultures that have shaped her life across three continents. Through her stories, she continues to bridge the gap between Africa and the West, offering readers a window into the diverse and evolving African diaspora.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
