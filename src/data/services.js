// Single source of truth for Novallect's service taxonomy.
// Feeds BOTH the navbar mega-menu and the Services page so they never drift.

export const serviceCategories = [
  {
    id: 'erp',
    name: 'ERP',
    tagline: 'SAP & business process systems',
    blurb:
      'End-to-end SAP and ERP services, from first implementation to ongoing support, that streamline how your business actually runs.',
    icon: 'erp',
    services: [
      { name: 'SAP Implementation', desc: 'Full-cycle SAP rollouts tailored to your processes.' },
      { name: 'SAP S/4HANA Migration', desc: 'Move to S/4HANA with minimal disruption.' },
      { name: 'SAP Business One Consulting', desc: 'The right-sized ERP for growing businesses.' },
      { name: 'SAP Support & Maintenance', desc: 'Reliable AMS so your systems never miss a beat.' },
      { name: 'ERP Customization', desc: 'Tailor your ERP to fit how your teams work.' },
      { name: 'ERP Integration', desc: 'Connect ERP with your existing tools and data.' },
      { name: 'Business Process Automation', desc: 'Automate repetitive workflows and approvals.' },
      { name: 'ERP Training & User Adoption', desc: 'Get your people confident and productive fast.' },
    ],
  },
  {
    id: 'it-solutions',
    name: 'IT Solutions',
    tagline: 'Technology that scales with you',
    blurb:
      'Modern IT infrastructure, cloud, software and security for startups, SMEs and enterprises ready to grow with confidence.',
    icon: 'it',
    services: [
      { name: 'IT Infrastructure Setup', desc: 'Build a stable, secure technology foundation.' },
      { name: 'Cloud Solutions & Migration', desc: 'Move to the cloud, securely and cost-effectively.' },
      { name: 'Custom Software Development', desc: 'Software built around your business needs.' },
      { name: 'Website & Web App Development', desc: 'Fast, modern web experiences that convert.' },
      { name: 'Cybersecurity Solutions', desc: 'Protect your data, systems and reputation.' },
      { name: 'System Integration', desc: 'Make your platforms work together seamlessly.' },
      { name: 'Managed IT Support', desc: 'Proactive support that keeps you running.' },
      { name: 'Digital Transformation Consulting', desc: 'A clear roadmap to a more digital business.' },
    ],
  },
  {
    id: 'analysis',
    name: 'Analysis',
    tagline: 'Business intelligence & reporting',
    blurb:
      'Turn raw data into decisions with Power BI dashboards, financial analysis and reporting that leadership can actually act on.',
    icon: 'analysis',
    services: [
      { name: 'Power BI Dashboards', desc: 'Live, interactive dashboards for every team.' },
      { name: 'Business Intelligence Reporting', desc: 'One source of truth across your business.' },
      { name: 'Financial Analysis & Modeling', desc: 'Clarity on margins, costs and cashflow.' },
      { name: 'Data Visualization', desc: 'Complex data made simple to understand.' },
      { name: 'KPI Tracking Dashboards', desc: 'Track what matters, in real time.' },
      { name: 'Sales & Operations Analytics', desc: 'Spot trends and act before competitors.' },
      { name: 'Management Reporting', desc: 'Board-ready reports without the manual work.' },
      { name: 'Forecasting & Performance Analysis', desc: 'Plan ahead with data-backed forecasts.' },
    ],
  },
]
