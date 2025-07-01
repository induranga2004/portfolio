import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });

  const getCharCounterClass = () => {
    const length = formData.message.length;
    if (length > 450) return 'error';
    if (length > 400) return 'warning';
    return '';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.length > 500) return 'Message must be less than 500 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors({
      ...fieldErrors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });
    setFieldErrors({});
    
    // Basic form validation
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    else if (formData.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
    
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address';
    
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitStatus({ message: '❌ Please fix the errors above.', type: 'error' });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // EmailJS configuration - Using your actual EmailJS setup
      const serviceID = 'service_rzjuq1p'; // Your EmailJS service ID
      const templateID = 'template_tt3zcv8'; // Your correct EmailJS template ID
      const publicKey = 'eQoQIyrZrVAZAdLXy'; // Your EmailJS public key
      
      // Simplified template parameters to match EmailJS default template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('Sending email with params:', templateParams); // Debug log
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('EmailJS Response:', response); // Debug log
      
      if (response.status === 200) {
        setSubmitStatus({ 
          message: '✅ Message sent successfully! Thank you for reaching out. I\'ll get back to you soon.',
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        message: '❌ Failed to send message. Please try again or contact me directly at induranga.learning@gmail.com',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ message: '', type: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'induranga.learning@gmail.com',
      link: 'mailto:induranga.learning@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 75 858 0439',
      link: 'tel:+94758580439'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/induranga2004',
      link: 'https://github.com/induranga2004'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/induranga-gunasekara',
      link: 'https://linkedin.com/in/induranga-gunasekara'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Create Something Amazing Together</h3>
              <p>
                I'm always interested in new opportunities, challenging projects, 
                and collaborations. Whether you have a question, a project idea, 
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="contact-item"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for freelance work</span>
              </div>
              <p>Currently open to new opportunities and exciting projects!</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Your full name"
                  className={fieldErrors.name ? 'error' : ''}
                />
                {fieldErrors.name && <div className="field-error">{fieldErrors.name}</div>}
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="your.email@example.com"
                  className={fieldErrors.email ? 'error' : ''}
                />
                {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows="5"
                  maxLength="500"
                  placeholder="Tell me about your project or just say hello..."
                  className={fieldErrors.message ? 'error' : ''}
                ></textarea>
                <div className="message-meta">
                  <div className={`char-counter ${getCharCounterClass()}`}>
                    {formData.message.length}/500 characters
                  </div>
                  {fieldErrors.message && <div className="field-error">{fieldErrors.message}</div>}
                </div>
                <div className="input-border"></div>
              </div>

              {submitStatus.message && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
