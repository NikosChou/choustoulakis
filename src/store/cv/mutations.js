export default {
  updateLanguages: (state, data) => {
    state.languages = data.languages;
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
  updateEducations: (state, data) => {
    state.educations = data.educations;
  },
};