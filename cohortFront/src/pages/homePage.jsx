import React, { useState } from 'react';
import { MessageCircle, Users, Bot, Settings, User, Search, Plus, MoreVertical, Bell } from 'lucide-react';

export default function CommunityApp() {
  const [activeTab, setActiveTab] = useState('chats');

  const chats = [
    { id: 1, name: 'Design Team', message: 'Mockups look solid', time: '2m', unread: 3 },
    { id: 2, name: 'John Doe', message: 'Thanks!', time: '15m', unread: 0 },
    { id: 3, name: 'Project Alpha', message: 'Meeting at 3 PM', time: '1h', unread: 5 },
  ];

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <h1 className="text-lg font-semibold tracking-wide">Community</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-slate-800 rounded-lg"><Search size={18} /></button>
          <button className="p-2 hover:bg-slate-800 rounded-lg"><MoreVertical size={18} /></button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'chats' && (
          <div className="h-full flex flex-col">
            <div className="px-4 py-3 flex items-center justify-between">
              <h2 className="text-sm font-medium text-slate-400 uppercase">Chats</h2>
              <button className="p-2 hover:bg-slate-800 rounded-lg"><Plus size={16} /></button>
            </div>

            <div className="px-4 pb-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  placeholder="Search"
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-800 px-2">
              {chats.map(chat => (
                <div key={chat.id} className="px-4 py-3 hover:bg-slate-900 cursor-pointer flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-semibold flex-shrink-0">{chat.name.charAt(0)}</div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{chat.name}</p>
                    <p className="text-xs text-slate-500 truncate">{chat.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{chat.time}</span>
                    {chat.unread > 0 && (
                      <span className="min-w-[20px] h-5 px-1 rounded-full bg-indigo-600 text-xs flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="h-full flex flex-col items-center justify-center px-6 text-center">
            <Bot size={48} className="text-indigo-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2">AI Assistant</h2>
            <p className="text-sm text-slate-500 max-w-sm">
              Ask questions, summarize chats, or generate ideas instantly.
            </p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-2xl">👤</div>
              <div>
                <p className="font-semibold">Alex Johnson</p>
                <p className="text-sm text-slate-500">alex@email.com</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['Chats', 'Groups', 'Connections'].map((label, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                  <p className="text-xl font-semibold">{[24, 8, 156][i]}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="p-4 space-y-2">
            {[ 'Account', 'Notifications', 'Privacy' ].map((label, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800">
                <Settings size={18} className="text-slate-400" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="border-t border-slate-800 flex justify-around py-2">
        {[
          { id: 'chats', icon: MessageCircle },
          { id: 'ai', icon: Bot },
          { id: 'profile', icon: User },
          { id: 'settings', icon: Settings },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-2 rounded-lg ${activeTab === tab.id ? 'text-indigo-500 bg-slate-900' : 'text-slate-500 hover:bg-slate-900'}`}
          >
            <tab.icon size={20} />
          </button>
        ))}
      </nav>
    </div>
  );
}
