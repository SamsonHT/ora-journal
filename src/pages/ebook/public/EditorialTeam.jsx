import React from 'react';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';

export default function EditorialTeam() {
  const team = [
    { name: 'Dr. Amina Hassan', role: 'Editor-in-Chief', bio: 'Professor of African History with a focus on oral traditions and digital archiving.' },
    { name: 'Prof. James Ouma', role: 'Managing Editor', bio: 'Specialises in editorial development and open access publishing workflows.' },
    { name: 'Dr. Sara Bekele', role: 'Associate Editor (Humanities)', bio: 'Researcher in literature and cultural studies, focusing on Afaan Oromo texts.' },
    { name: 'Dr. Tewodros Alemu', role: 'Associate Editor (Social Sciences)', bio: 'Political scientist researching digital governance and civic participation.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      <section className="bg-[#FAF9F6] py-16 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Editorial Team</h1>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
            Meet the scholars and professionals who guide our publishing program.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1000px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#FCF7F9] rounded-full mb-4 flex items-center justify-center text-[#7A1849] text-3xl font-serif font-bold border-2 border-[#7A1849]/20">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-[18px] font-bold text-gray-900">{member.name}</h3>
              <p className="text-[12px] font-bold text-[#7A1849] uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-[13px] text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <EbookFooter />
    </div>
  );
}