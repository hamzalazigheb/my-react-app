import React, { useState, useEffect } from 'react';
import './CMS.css';

function CMS() {
  const [activeSection, setActiveSection] = useState('content');
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem('websiteContent');
    if (savedContent) {
      const parsedContent = JSON.parse(savedContent);
      if (!parsedContent.blogs) {
        parsedContent.blogs = [];
      }
      if (!parsedContent.pages) {
        parsedContent.pages = {};
      }
      return parsedContent;
    }
    return {
      home: {
        title: 'Bienvenue chez Azalée Patrimoine',
        description: 'Votre partenaire de confiance pour la gestion et l\'optimisation de votre patrimoine.'
      },
      expertises: {
        title: 'Nos Expertises',
        items: [
          { name: 'Conseil Stratégique', path: '/conseil-strategique' },
          { name: 'Gestion de Patrimoine', path: '/gestion-patrimoine' },
          { name: 'Optimisation Fiscale', path: '/optimisation-fiscale' }
        ]
      },
      solutions: {
        title: 'Nos Solutions',
        items: [
          { name: 'Investissement Immobilier', path: '/investissement-immobilier' },
          { name: 'Placements Financiers', path: '/placements-financiers' },
          { name: 'Protection Familiale', path: '/protection-familiale' }
        ]
      },
      blogs: [],
      pages: {
        'optimisation-fiscale': {
          title: 'Optimisation Fiscale',
          sections: [
            {
              id: 'header',
              title: 'En-tête',
              content: 'Optimisez votre situation fiscale avec nos experts'
            },
            {
              id: 'main',
              title: 'Contenu Principal',
              content: 'Découvrez nos solutions d\'optimisation fiscale...'
            }
          ]
        }
      }
    };
  });

  const [editingItem, setEditingItem] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [saveStatus, setSaveStatus] = useState('');
  const [editingBlog, setEditingBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [editingPage, setEditingPage] = useState(null);
  const [newPageSection, setNewPageSection] = useState({
    id: '',
    title: '',
    content: ''
  });

  useEffect(() => {
    localStorage.setItem('websiteContent', JSON.stringify(content));
    // Dispatch a custom event to notify other components about content changes
    window.dispatchEvent(new CustomEvent('contentUpdated', { detail: content }));
  }, [content]);

  const handleEdit = (section, field, index = null) => {
    let value;
    if (index !== null) {
      value = content[section].items[index].name;
    } else {
      value = content[section][field];
    }
    setEditingItem({ section, field, index });
    setEditedContent(value);
    setSaveStatus('');
  };

  const handleSave = () => {
    const newContent = { ...content };
    if (editingItem.index !== null) {
      newContent[editingItem.section].items[editingItem.index].name = editedContent;
    } else {
      newContent[editingItem.section][editingItem.field] = editedContent;
    }
    setContent(newContent);
    setEditingItem(null);
    setSaveStatus('Enregistré avec succès!');
    
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  const handleCancel = () => {
    setEditingItem(null);
    setSaveStatus('');
  };

  const handleBlogEdit = (blog) => {
    setEditingBlog(blog);
    setNewBlog({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      date: blog.date
    });
  };

  const handleBlogSave = () => {
    const newContent = { ...content };
    if (editingBlog) {
      // Update existing blog
      const index = newContent.blogs.findIndex(b => b.id === editingBlog.id);
      newContent.blogs[index] = {
        ...editingBlog,
        ...newBlog
      };
    } else {
      // Add new blog
      newContent.blogs.push({
        id: Date.now(),
        ...newBlog
      });
    }
    setContent(newContent);
    setEditingBlog(null);
    setNewBlog({
      title: '',
      content: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
    setSaveStatus('Blog enregistré avec succès!');
    
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  const handleBlogDelete = (blogId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce blog ?')) {
      const newContent = { ...content };
      newContent.blogs = newContent.blogs.filter(blog => blog.id !== blogId);
      setContent(newContent);
      setSaveStatus('Blog supprimé avec succès!');
      
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }
  };

  const handleBlogMove = (blogId, direction) => {
    const newContent = { ...content };
    const blogs = [...newContent.blogs];
    const index = blogs.findIndex(blog => blog.id === blogId);
    
    if (direction === 'up' && index > 0) {
      [blogs[index], blogs[index - 1]] = [blogs[index - 1], blogs[index]];
    } else if (direction === 'down' && index < blogs.length - 1) {
      [blogs[index], blogs[index + 1]] = [blogs[index + 1], blogs[index]];
    }
    
    newContent.blogs = blogs;
    setContent(newContent);
    setSaveStatus('Ordre des blogs mis à jour!');
    
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  const handlePageEdit = (pageId, sectionId) => {
    const page = content.pages[pageId];
    const section = page.sections.find(s => s.id === sectionId);
    setEditingItem({ type: 'page', pageId, sectionId });
    setEditedContent(section.content);
    setSaveStatus('');
  };

  const handlePageSave = () => {
    if (editingItem.type === 'page') {
      const newContent = { ...content };
      const page = newContent.pages[editingItem.pageId];
      const sectionIndex = page.sections.findIndex(s => s.id === editingItem.sectionId);
      page.sections[sectionIndex].content = editedContent;
      setContent(newContent);
      setEditingItem(null);
      setSaveStatus('Contenu de la page mis à jour!');
      
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }
  };

  const handleAddPageSection = (pageId) => {
    const newContent = { ...content };
    if (!newContent.pages[pageId]) {
      newContent.pages[pageId] = {
        title: pageId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        sections: []
      };
    }
    newContent.pages[pageId].sections.push({
      id: `section-${Date.now()}`,
      title: newPageSection.title,
      content: newPageSection.content
    });
    setContent(newContent);
    setNewPageSection({ id: '', title: '', content: '' });
    setSaveStatus('Nouvelle section ajoutée!');
    
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  const handleDeletePageSection = (pageId, sectionId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette section ?')) {
      const newContent = { ...content };
      newContent.pages[pageId].sections = newContent.pages[pageId].sections.filter(
        section => section.id !== sectionId
      );
      setContent(newContent);
      setSaveStatus('Section supprimée!');
      
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }
  };

  const handleEditPageSection = (pageId, sectionId, field, value) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const page = newContent.pages[pageId];
      const section = page.sections.find(s => s.id === sectionId);
      
      if (section) {
        if (field === 'content' && typeof value === 'object') {
          section.content = { ...section.content, ...value };
        } else {
          section[field] = value;
        }
      }
      
      return newContent;
    });
  };

  const handleEditService = (pageId, serviceId, field, value) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const page = newContent.pages[pageId];
      const servicesSection = page.sections.find(s => s.id === 'services');
      
      if (servicesSection) {
        const service = servicesSection.items.find(item => item.id === serviceId);
        if (service) {
          service[field] = value;
        }
      }
      
      return newContent;
    });
  };

  const handleAddService = (pageId) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const page = newContent.pages[pageId];
      const servicesSection = page.sections.find(s => s.id === 'services');
      
      if (servicesSection) {
        const newId = `service${servicesSection.items.length + 1}`;
        servicesSection.items.push({
          id: newId,
          title: 'Nouveau Service',
          content: 'Description du service...'
        });
      }
      
      return newContent;
    });
  };

  const handleDeleteService = (pageId, serviceId) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const page = newContent.pages[pageId];
      const servicesSection = page.sections.find(s => s.id === 'services');
      
      if (servicesSection) {
        servicesSection.items = servicesSection.items.filter(item => item.id !== serviceId);
      }
      
      return newContent;
    });
  };

  return (
    <div className="cms-container">
      <div className="cms-sidebar">
        <h2>CMS Panel</h2>
        <ul>
          <li 
            className={activeSection === 'content' ? 'active' : ''}
            onClick={() => setActiveSection('content')}
          >
            Contenu Principal
          </li>
          <li 
            className={activeSection === 'menu' ? 'active' : ''}
            onClick={() => setActiveSection('menu')}
          >
            Menu Navigation
          </li>
          <li 
            className={activeSection === 'blogs' ? 'active' : ''}
            onClick={() => setActiveSection('blogs')}
          >
            Gestion des Blogs
          </li>
          <li 
            className={activeSection === 'pages' ? 'active' : ''}
            onClick={() => setActiveSection('pages')}
          >
            Gestion des Pages
          </li>
        </ul>
      </div>

      <div className="cms-content">
        <h1>Gestion du Contenu</h1>
        {saveStatus && <div className="save-status">{saveStatus}</div>}
        
        {activeSection === 'content' && (
          <div className="content-section">
            <h2>Contenu Principal</h2>
            <div className="content-item">
              <label>Titre Principal</label>
              <div className="content-value">
                <span>{content.home.title}</span>
                <button onClick={() => handleEdit('home', 'title')}>Modifier</button>
              </div>
            </div>
            <div className="content-item">
              <label>Description</label>
              <div className="content-value">
                <span>{content.home.description}</span>
                <button onClick={() => handleEdit('home', 'description')}>Modifier</button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'menu' && (
          <div className="content-section">
            <h2>Menu Navigation</h2>
            
            <div className="menu-section">
              <h3>{content.expertises.title}</h3>
              {content.expertises.items.map((item, index) => (
                <div key={index} className="content-item">
                  <label>Item {index + 1}</label>
                  <div className="content-value">
                    <span>{item.name}</span>
                    <button onClick={() => handleEdit('expertises', 'items', index)}>Modifier</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-section">
              <h3>{content.solutions.title}</h3>
              {content.solutions.items.map((item, index) => (
                <div key={index} className="content-item">
                  <label>Item {index + 1}</label>
                  <div className="content-value">
                    <span>{item.name}</span>
                    <button onClick={() => handleEdit('solutions', 'items', index)}>Modifier</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'pages' && (
          <div className="pages-section">
            <h2>Gestion des Pages</h2>
            {Object.entries(content.pages).map(([pageId, page]) => (
              <div key={pageId} className="page-item">
                <h3>{page.title}</h3>
                {page.sections.map((section) => (
                  <div key={section.id} className="section-item">
                    <h4>{section.title}</h4>
                    {section.id === 'services' ? (
                      <div className="services-editor">
                        <div className="services-list">
                          {section.items.map((service) => (
                            <div key={service.id} className="service-item">
                              <input
                                type="text"
                                value={service.title}
                                onChange={(e) => handleEditService(pageId, service.id, 'title', e.target.value)}
                                placeholder="Titre du service"
                              />
                              <textarea
                                value={service.content}
                                onChange={(e) => handleEditService(pageId, service.id, 'content', e.target.value)}
                                placeholder="Description du service"
                              />
                              <button 
                                className="delete-button"
                                onClick={() => handleDeleteService(pageId, service.id)}
                              >
                                Supprimer
                              </button>
                            </div>
                          ))}
                        </div>
                        <button 
                          className="add-button"
                          onClick={() => handleAddService(pageId)}
                        >
                          Ajouter un service
                        </button>
                      </div>
                    ) : section.id === 'cta' ? (
                      <div className="cta-editor">
                        <input
                          type="text"
                          value={section.content.title}
                          onChange={(e) => handleEditPageSection(pageId, section.id, 'content', { title: e.target.value })}
                          placeholder="Titre CTA"
                        />
                        <input
                          type="text"
                          value={section.content.subtitle}
                          onChange={(e) => handleEditPageSection(pageId, section.id, 'content', { subtitle: e.target.value })}
                          placeholder="Sous-titre CTA"
                        />
                        <input
                          type="text"
                          value={section.content.buttonText}
                          onChange={(e) => handleEditPageSection(pageId, section.id, 'content', { buttonText: e.target.value })}
                          placeholder="Texte du bouton"
                        />
                      </div>
                    ) : (
                      <textarea
                        value={section.content}
                        onChange={(e) => handleEditPageSection(pageId, section.id, 'content', e.target.value)}
                        placeholder={`Contenu de ${section.title}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeSection === 'blogs' && (
          <div className="content-section">
            <h2>Gestion des Blogs</h2>
            <button 
              className="add-blog-button"
              onClick={() => setEditingBlog(null)}
            >
              Ajouter un nouveau blog
            </button>

            <div className="blogs-list">
              {content.blogs.map((blog, index) => (
                <div key={blog.id} className="blog-item">
                  <div className="blog-header">
                    <h3>{blog.title}</h3>
                    <div className="blog-actions">
                      <button 
                        onClick={() => handleBlogMove(blog.id, 'up')}
                        disabled={index === 0}
                        className="move-button"
                      >
                        ↑
                      </button>
                      <button 
                        onClick={() => handleBlogMove(blog.id, 'down')}
                        disabled={index === content.blogs.length - 1}
                        className="move-button"
                      >
                        ↓
                      </button>
                      <button 
                        onClick={() => handleBlogEdit(blog)}
                        className="edit-button"
                      >
                        Modifier
                      </button>
                      <button 
                        onClick={() => handleBlogDelete(blog.id)}
                        className="delete-button"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-date">{blog.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {editingItem && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Modifier le contenu</h3>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              placeholder="Entrez le nouveau contenu"
            />
            <div className="edit-modal-buttons">
              <button onClick={handlePageSave}>Enregistrer</button>
              <button onClick={handleCancel}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {editingBlog !== undefined && (
        <div className="edit-modal">
          <div className="edit-modal-content blog-edit-modal">
            <h3>{editingBlog ? 'Modifier le blog' : 'Nouveau blog'}</h3>
            <div className="blog-edit-form">
              <div className="form-group">
                <label>Titre</label>
                <input
                  type="text"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  placeholder="Titre du blog"
                />
              </div>
              <div className="form-group">
                <label>Catégorie</label>
                <input
                  type="text"
                  value={newBlog.category}
                  onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                  placeholder="Catégorie"
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newBlog.date}
                  onChange={(e) => setNewBlog({...newBlog, date: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Contenu</label>
                <textarea
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                  placeholder="Contenu du blog"
                  rows="10"
                />
              </div>
            </div>
            <div className="edit-modal-buttons">
              <button onClick={handleBlogSave}>Enregistrer</button>
              <button onClick={() => setEditingBlog(undefined)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CMS; 