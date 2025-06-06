import type { Schema, Struct } from '@strapi/strapi';

export interface AchievementsAchievements extends Struct.ComponentSchema {
  collectionName: 'components_achievements_achievements';
  info: {
    displayName: 'Achievements';
    icon: 'command';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CertificatesCertificates extends Struct.ComponentSchema {
  collectionName: 'components_certificates_certificates';
  info: {
    displayName: 'Certificates';
    icon: 'code';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'puzzle';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    country: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.Text;
  };
}

export interface ExtrasExtras extends Struct.ComponentSchema {
  collectionName: 'components_extras_extras';
  info: {
    description: '';
    displayName: 'Extras';
    icon: 'dashboard';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    extraTitle: Schema.Attribute.String;
  };
}

export interface LanguagesLanguages extends Struct.ComponentSchema {
  collectionName: 'components_languages_languages';
  info: {
    displayName: 'Languages';
    icon: 'earth';
  };
  attributes: {
    level: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    description: '';
    displayName: 'Projects';
    icon: 'bold';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    projectTitle: Schema.Attribute.String;
  };
}

export interface ReferenceReference extends Struct.ComponentSchema {
  collectionName: 'components_reference_reference_s';
  info: {
    displayName: 'Reference ';
  };
  attributes: {
    company: Schema.Attribute.String;
    email: Schema.Attribute.String;
    managerName: Schema.Attribute.String;
    managerRole: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'achievements.achievements': AchievementsAchievements;
      'certificates.certificates': CertificatesCertificates;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'extras.extras': ExtrasExtras;
      'languages.languages': LanguagesLanguages;
      'projects.projects': ProjectsProjects;
      'reference.reference': ReferenceReference;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'skills.skills': SkillsSkills;
    }
  }
}
