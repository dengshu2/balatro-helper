import { useState, useEffect } from 'react';
import './index.css';

interface Joker {
  nr: number;
  id: string;
  name_cn: string;
  name_en: string;
  effect: string;
  cost: number | null;
  rarity: string;
  unlock: string;
  type: string;
  type_cn: string;
  activation: string;
  tier: string;
  score: number | null;
  expert_review: string;
}

const getImageUrl = (nameEn: string) => {
  const formatted = nameEn.replace(/ /g, '_');
  return `https://balatrowiki.org/images/${encodeURIComponent(formatted)}.png`;
};

function App() {
  const [jokers, setJokers] = useState<Joker[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRole, setActiveRole] = useState('全部');

  useEffect(() => {
    const files = [
      'jokers_additive_mult.json',
      'jokers_chips.json',
      'jokers_multiplicative_mult.json',
      'jokers_economy.json',
      'jokers_retrigger.json',
      'jokers_effect.json',
    ];
    Promise.all(files.map(f => fetch(`/data/${f}`).then(r => r.json())))
      .then(results => {
        const all = results.flatMap(r => r.jokers).sort((a, b) => a.nr - b.nr);
        setJokers(all);
      })
      .catch(err => console.error("Error loading jokers:", err));
  }, []);

  const roles = ['全部', '倍率丑（加算）', '筹码丑', '倍率丑（乘算）', '经济丑', '复用卡牌', '功能丑'];

  const filteredJokers = jokers.filter(joker => {
    const matchesSearch = 
      joker.name_cn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      joker.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (joker.type_cn && joker.type_cn.includes(searchTerm));
      
    const matchesRole = activeRole === '全部' || joker.type_cn === activeRole;
    return matchesSearch && matchesRole;
  });

  const tiersList = ['S', 'A', 'B', 'C', 'D'];
  const groupedJokers = tiersList.map(tier => ({
    tier,
    items: filteredJokers
      .filter(j => j.tier === tier)
      .sort((a, b) => (b.score ?? 0) - (a.score ?? 0)) 
  })).filter(group => group.items.length > 0);

  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">Balatro Jokers</h1>
        <p className="subtitle">Curated Tier List & Decision Helper</p>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          className="search-box"
          placeholder="搜索卡牌，例如 '乘算' 或 '蓝图' ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="role-tabs">
          {roles.map(role => (
            <button
              key={role}
              className={`role-tab ${activeRole === role ? 'active' : ''}`}
              onClick={() => setActiveRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {groupedJokers.length === 0 ? (
         <div style={{ marginTop: '4rem', color: 'var(--text-secondary)' }}>
           暂无匹配的小丑牌，请尝试更换搜索词或定位标签。
         </div>
      ) : (
        groupedJokers.map(group => (
          <section key={group.tier} className="tier-section">
            <div className="tier-header">
              <h2 className={`tier-title text-tier-${group.tier}`}>
                Tier {group.tier}
              </h2>
              <span className="tier-count">{group.items.length} cards</span>
            </div>
            
            <div className="cards-grid">
              {group.items.map(joker => (
                <article key={joker.id} className="card">
                  <div className="card-top">
                    <div className="card-image-wrapper">
                      <img 
                        src={getImageUrl(joker.name_en)} 
                        alt={joker.name_en} 
                        className="card-image"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div className="card-header">
                      <h3 className="card-title">{joker.name_cn}</h3>
                      <div className="card-title-en">{joker.name_en}</div>
                      <div className="meta-tags">
                        <span className="tag-score">{(joker.score ?? 0).toFixed(1)}</span>
                        {joker.type_cn && <span className="tag-role">{joker.type_cn}</span>}
                        <span className="tag-category">{joker.rarity}</span>
                      </div>
                    </div>
                  </div>

                  <p className="card-desc">
                    {joker.effect}
                  </p>

                  <div className="card-review">
                    <p>"{joker.expert_review}"</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

export default App;
