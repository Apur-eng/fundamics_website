import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { branchesData } from '../data/branches';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export const QueriesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: '',
    targetClass: 'Class X',
    board: 'ICSE',
    preferredBatch: 'Morning Batch',
    transportRequired: 'No',
    query: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter student or parent name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a valid contact phone number.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.branch) {
      errs.branch = 'Please select a branch.';
    }
    if (!formData.query.trim()) {
      errs.query = 'Please let us know your question or requirements.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      branch: '',
      targetClass: 'Class X',
      board: 'ICSE',
      preferredBatch: 'Morning Batch',
      transportRequired: 'No',
      query: '',
    });
  };

  return (
    <div className="queries-page animate-fade-in">
      {/* Editorial Header */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '840px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0.45rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.5rem',
              fontSize: '0.825rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <HelpCircle size={15} color="var(--color-hero-accent)" />
            <span>ADMISSIONS & INQUIRIES • SESSION 2026–2027</span>
          </div>

          <h1
            className="headline-editorial"
            style={{
              fontSize: 'var(--text-display)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Have a Question? We Are Here to Help.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Whether you are inquiring about morning batches, board syllabi, transport routes, or scheduling a center visit in Lucknow, our admissions desk welcomes your conversation.
          </p>
        </div>
      </section>

      {/* Main Content Section: Warm Ivory */}
      <section className="section section-ivory" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 4.5rem)',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Form Container */}
            <div
              style={{
                padding: 'clamp(2rem, 5vw, 3.25rem)',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--color-border-light)',
              }}
            >
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-light-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle size={36} color="var(--color-accent-green)" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Query Received!
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your query regarding <strong>{formData.targetClass} ({formData.board})</strong> has been recorded.
                  </p>
                  <div
                    style={{
                      backgroundColor: 'var(--color-ivory)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                      marginBottom: '2rem',
                      textAlign: 'left',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '6px' }}>
                      Next Steps:
                    </div>
                    <div>1. Our academic coordinator will contact you directly at <strong>{formData.phone}</strong>.</div>
                    <div>2. You can also visit our main campus at Triveni Nagar or call <strong>{siteConfig.phones.displayPrimary}</strong>.</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="btn btn-navy btn-md"
                  >
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-navy)', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Send an Admission Query
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      Fill in your details below and our academic counseling desk will contact you promptly.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label
                      htmlFor="student-name"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                    >
                      Student / Parent Name *
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      placeholder="e.g. Rajesh Sharma / Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: errors.name ? '1.5px solid #DC2626' : '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-ivory)',
                        fontSize: '0.95rem',
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Branch Selection */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label
                      htmlFor="branch-select"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                    >
                      Branch *
                    </label>
                    <select
                      id="branch-select"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: errors.branch ? '1.5px solid #DC2626' : '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-ivory)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <option value="">Select Branch</option>
                      <option value="Faizullaganj">Faizullaganj</option>
                      <option value="Aliganj">Aliganj</option>
                    </select>
                    {errors.branch && (
                      <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                        <AlertCircle size={12} /> {errors.branch}
                      </span>
                    )}
                  </div>

                  {/* Phone & Email row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="phone-number"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: errors.phone ? '1.5px solid #DC2626' : '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      />
                      {errors.phone && (
                        <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                          <AlertCircle size={12} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email-address"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="email-address"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: errors.email ? '1.5px solid #DC2626' : '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      />
                      {errors.email && (
                        <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Class & Board row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="target-class"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Target Class *
                      </label>
                      <select
                        id="target-class"
                        value={formData.targetClass}
                        onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      >
                        <option value="Class I - V (Primary)">Class I – V (Primary)</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X (Board Prep)</option>
                        <option value="Class XI">Class XI</option>
                        <option value="Class XII">Class XII (Board Prep)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="target-board"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Board Syllabus *
                      </label>
                      <select
                        id="target-board"
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      >
                        <option value="ICSE">ICSE</option>
                        <option value="ISC">ISC</option>
                        <option value="CBSE">CBSE</option>
                        <option value="Other / State Board">Other / Foundation</option>
                      </select>
                    </div>
                  </div>

                  {/* Batch & Transport Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="preferred-batch"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Preferred Batch
                      </label>
                      <select
                        id="preferred-batch"
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      >
                        <option value="Morning Batch">Morning Batch (Special Offering)</option>
                        <option value="Evening Batch">Evening Batch</option>
                        <option value="Flexible / Any">Flexible / Any</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="transport-required"
                        style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                      >
                        Transport Facility Required?
                      </label>
                      <select
                        id="transport-required"
                        value={formData.transportRequired}
                        onChange={(e) => setFormData({ ...formData, transportRequired: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border-light)',
                          backgroundColor: 'var(--color-ivory)',
                          fontSize: '0.95rem',
                        }}
                      >
                        <option value="No">No, self commute</option>
                        <option value="Yes">Yes, please check route</option>
                      </select>
                    </div>
                  </div>

                  {/* Query Textarea */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label
                      htmlFor="query-text"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}
                    >
                      Your Query / Specific Requirements *
                    </label>
                    <textarea
                      id="query-text"
                      rows={4}
                      placeholder="Please let us know about subjects required, student's current school, specific timing constraints, or questions..."
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: errors.query ? '1.5px solid #DC2626' : '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-ivory)',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                      }}
                    />
                    {errors.query && (
                      <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                        <AlertCircle size={12} /> {errors.query}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-green btn-lg"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Send size={18} />
                    <span>Submit Query</span>
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                    We respect your privacy. Contact details are used strictly for academic guidance communication.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Contact Channels & Campus Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Direct Helpline Box */}
              <div
                style={{
                  backgroundColor: 'var(--color-primary-navy)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.25rem 2rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-green)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  <Phone size={16} /> Instant Admissions Helpline
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Speak Directly with Academic Coordinators
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Have an urgent question regarding admissions, batch timings, or demo classes? Call us directly:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <a
                    href={siteConfig.phones.primary}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      padding: '0.9rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span>📞 {siteConfig.phones.displayPrimary}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-hero-accent)', fontWeight: 700 }}>Tap to Call</span>
                  </a>

                  <a
                    href={siteConfig.phones.secondary}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span>Secondary Line: {siteConfig.phones.displaySecondary}</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-light-green)',
                      fontSize: '0.9rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Mail size={16} /> {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Campus Centers & Landmark Summary */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  <MapPin size={16} color="var(--color-accent-green)" /> Center Addresses & Hours
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', fontWeight: 800, marginBottom: '1.25rem' }}>
                  Visit Our Lucknow Centers
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {branchesData.map((branch) => (
                    <div
                      key={branch.id}
                      style={{
                        paddingBottom: '1rem',
                        borderBottom: '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-navy)' }}>
                        {branch.name}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                        {branch.addressLine1}, {branch.addressLine2}, Lucknow - {branch.pincode}
                      </div>
                      {branch.landmark && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-green-dark)', fontWeight: 600, marginTop: '2px' }}>
                          Landmark: {branch.landmark}
                        </div>
                      )}
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        🕒 {branch.hours}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
