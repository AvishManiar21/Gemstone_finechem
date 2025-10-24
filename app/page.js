'use client';

import { useState, useEffect } from 'react';
import { ExButton, ExCard, ExBadge } from '@bhavinpatel57/element-x';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import DemoModal from './components/DemoModal';

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleGetStarted = () => {
    if (user) {
      router.push('/shop');
    } else {
      router.push('/auth');
    }
  };

  const handleWatchDemo = () => {
    // Demo functionality is now handled by DemoModal component
  };

  const handleFreeTrial = () => {
    router.push('/auth');
  };

  const features = [
    {
      icon: '📦',
      title: 'Real-time Inventory',
      description: 'Track stock levels, manage suppliers, and get low-stock alerts automatically.'
    },
    {
      icon: '🧾',
      title: 'Smart Billing',
      description: 'Generate professional invoices, track payments, and manage customer accounts.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Get insights into sales trends, profit margins, and business performance.'
    },
    {
      icon: '🏪',
      title: 'Multi-Shop Management',
      description: 'Manage multiple locations with hierarchical shop structures and centralized control.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee and automated backups.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access your business data anywhere with our responsive mobile interface.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Owner, TechMart Electronics',
      content: 'This platform revolutionized our inventory management. We reduced stockouts by 80% and increased efficiency by 3x.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Manager, Fashion Forward',
      content: 'The billing system is incredibly intuitive. What used to take hours now takes minutes. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, Home & Garden Plus',
      content: 'The analytics helped us identify our best-selling products and optimize our inventory. Revenue increased by 40%.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 100 products',
        'Basic inventory tracking',
        'Simple billing',
        'Email support',
        'Mobile access'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'For growing businesses that need more power',
      features: [
        'Unlimited products',
        'Advanced analytics',
        'Multi-shop management',
        'Priority support',
        'API access',
        'Custom reports'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For large businesses with complex needs',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  if (!isClient) return null;

  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="section hero">
        <div className="container">
          <div className="hero-content">
            <ExBadge variant="success" size="sm" className="hero-badge">
              🚀 New: AI-powered inventory predictions
            </ExBadge>
            <h1 className="headline">
              Streamline Your Business Operations with 
              <span className="gradient-text"> Smart Inventory & Billing</span>
            </h1>
            <p className="subtext">
              Join 10,000+ businesses that trust our platform to manage inventory, 
              generate invoices, and grow their revenue. Start your free trial today — no credit card required.
            </p>
            <div className="hero-actions">
              <ExButton size="lg" variant="primary" onClick={handleFreeTrial}>
                Start Free Trial
              </ExButton>
              <DemoModal />
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>10,000+</strong>
                <span>Active Users</span>
              </div>
              <div className="stat">
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>
              <div className="stat">
                <strong>4.9/5</strong>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need to Run Your Business</h2>
            <p className="section-subtitle">
              Powerful features designed to save you time and help you make better business decisions.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <ExCard key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </ExCard>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section demo">
        <div className="container">
          <div className="demo-content">
            <div className="demo-text">
              <h2>See It In Action</h2>
              <p>
                Watch how our platform can transform your business operations in just 2 minutes.
                From inventory management to automated billing — see why thousands of businesses choose us.
              </p>
              <DemoModal />
            </div>
            <div className="demo-video">
              <div className="video-placeholder">
                <div className="play-button">▶️</div>
                <p>Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Loved by Business Owners Worldwide</h2>
            <p className="section-subtitle">See what our customers have to say about their experience.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <ExCard key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <blockquote>"{testimonial.content}"</blockquote>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </ExCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Choose the plan that fits your business needs. Upgrade or downgrade anytime.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <ExCard key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <ExBadge variant="primary" className="popular-badge">Most Popular</ExBadge>}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>✓ {feature}</li>
                  ))}
                </ul>
                <ExButton 
                  size="lg" 
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="pricing-cta"
                  onClick={handleFreeTrial}
                >
                  {plan.cta}
                </ExButton>
              </ExCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join thousands of successful businesses already using our platform. 
              Start your free trial today — no setup fees, no long-term contracts.
            </p>
            <div className="cta-actions">
              <ExButton size="lg" variant="primary" onClick={handleFreeTrial}>
                Start Free Trial
              </ExButton>
              <DemoModal />
            </div>
            <div className="cta-guarantee">
              <p>✅ 30-day money-back guarantee • ✅ No credit card required • ✅ Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#demo">Demo</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#status">Status</a></li>
                <li><a href="#api">API Docs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#privacy">Privacy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 support@inventorybilling.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🏢 123 Business St, Suite 100<br />San Francisco, CA 94105</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Inventory & Billing. All rights reserved.</p>
            <div className="footer-links">
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
