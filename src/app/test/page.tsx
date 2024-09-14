'use client'
import Modal from '@/components/elements/modals';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} size="lg" position="bottom">
        <div className="row align-items-start">
          <div className="col-md-6">
            <div className="team-photo">
              <img src="https://via.placeholder.com/300" alt="team" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="team-popup-info ps-md-3">
              <h3 className="team-name title title-lg pt-4">Louis Baker</h3>
              <p className="team-position">CEO & Lead Blockchain</p>
              <ul className="team-social mb-4">
                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
              </ul>
              <p>
                He is a great man to work with. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Similique, autem.
              </p>
              <div className="progress-list">
                <div className="progress-wrap">
                  <div className="progress-title">
                    Blockchain <span className="progress-amount">85%</span>
                  </div>
                  <div className="progress-bar progress-bar-xs bg-black-10">
                    <div className="progress-percent bg-primary" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <div className="progress-title">
                    Decentralization <span className="progress-amount">68%</span>
                  </div>
                  <div className="progress-bar progress-bar-xs bg-black-10">
                    <div className="progress-percent bg-primary" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;