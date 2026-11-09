import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  ArrowLeftOutlined, 
  SearchOutlined, 
  CheckOutlined, 
  DownOutlined,
  CloseOutlined,
  ThunderboltOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

// --- LOCAL CUSTOM DROPDOWN COMPONENT ---
function CustomDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white border ${
          isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]' : 'border-gray-300'
        } rounded-md px-3 py-1.5 text-[11px] text-gray-700 outline-none transition-all text-left font-medium`}
      >
        <span className="truncate pr-4">{selectedOption.label}</span>
        <DownOutlined className={`text-[9px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto py-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-[11px] flex items-center justify-between transition-colors ${
                value === opt.value 
                  ? 'bg-[#FCF7F9] text-[#7A1849] font-bold' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {opt.label}
              {value === opt.value && <CheckOutlined className="text-[9px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Mock Data
const CANDIDATES = [
  { id: 1, name: 'Dr. Amélie Laurent', uni: 'Sorbonne Université', expertise: 'Environmental history · Colonial archives', avg: '16 days', active: '1 active', conflict: 'No conflict', availability: 'Available', color: 'green' },
  { id: 2, name: 'Prof. Kwame Mensah', uni: 'University of Ghana', expertise: 'Political ecology · African history', avg: '14 days', active: '2 active', conflict: 'No conflict', availability: 'Available', color: 'green' },
  { id: 3, name: 'Dr. Clara West', uni: 'University of Bristol', expertise: 'Historical geography · GIS', avg: '21 days', active: '4 active', conflict: 'Institution match', availability: 'Limited', color: 'yellow' },
  { id: 4, name: 'Prof. Rina Mukherjee', uni: 'Jawaharlal Nehru University', expertise: 'Indian Ocean history · Archives', avg: '11 days', active: '0 active', conflict: 'No conflict', availability: 'Available', color: 'green' },
  { id: 5, name: 'Dr. Thomas Greene', uni: 'McGill University', expertise: 'Water governance · History of science', avg: '18 days', active: '3 active', conflict: 'Prior co-author', availability: 'Unavailable', color: 'red' },
];

export default function FindAndAssign() {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState([1, 2]);
  const [priority, setPriority] = useState('Standard');
  const [reviewModel, setReviewModel] = useState('double');
  
  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'text-[#52C41A]';
      case 'Limited': return 'text-[#FA8C16]';
      case 'Unavailable': return 'text-[#F5222D]';
      default: return 'text-gray-500';
    }
  };

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1250px] mx-auto pb-10">
        
        {/* --- TOP BREADCRUMB --- */}
        <button 
          onClick={() => navigate('/ebook/editorial/reviewers')}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-[#7A1849] transition-colors mb-4"
        >
          <ArrowLeftOutlined className="text-[10px]" /> Back to reviewer responses
        </button>

        {/* --- HERO HEADER CARD --- */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4 relative">
          <div className="absolute top-5 right-5">
            <span className="inline-block px-2.5 py-0.5 bg-[#FFF8E6] text-[#D48806] text-[10px] font-bold rounded-md">
              1 replacement needed
            </span>
          </div>
          
          <p className="text-[10px] font-bold text-[#7A1849] tracking-wide mb-1">EBOOK EBK-2026-178</p>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight mb-1.5">
            Sovereign Ecologies: Land, Law, and Conservation after Empire
          </h1>
          <p className="text-[12px] font-medium text-gray-600 mb-2">
            Dr. Mateo Silva · Environment & political ecology
          </p>
          <p className="text-[12px] text-gray-500 leading-relaxed max-w-4xl">
            This book examines the legal and ecological afterlives of conservation regimes across Southern Africa and the Indian Ocean, combining environmental history with political ecology and archival methods...
          </p>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN (Candidates) */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col h-[650px]">
            
            {/* Header & Filters */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[14px] font-bold text-gray-900">Search & invite candidates</h2>
              <span className="text-[10px] text-gray-400">{selectedIds.length} selected</span>
            </div>
            
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]" />
                <input 
                  type="text" 
                  placeholder="Search name, expertise, institution..." 
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded-md text-[11px] outline-none focus:border-[#7A1849] transition-all" 
                />
              </div>
              <button className="px-3 py-1.5 border border-gray-300 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-1.5">
                <AppstoreOutlined className="text-[11px]" /> Expertise
              </button>
              <button className="px-3 py-1.5 border border-gray-300 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-1.5">
                Available
              </button>
            </div>

            <div className="bg-[#FCF7F9] border border-[#F0E1E7] rounded-md p-2 flex items-center gap-2 mb-3">
              <ThunderboltOutlined className="text-[#7A1849] text-[12px]" />
              <span className="text-[10px] text-[#7A1849] font-medium">Ranked by expertise match, availability, conflicts, and recent review load.</span>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {CANDIDATES.map((candidate) => {
                const isSelected = selectedIds.includes(candidate.id);
                return (
                  <div 
                    key={candidate.id}
                    onClick={() => toggleSelect(candidate.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                      isSelected ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-sm mt-0.5 flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-[#7A1849] border-[#7A1849]' : 'bg-white border-gray-300'
                      }`}>
                        {isSelected && <CheckOutlined className="text-white text-[9px] font-bold" />}
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-gray-900">{candidate.name}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{candidate.uni}</p>
                        <p className="text-[10px] text-gray-500">{candidate.expertise}</p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <div className="flex justify-end gap-4 text-[10px] text-gray-500 mb-1">
                        <div className="text-right">
                          <p className="font-medium">Avg. {candidate.avg}</p>
                          <p>{candidate.active}</p>
                          <p className={candidate.conflict === 'No conflict' ? 'text-gray-500' : 'text-[#F5222D]'}>{candidate.conflict}</p>
                        </div>
                        <div className={`w-[70px] text-right font-bold mt-4 ${getStatusColor(candidate.availability)}`}>
                          {candidate.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN (Parameters) */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4 h-[650px] overflow-y-auto">
            <h2 className="text-[14px] font-bold text-gray-900">Assignment parameters</h2>
            
            {/* Selected Reviewers */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-2">Selected reviewers</p>
              <div className="space-y-1.5">
                {selectedIds.includes(1) && (
                  <div className="flex items-center justify-between bg-[#FCF7F9] border border-[#F0E1E7] px-2.5 py-1.5 rounded text-[11px] font-bold text-[#7A1849]">
                    Dr. Amélie Laurent
                    <button onClick={(e) => { e.stopPropagation(); toggleSelect(1); }} className="text-[#7A1849] hover:text-red-500">
                      <CloseOutlined className="text-[10px]" />
                    </button>
                  </div>
                )}
                {selectedIds.includes(2) && (
                  <div className="flex items-center justify-between bg-[#FCF7F9] border border-[#F0E1E7] px-2.5 py-1.5 rounded text-[11px] font-bold text-[#7A1849]">
                    Prof. Kwame Mensah
                    <button onClick={(e) => { e.stopPropagation(); toggleSelect(2); }} className="text-[#7A1849] hover:text-red-500">
                      <CloseOutlined className="text-[10px]" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Review Due Date */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-1.5">Review due date</p>
              <input 
                type="text" 
                defaultValue="26 October 2026"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-[11px] outline-none focus:border-[#7A1849]"
              />
            </div>

            {/* Priority */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-1.5">Priority</p>
              <div className="flex gap-2">
                <button onClick={() => setPriority('Standard')} className={`flex-1 py-1.5 rounded-md text-[10px] font-bold border transition-colors ${priority === 'Standard' ? 'bg-[#7A1849] text-white border-[#7A1849]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>Standard</button>
                <button onClick={() => setPriority('High')} className={`flex-1 py-1.5 rounded-md text-[10px] font-bold border transition-colors ${priority === 'High' ? 'bg-[#7A1849] text-white border-[#7A1849]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>High</button>
                <button onClick={() => setPriority('Critical')} className={`flex-1 py-1.5 rounded-md text-[10px] font-bold border transition-colors ${priority === 'Critical' ? 'bg-[#7A1849] text-white border-[#7A1849]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>Critical</button>
              </div>
            </div>

            {/* Invitation Note */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 mb-1.5">Invitation note</p>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 text-[11px] outline-none focus:border-[#7A1849] min-h-[90px] resize-none text-gray-700 leading-relaxed" 
                defaultValue="Please focus on the manuscript's use of conservation archives and its comparative framing across postcolonial jurisdictions."
              ></textarea>
            </div>

            {/* Review Model Dropdown */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Review model</span>
              <div className="w-[140px]">
                <CustomDropdown 
                  options={[
                    { label: 'Double-anonymous', value: 'double' },
                    { label: 'Single-anonymous', value: 'single' },
                    { label: 'Open review', value: 'open' }
                  ]}
                  value={reviewModel}
                  onChange={setReviewModel}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2">
              <button className="w-full py-2 bg-[#7A1849] hover:bg-[#531324] text-white rounded-md text-[12px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm mb-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Send invitations
              </button>
              <button className="w-full py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-[12px] font-bold transition-colors">
                Save draft
              </button>
            </div>
            
            <p className="text-[9px] text-gray-400 text-center leading-snug pt-1">
              Reviewer identities and internal notes are never shared with the author.
            </p>
          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}