import React, { useState } from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('directory');
  const [formData, setFormData] = useState({ name: '', email: '', expertise: '' });

  const directors = [
    { id: 1, name: 'Pawan Singh', role: 'Financial & Corporate Governance Expert', bio: 'Experienced director specializing in international risk management and strategic scaling.' },
    { id: 2, name: 'Dr. Anita Sharma', role: 'Technology & Digital Transformation', bio: 'Expert in guiding corporate boards through cybersecurity, AI integration, and digital roadmaps.' },
    { id: 3, name: 'Robert Chen', role: 'ESG & Sustainability Leader', bio: 'Advising global corporations on sustainable growth, ESG compliance, and board governance.' }
  ];

  const filteredDirectors = directors.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">Global Independent Directors Data Bank</h1>
          <nav className="space-x-4">
            <button 
              onClick={() => setActiveTab('directory')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'directory' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-blue-900'}`}
            >
              Directory
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Register as Director
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Connecting Elite Leadership Worldwide</h2>
          <p className="text-lg text-blue-200 mb-8">The premier platform linking qualified independent directors with forward-thinking boards and corporations.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'directory' ? (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Director Directory</h3>
              <p className="text-gray-600 mb-6">Search and browse verified professionals ready for board service.</p>
              
              <div className="max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Search by name or expertise..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredDirectors.map((director) => (
                <div key={director.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg text-gray-900">{director.name}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">{director.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{director.bio}</p>
                  <button className="w-full bg-gray-100 text-blue-900 font-semibold py-2 rounded-lg hover:bg-blue-50 text-sm">
                    View Full Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Director Registration Portal</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Registration submitted successfully!'); setActiveTab('directory'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Expertise</label>
                <input 
                  type="text" 
                  required 
                  value={formData.expertise}
                  onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="e.g., Corporate Finance, AI Governance"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                Submit Profile
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-6 text-center text-sm border-t border-blue-900">
        <p>&copy; 2026 Global Independent Directors Data Bank. All rights reserved.</p>
      </footer>
    </div>
  );
          }

