export default {
  updateBlogPosts: (state, blogPosts) => {
    state.blogPosts = [...blogPosts];
  },
  updateEducation: (state, education) => {
    state.education = [...education];
  },
  updateInterests: (state, interests) => {
    state.interests = [...interests];
  },
  updatePersonalInfo: (state, personalInfo) => {
    state.personalInfo = personalInfo;
  },
  updateResume: (state, resume) => {
    state.resume = resume;
  },
  //
  updateLanguages: (state, languages) => {
    state.languages = languages;
  },
  updateProfileInfos: (state, data) => {
    state.infos = data.infos
  },
  updateProfileSocial: (state, data) => {
    state.social = data.social
  },
  updateProfileSummary: (state, data) => {
    state.summary = data.summary
  },
  updateSkills: (state, data) => {
    state.skills = data.skills;
  },
  updateJobs: (state, data) => {
    state.jobs = data.workExperiences;
  },
};