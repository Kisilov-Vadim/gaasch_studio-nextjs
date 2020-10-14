type TImage = {
  original: string
}

export type TMainProject = {
  preview_project_title: string
  preview_project_preview: TImage 
  preview_project_short_text: string
  projects_alias: string 
  preview_project_category: string
};

export type TMainClient = {
  logo: TImage
  alt: string
}

export type TProjectFact = {
  facts_description: string
  facts_number: string
  facts_title: string
}

type TMainContactsCity = {
  city: string
  phone: string
}

type TMainContactsSocial = {
  title: string
  link: string
}

export type TMainContacts = {
  email: string
  ['first-city']: TMainContactsCity
  logo: TImage
  ['second-city']: TMainContactsCity
  ['social-network']: [TMainContactsSocial]
  svg: {
    asterisk: TImage
    logo_footer: TImage
    logo_header: TImage 
  }
}

type TMainClientsClient = {
  logo: TImage | null
  alt: string
}

export type TMainClients = TMainClientsClient[]; 

export type TMainShortText = {
  about_studio: string
  contact_us: string
  copyright: string
  facts: string
  featured_projects: string
  menu: string
  other_projects: string
  our_clients: string
  project_details: string
}

type TProjectImage = {
  alt: string
  image: TImage
}

export type TMainStudio = {
  main_project: number
  meta_description: string
  meta_title: string
  project_alias: string
  project_banner: TImage
  project_category: string
  project_details: string
  project_images: null | TProjectImage[]
  project_preview: TImage
  project_short_text: string
  project_title: string
  project_video: string
  project_video_thumbnail: string
  studio_about: string
  studio_asterisk_color: string
  studio_background_color: string
  studio_logo: null | string
  studio_slogan: string
}

export type TMainPageData = {
  contacts: TMainContacts
  our_clients: TMainClients
  preview_projects: TMainProject[]
  short_text: TMainShortText
  studio: TMainStudio
}



