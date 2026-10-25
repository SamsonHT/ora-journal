import React from 'react';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';
import { CheckCircleFilled } from '@ant-design/icons';

export default function AuthorGuide() {
  const steps = [
    { title: '1. Prepare your manuscript', desc: 'Ensure your manuscript is complete, formatted according to our guidelines, and includes all necessary figures, tables, and references.' },
    { title: '2. Submit a proposal', desc: 'Fill out our online proposal form. We require a detailed synopsis, table of contents, sample chapter, and author CVs.' },
    { title: '3. Peer review', desc: 'Your proposal will be reviewed by our editorial board and external peer reviewers. This process typically takes 4-6 weeks.' },
    { title: '4. Editorial development', desc: 'Once accepted, you will work closely with our editors to refine your manuscript, address reviewer comments, and prepare the final draft.' },
    { title: '5. Production', desc: 'Our team handles copyediting, typesetting, and the creation of accessible EPUB and PDF files.' },
    { title: '6. Publication', desc: 'Your book is published open access, assigned a DOI, and made freely available to readers worldwide.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      <section className="bg-[#FAF9F6] py-16 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Author Guidelines</h1>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about publishing your book with ORA eBooks.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1000px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-[18px] font-bold text-[#7A1849] mb-3">{step.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FCF7F9] p-10 rounded-3xl border border-[#7A1849]/10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Manuscript Requirements</h2>
          <ul className="space-y-3 text-[14px] text-gray-700">
            <li className="flex items-center gap-3"><CheckCircleFilled className="text-green-500" /> Word count: 60,000 - 120,000 words (depending on discipline).</li>
            <li className="flex items-center gap-3"><CheckCircleFilled className="text-green-500" /> File format: Microsoft Word (.docx) or LaTeX.</li>
            <li className="flex items-center gap-3"><CheckCircleFilled className="text-green-500" /> Images: High-resolution (300 dpi minimum), provided separately.</li>
            <li className="flex items-center gap-3"><CheckCircleFilled className="text-green-500" /> Referencing: APA, MLA, or Chicago style, applied consistently.</li>
            <li className="flex items-center gap-3"><CheckCircleFilled className="text-green-500" /> Originality: The work must be original and not under consideration elsewhere.</li>
          </ul>
        </div>
      </section>

      <EbookFooter />
    </div>
  );
}