'use client';

import { useState, useRef } from 'react';
import { ExButton, ExDialog } from '@bhavinpatel57/element-x';

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const openDemo = () => {
    setIsOpen(true);
    dialogRef.current?.show({ overlay: true });
  };

  const closeDemo = () => {
    setIsOpen(false);
    dialogRef.current?.close();
  };

  return (
    <>
      <ExButton size="lg" variant="outline" onClick={openDemo}>
        📹 Watch Demo
      </ExButton>

      <ExDialog ref={dialogRef} dialogPadding="20px" closeButton>
        <div slot="dialog-title">
          <h2>Product Demo</h2>
          <p>See how our platform can transform your business</p>
        </div>
        
        <div slot="dialog-content" className="demo-modal-content">
          <div className="demo-video-container">
            <div className="demo-placeholder">
              <div className="play-icon">▶️</div>
              <h3>Interactive Demo</h3>
              <p>Experience the full power of our inventory and billing system</p>
              
              <div className="demo-features">
                <div className="demo-feature">
                  <span className="feature-icon">📦</span>
                  <div>
                    <h4>Inventory Management</h4>
                    <p>Real-time stock tracking and automated alerts</p>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <span className="feature-icon">🧾</span>
                  <div>
                    <h4>Smart Billing</h4>
                    <p>Generate professional invoices in seconds</p>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <span className="feature-icon">📊</span>
                  <div>
                    <h4>Analytics Dashboard</h4>
                    <p>Get insights into your business performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div slot="custom-buttons" className="demo-actions">
          <ExButton variant="primary" onClick={() => window.location.href = '/auth'}>
            Start Free Trial
          </ExButton>
          <ExButton variant="outline" onClick={closeDemo}>
            Close Demo
          </ExButton>
        </div>
      </ExDialog>

      <style jsx>{`
        .demo-modal-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .demo-video-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          color: white;
          margin-bottom: 2rem;
        }
        
        .demo-placeholder h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .demo-placeholder p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }
        
        .play-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .play-icon:hover {
          transform: scale(1.1);
        }
        
        .demo-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .demo-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 8px;
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        .demo-feature h4 {
          font-size: 0.9rem;
          margin: 0 0 0.25rem 0;
          color: white;
        }
        
        .demo-feature p {
          font-size: 0.8rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .demo-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .demo-features {
            grid-template-columns: 1fr;
          }
          
          .demo-feature {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
