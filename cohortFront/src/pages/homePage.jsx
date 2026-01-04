import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(40);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="home-page">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <h1 className="app-logo">cohort</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-center">
            {['chats', 'ai', 'communities', 'updates', 'events'].map(tab => (
              <button 
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="nav-right">
            <button 
              className="icon-btn"
              onMouseEnter={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <Search size={20} />
            </button>
            <button 
              className="icon-btn"
              onMouseEnter={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <Bell size={20} />
            </button>
            <button 
              className="profile-btn"
              onMouseEnter={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <User size={18} />
              <span>profile</span>
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {['chats', 'ai', 'communities', 'updates', 'events'].map(tab => (
            <button 
              key={tab}
              className={`mobile-nav-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Chats Section */}
        {activeTab === 'chats' && (
          <div className="section-content">
            <div className="section-header">
              <h2>chats</h2>
              <button 
                className="action-btn"
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                new chat
              </button>
            </div>

            <div className="search-bar">
              <input 
                type="text" 
                placeholder="search conversations..."
                className="search-input"
              />
            </div>

            <div className="chat-list">
              {[
                { name: 'sarah chen', message: 'sounds good!', time: '2m', unread: 3, online: true },
                { name: 'design team', message: 'alex: the mockups are ready', time: '15m', unread: 0, online: false },
                { name: 'mike ross', message: 'let\'s schedule a call', time: '1h', unread: 1, online: true },
                { name: 'project alpha', message: 'meeting at 3pm', time: '2h', unread: 5, online: false },
                { name: 'emma wilson', message: 'thanks for the update', time: '3h', unread: 0, online: true },
                { name: 'dev team', message: 'john: pushed the latest changes', time: '5h', unread: 2, online: false },
                { name: 'lisa anderson', message: 'can you review this?', time: '1d', unread: 0, online: false },
                { name: 'startup club', message: 'sarah: excited for tomorrow!', time: '1d', unread: 8, online: false }
              ].map((chat, index) => (
                <div 
                  key={index} 
                  className="chat-item"
                  onMouseEnter={() => setCursorSize(70)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  <div className="chat-avatar">
                    {chat.name.charAt(0).toUpperCase()}
                    {chat.online && <span className="online-dot"></span>}
                  </div>
                  <div className="chat-info">
                    <div className="chat-top">
                      <h3>{chat.name}</h3>
                      <span className="chat-time">{chat.time}</span>
                    </div>
                    <div className="chat-bottom">
                      <p className="chat-message">{chat.message}</p>
                      {chat.unread > 0 && (
                        <span className="unread-badge">{chat.unread}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Section */}
        {activeTab === 'ai' && (
          <div className="section-content">
            <div className="section-header">
              <h2>ai assistant</h2>
            </div>

            <div className="ai-container">
              <div className="ai-messages">
                <div className="ai-welcome">
                  <h3>how can i help you today?</h3>
                  <p>translate, summarize, suggest, or ask anything</p>
                </div>
              </div>

              <div className="ai-quick-actions">
                {['translate messages', 'summarize chats', 'suggest replies', 'moderate content'].map((action, i) => (
                  <button 
                    key={i}
                    className="quick-action-btn"
                    onMouseEnter={() => setCursorSize(60)}
                    onMouseLeave={() => setCursorSize(40)}
                  >
                    <span className="action-label">{action}</span>
                  </button>
                ))}
              </div>

              <div className="ai-input-area">
                <input 
                  type="text" 
                  placeholder="ask ai anything..."
                  className="ai-input"
                />
                <button 
                  className="send-btn"
                  onMouseEnter={() => setCursorSize(60)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Communities Section */}
        {activeTab === 'communities' && (
          <div className="section-content">
            <div className="section-header">
              <h2>communities</h2>
              <button 
                className="action-btn"
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                create
              </button>
            </div>

            <div className="search-bar">
              <input 
                type="text" 
                placeholder="search communities..."
                className="search-input"
              />
            </div>

            <div className="communities-grid">
              {[
                { name: 'design hub', members: 234, category: 'design', active: true },
                { name: 'tech talk', members: 567, category: 'technology', active: true },
                { name: 'startup club', members: 189, category: 'business', active: false },
                { name: 'creative minds', members: 423, category: 'art', active: true },
                { name: 'dev community', members: 789, category: 'coding', active: false },
                { name: 'marketing pro', members: 345, category: 'marketing', active: true },
                { name: 'fitness squad', members: 512, category: 'health', active: true },
                { name: 'music makers', members: 298, category: 'music', active: false }
              ].map((community, index) => (
                <div 
                  key={index} 
                  className="community-card"
                  onMouseEnter={() => setCursorSize(70)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  <div className="community-header">
                    <div className="community-avatar-large">
                      {community.name.charAt(0).toUpperCase()}
                    </div>
                    {community.active && <span className="active-badge">active</span>}
                  </div>
                  <h3>{community.name}</h3>
                  <p className="community-category">{community.category}</p>
                  <p className="community-members">{community.members} members</p>
                  <button 
                    className="join-btn"
                    onMouseEnter={() => setCursorSize(60)}
                    onMouseLeave={() => setCursorSize(40)}
                  >
                    join
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Updates Section */}
        {activeTab === 'updates' && (
          <div className="section-content">
            <div className="section-header">
              <h2>updates</h2>
              <button 
                className="action-btn"
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                share
              </button>
            </div>

            <div className="updates-stories">
              <div 
                className="story-item add-story"
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                <div className="story-ring">
                  <div className="story-content">
                    <span>+</span>
                  </div>
                </div>
                <span>your update</span>
              </div>

              {[
                { name: 'sarah', time: '2h', hasLocation: true, viewed: false },
                { name: 'mike', time: '4h', hasLocation: false, viewed: false },
                { name: 'emma', time: '6h', hasLocation: true, viewed: false },
                { name: 'john', time: '8h', hasLocation: false, viewed: true },
                { name: 'lisa', time: '10h', hasLocation: true, viewed: true },
                { name: 'alex', time: '12h', hasLocation: false, viewed: true }
              ].map((story, index) => (
                <div 
                  key={index} 
                  className="story-item"
                  onMouseEnter={() => setCursorSize(60)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  <div className={`story-ring ${story.viewed ? 'viewed' : 'active'}`}>
                    <div className="story-content">
                      {story.name.charAt(0).toUpperCase()}
                      {story.hasLocation && <span className="location-pin">📍</span>}
                    </div>
                  </div>
                  <span>{story.name}</span>
                  <span className="story-time">{story.time}</span>
                </div>
              ))}
            </div>

            <div className="location-section">
              <div className="section-subheader">
                <h3>friends nearby</h3>
                <button 
                  className="map-btn"
                  onMouseEnter={() => setCursorSize(60)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  view map
                </button>
              </div>
              <div className="map-container">
                <div className="map-placeholder">
                  <p>map showing friend locations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Section */}
        {activeTab === 'events' && (
          <div className="section-content">
            <div className="section-header">
              <h2>events</h2>
              <button 
                className="action-btn"
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                create
              </button>
            </div>

            <div className="events-tabs">
              <button className="event-tab active">upcoming</button>
              <button className="event-tab">past</button>
              <button className="event-tab">my events</button>
            </div>

            <div className="events-list">
              {[
                { title: 'design workshop', community: 'design hub', date: 'mar 15', time: '3:00 pm', attendees: 45, location: 'online' },
                { title: 'tech meetup', community: 'tech talk', date: 'mar 18', time: '6:00 pm', attendees: 78, location: 'san francisco' },
                { title: 'startup pitch night', community: 'startup club', date: 'mar 20', time: '7:00 pm', attendees: 92, location: 'new york' },
                { title: 'creative session', community: 'creative minds', date: 'mar 22', time: '4:00 pm', attendees: 34, location: 'online' },
                { title: 'code review session', community: 'dev community', date: 'mar 25', time: '5:00 pm', attendees: 56, location: 'online' }
              ].map((event, index) => (
                <div 
                  key={index} 
                  className="event-card"
                  onMouseEnter={() => setCursorSize(70)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  <div className="event-date-badge">
                    <span className="date-day">{event.date.split(' ')[1]}</span>
                    <span className="date-month">{event.date.split(' ')[0]}</span>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p className="event-community">{event.community}</p>
                    <div className="event-meta">
                      <span>{event.time}</span>
                      <span>·</span>
                      <span>{event.location}</span>
                      <span className="hide-mobile">·</span>
                      <span className="hide-mobile">{event.attendees} attending</span>
                    </div>
                  </div>
                  <button 
                    className="event-join-btn"
                    onMouseEnter={() => setCursorSize(60)}
                    onMouseLeave={() => setCursorSize(40)}
                  >
                    join
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`
        }}
      >
        <div className="cursor-dot" />
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #000000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          color: white;
          cursor: none;
        }

        /* ============================================
           NAVBAR - COMPLETELY REDESIGNED
           ============================================ */
        .top-nav {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          max-width: 1600px;
          margin: 0 auto;
          gap: 24px;
        }

        .nav-left {
          flex-shrink: 0;
        }

        .app-logo {
          font-size: 1.5rem;
          font-weight: 710;
          color: white;
          letter-spacing: -0.04em;
          text-transform: lowercase;
          font-family:'Syne', sans-serif;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .app-logo::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fff, #888);
          transition: width 0.4s ease;
        }

        .app-logo:hover::after {
          width: 100%;
        }

        .app-logo:hover {
          transform: scale(1.08) translateY(-1px);
          filter: brightness(1.2);
        }

        /* Desktop Navigation Tabs Container */
        .nav-center {
          display: none;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          padding: 6px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .nav-tab {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-transform: lowercase;
          cursor: pointer;
          padding: 11px 22px;
          border-radius: 22px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .nav-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .nav-tab:hover::before {
          opacity: 1;
        }

        .nav-tab:hover {
          color: rgba(255, 255, 255, 0.85);
          transform: translateY(-1px);
        }

        .nav-tab.active {
          color: white;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 2px 16px rgba(255, 255, 255, 0.15),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
          transform: translateY(0);
        }

        .nav-right {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-shrink: 0;
        }

        .icon-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 11px;
          border-radius: 14px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: none;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
        }

        .profile-btn {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          padding: 11px 20px;
          border-radius: 18px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: none;
          align-items: center;
          gap: 9px;
          text-transform: lowercase;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
        }

        .profile-btn:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 
            0 6px 24px rgba(255, 255, 255, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .mobile-menu-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          cursor: pointer;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          transition: all 0.35s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: scale(1.05);
        }

        /* Mobile Menu Dropdown */
        .mobile-nav-menu {
          max-height: 0;
          overflow: hidden;
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-menu.open {
          max-height: 500px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
        }

        .mobile-nav-item {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.0625rem;
          font-weight: 700;
          text-transform: lowercase;
          cursor: pointer;
          padding: 20px 24px;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.35s ease;
          width: 100%;
          display: block;
          position: relative;
        }

        .mobile-nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), transparent);
          transition: width 0.35s ease;
        }

        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.06);
          color: white;
          padding-left: 36px;
        }

        .mobile-nav-item:hover::before {
          width: 4px;
        }

        .mobile-nav-item.active {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          border-left: 4px solid white;
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.1);
        }

        /* ============================================
           MAIN CONTENT
           ============================================ */
        .main-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          background: #000000;
        }

        .main-content::-webkit-scrollbar {
          width: 10px;
        }

        .main-content::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        .main-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 5px;
        }

        .main-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .section-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.03em;
          text-transform: lowercase;
        }

        .action-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 10px 22px;
          border-radius: 16px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
        }

        /* Search Bar */
        .search-bar {
          margin-bottom: 24px;
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 0.9375rem;
          padding: 14px 18px;
          border-radius: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
          text-transform: lowercase;
        }

        .search-input:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
        }

        /* Chats */
        .chat-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .chat-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .chat-avatar {
          position: relative;
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
          border: 2px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          font-weight: 700;
          color: white;
        }

        .online-dot {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #000000;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0); }
        }

        .chat-info {
          flex: 1;
          min-width: 0;
        }

        .chat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .chat-info h3 {
          font-size: 0.9375rem;
          font-weight: 600;
          color: white;
          text-transform: lowercase;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .chat-time {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          white-space: nowrap;
          margin-left: 12px;
        }

        .chat-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .chat-message {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: lowercase;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .unread-badge {
          min-width: 22px;
          height: 22px;
          background: white;
          color: #000000;
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 0 7px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* AI Section */
        .ai-container {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 280px);
        }

        .ai-messages {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }

        .ai-welcome {
          text-align: center;
          padding: 24px;
        }

        .ai-welcome h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
          text-transform: lowercase;
          letter-spacing: -0.02em;
        }

        .ai-welcome p {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: lowercase;
        }

        .ai-quick-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }

        .quick-action-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          padding: 18px 20px;
          border-radius: 14px;
          transition: all 0.3s ease;
          text-align: left;
        }

        .quick-action-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .action-label {
          text-transform: lowercase;
        }

        .ai-input-area {
          display: flex;
          gap: 12px;
        }

        .ai-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 0.9375rem;
          padding: 14px 20px;
          border-radius: 20px;
          outline: none;
          transition: all 0.3s ease;
        }

        .ai-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
          text-transform: lowercase;
        }

        .ai-input:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
        }

        .send-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 14px 28px;
          border-radius: 20px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .send-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        /* Communities */
        .communities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 14px;
        }

        .community-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .community-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .community-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .community-avatar-large {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
        }

        .active-badge {
          background: rgba(34, 197, 94, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.4);
          color: #22c55e;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: lowercase;
          padding: 4px 8px;
          border-radius: 10px;
        }

        .community-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 5px;
          text-transform: lowercase;
        }

        .community-category {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 8px;
          text-transform: lowercase;
        }

        .community-members {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 14px;
          text-transform: lowercase;
        }

        .join-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 10px 16px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .join-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }

        /* Updates */
        .updates-stories {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding-bottom: 16px;
          margin-bottom: 36px;
        }

        .updates-stories::-webkit-scrollbar {
          height: 6px;
        }

        .updates-stories::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 3px;
        }

        .updates-stories::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .story-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          min-width: 72px;
        }

        .story-ring {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          padding: 3px;
          background: transparent;
          transition: transform 0.3s ease;
        }

        .story-item:hover .story-ring {
          transform: scale(1.1);
        }

        .story-ring.active {
          background: linear-gradient(135deg, #f15a22, #ec4899);
        }

        .story-ring.viewed {
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .add-story .story-ring {
          border: 2px dashed rgba(255, 255, 255, 0.2);
        }

        .story-content {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0a0a0a;
          border: 3px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          position: relative;
        }

        .add-story .story-content span {
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.3);
        }

        .location-pin {
          position: absolute;
          bottom: -2px;
          right: -2px;
          font-size: 0.875rem;
        }

        .story-item > span {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: lowercase;
          text-align: center;
          font-weight: 500;
        }

        .story-time {
          font-size: 0.6875rem !important;
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .location-section {
          margin-top: 36px;
        }

        .section-subheader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .section-subheader h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          text-transform: lowercase;
          letter-spacing: -0.02em;
        }

        .map-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 10px 20px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .map-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .map-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          overflow: hidden;
        }

        .map-placeholder {
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-placeholder p {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.3);
          text-transform: lowercase;
        }

        /* Events */
        .events-tabs {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow-x: auto;
        }

        .event-tab {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9375rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 12px 0;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .event-tab:hover {
          color: rgba(255, 255, 255, 0.7);
        }

        .event-tab.active {
          color: white;
          border-bottom-color: white;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .event-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .event-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
        }

        .event-date-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 56px;
          padding: 12px;
          background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        .date-day {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .date-month {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
          font-weight: 600;
        }

        .event-details {
          flex: 1;
          min-width: 0;
        }

        .event-details h3 {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 4px;
          text-transform: lowercase;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .event-community {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 6px;
          text-transform: lowercase;
        }

        .event-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: lowercase;
          flex-wrap: wrap;
        }

        .event-join-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: lowercase;
          cursor: pointer;
          padding: 10px 24px;
          border-radius: 16px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .event-join-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                      height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          mix-blend-mode: difference;
        }

        .cursor-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }

        .hide-mobile {
          display: none;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */
        
        /* Tablet (768px and up) */
        @media (min-width: 768px) {
          .nav-container {
            padding: 20px 40px;
          }

          .nav-center {
            display: flex;
          }

          .icon-btn {
            display: flex;
          }

          .profile-btn {
            display: flex;
          }

          .mobile-menu-btn {
            display: none;
          }

          .main-content {
            padding: 40px;
          }

          .section-header h2 {
            font-size: 2.25rem;
          }

          .communities-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
          }

          .map-placeholder {
            height: 300px;
          }

          .hide-mobile {
            display: inline;
          }
        }

        /* Desktop (1024px and up) */
        @media (min-width: 1024px) {
          .nav-container {
            padding: 20px 60px;
          }

          .main-content {
            padding: 48px 60px;
          }

          .communities-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .nav-container {
            padding: 24px 80px;
          }

          .main-content {
            padding: 56px 80px;
          }
        }

        ::selection {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default HomePage;