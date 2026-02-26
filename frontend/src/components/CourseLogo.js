import React from 'react';

// Real SVG Logo Components
export const SalesforceLogo = ({ size = 48, color = "#00A1E0" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M9.5 8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" 
          fill={color} opacity="0.3"/>
    <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 8v8M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AWSLogo = ({ size = 48, color = "#FF9900" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 8l6-4 6 4v8l-6 4-6-4V8z" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M6 8l6 4 6-4M12 12v8" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="16" r="1.5" fill={color}/>
  </svg>
);

export const AzureLogo = ({ size = 48, color = "#0078D4" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 18h7l-3-12L18 3l-5 15h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 18l5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const PythonLogo = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3C8.5 3 6 4.5 6 7v3h6v1H6c-1.5 0-3 1-3 3.5S4.5 18 6 18h2v-2.5c0-1.5 1.5-3.5 4-3.5h4c1.5 0 3-1 3-3V7c0-2.5-2.5-4-6-4z" 
          fill="#3776AB"/>
    <path d="M12 21c3.5 0 6-1.5 6-4v-3h-6v-1h6c1.5 0 3-1 3-3.5S19.5 6 18 6h-2v2.5c0 1.5-1.5 3.5-4 3.5H8c-1.5 0-3 1-3 3v2.5c0 2.5 2.5 4 6 4z" 
          fill="#FFD43B"/>
    <circle cx="9" cy="6" r="1" fill="#FFD43B"/>
    <circle cx="15" cy="18" r="1" fill="#3776AB"/>
  </svg>
);

export const MuleSoftLogo = ({ size = 48, color = "#00A0DF" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="8" r="2" fill={color}/>
    <circle cx="16" cy="8" r="2" fill={color}/>
    <circle cx="8" cy="16" r="2" fill={color}/>
    <circle cx="16" cy="16" r="2" fill={color}/>
    <path d="M10 8h4M10 16h4M8 10v4M16 10v4" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="1.5" fill={color}/>
  </svg>
);

export const MLLogo = ({ size = 48, color = "#76B900" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M12 8v8M3 8l9 4 9-4" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
    <path d="M12 12l-6 3M12 12l6 3" stroke={color} strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const logoMap = {
  "Salesforce Training": SalesforceLogo,
  "AWS Cloud Training": AWSLogo,
  "Azure Training": AzureLogo,
  "Python Programming": PythonLogo,
  "MuleSoft Training": MuleSoftLogo,
  "Machine Learning": MLLogo
};

export const getCourseLogo = (courseName) => {
  return logoMap[courseName] || SalesforceLogo;
};
