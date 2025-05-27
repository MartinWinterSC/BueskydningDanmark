import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Applicable pages
import LandingView from '../views/LandingView.vue'

import CommunityMainView from '../views/community/CommunityMainView.vue'
    import NewsView from '../views/community/NewsView.vue'
    import ArticlesView from '../views/community/ArticlesView.vue'
    import ForumView from '../views/community/ForumView.vue'
    import MagazineView from '../views/community/MagazineView.vue'
    import ArchiveView from '../views/community/ArchiveView.vue'
        import VideosView from '../views/community/VideosView.vue'
        import LivestreamView from '../views/community/LivestreamView.vue'
        import ResultsView from '../views/community/ResultsView.vue'
            import RallyResultsView from '../views/community/RallyResultsView.vue'
            import RecordsView from '../views/community/RecordsView.vue'

import CalendarMainView from '../views/calendar/CalendarMainView.vue'
    import ArrangementsView from '../views/calendar/ArrangementsView.vue'
        import DayOfTheBowView from '../views/calendar/DayOfTheBowView.vue'
        import ArcheryCampView from '../views/calendar/ArcheryCampView.vue'
    import RalliesView from '../views/calendar/RalliesView.vue'
    import CoursesView from '../views/calendar/CoursesView.vue'

import RalliesMainView from '../views/rallies/RalliesMainView.vue'
    import UpcomingRalliesView from '../views/rallies/UpcomingRalliesView.vue'
    import DivisionsView from '../views/rallies/DivisionsView.vue'
    import DanishChampionsView from '../views/rallies/DanishChampionsView.vue'
    import CombatArcheryView from '../views/rallies/CombatArcheryView.vue'
    import OtherRalliesView from '../views/rallies/OtherRalliesView.vue'
        import WANordicView from '../views/rallies/WANordicView.vue'

import OrdinaryMainView from '../views/ordinary/OrdinaryMainView.vue'
    import YouthClubView from '../views/ordinary/YouthClubView.vue'
    import SchoolArcheryView from '../views/ordinary/SchoolArcheryView.vue'
    import DIFSoldierprojectView from '../views/ordinary/DIFSoldierprojectView.vue'
    import MemberssystemView from '../views/ordinary/MemberssystemView.vue'
    import EquipmentView from '../views/ordinary/EquipmentView.vue'
    import WebshopView from '../views/ordinary/WebshopView.vue'

import EliteMainView from '../views/elite/EliteMainView.vue'
    import NationalTeamView from '../views/elite/NationalTeamView.vue'
    import AcherRepresentativeView from '../views/elite/AcherRepresentativeView.vue'
    import TalentCenterView from '../views/elite/TalentCenterView.vue'
    import TalentDevelopmentView from '../views/elite/TalentDevelopmentView.vue'
    import SchoolNEducationView from '../views/elite/SchoolNEducationView.vue'
    import AntiDopingView from '../views/elite/AntiDopingView.vue'

import TrainingMainView from '../views/training/TrainingMainView.vue'
    import TechnicalTrainingView from '../views/training/TechnicalTrainingView.vue'
    import MentalTrainingView from '../views/training/MentalTrainingView.vue'

import InfoMainView from '../views/info/InfoMainView.vue'
    import ContactView from '../views/info/ContactView.vue'
    import ClubOverviewView from '../views/info/ClubOverviewView.vue'
        import ThreeDTracksView from '../views/info/ThreeDTracksView.vue'
    import CommitteeView from '../views/info/CommitteeView.vue'
        import BoardView from '../views/info/BoardView.vue'
        import EliteCommitteeView from '../views/info/EliteCommitteeView.vue'
        import OrdinaryCommitteeView from '../views/info/OrdinaryCommitteeView.vue'
        import ArmatureCommitteeView from '../views/info/ArmatureCommitteeView.vue'
        import LawsCommitteeView from '../views/info/LawsCommitteeView.vue'
        import JudgeCommitteeView from '../views/info/JudgeCommitteeView.vue'

        import CoursesPlanView from '../views/info/CoursesPlanView.vue'
    import UnionView from '../views/info/UnionView.vue'
        import UnionMeetingView from '../views/info/UnionMeetingView.vue'
        import UnionStrategyView from '../views/info/UnionStrategyView.vue'
    import AdminView from '../views/info/AdminView.vue'
        import LawNRulesView from '../views/info/LawNRulesView.vue'
        import PrivacyPolicyView from '../views/info/PrivacyPolicyView.vue'
        import InsuranceView from '../views/info/InsuranceView.vue'
        import ChildCertificatesView from '../views/info/ChildCertificatesView.vue'
        import MonotaryView from '../views/info/MonotaryView.vue'
        import VolunteerView from '../views/info/VolunteerView.vue'
        import NewClubView from '../views/info/NewClubView.vue'
    import SponsorView from '../views/info/SponsorView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    
    {
      path: '/communityMainView',
      name: 'communityMainView',
      component: CommunityMainView,
    },
    {
      path: '/newsView',
      name: 'newsView',
      component: NewsView,
    },{
      path: '/articlesView',
      name: 'articlesView',
      component: ArticlesView,
    },{
      path: '/ForumView',
      name: 'ForumView',
      component: ForumView,
    },{
      path: '/MagazineView',
      name: 'MagazineView',
      component: MagazineView,
    },{
      path: '/ArchiveView',
      name: 'ArchiveView',
      component: ArchiveView,
    },{
      path: '/VideosView',
      name: 'VideosView',
      component: VideosView,
    },{
      path: '/LivestreamView',
      name: 'LivestreamView',
      component: LivestreamView,
    },{
      path: '/ResultsView',
      name: 'ResultsView',
      component: ResultsView,
    },{
      path: '/RallyResultsView',
      name: 'RallyResultsView',
      component: RallyResultsView,
    },{
      path: '/RecordsView',
      name: 'RecordsView',
      component: RecordsView,
    },
    
    {
      path: '/CalendarMainView',
      name: 'CalendarMainView',
      component: CalendarMainView,
    },{
      path: '/ArrangementsView',
      name: 'ArrangementsView',
      component: ArrangementsView,
    },{
      path: '/DayOfTheBowView',
      name: 'DayOfTheBowView',
      component: DayOfTheBowView,
    },{
      path: '/ArcheryCampView',
      name: 'ArcheryCampView',
      component: ArcheryCampView,
    },{
      path: '/RalliesView',
      name: 'RalliesView',
      component: RalliesView,
    },{
      path: '/CoursesView',
      name: 'CoursesView',
      component: CoursesView,
    },
    
    {
      path: '/RalliesMainView',
      name: 'RalliesMainView',
      component: RalliesMainView,
    },{
      path: '/UpcomingRalliesView',
      name: 'UpcomingRalliesView',
      component: UpcomingRalliesView,
    },{
      path: '/DivisionsView',
      name: 'DivisionsView',
      component: DivisionsView,
    },{
      path: '/DanishChampionsView',
      name: 'DanishChampionsView',
      component: DanishChampionsView,
    },{
      path: '/CombatArcheryView',
      name: 'CombatArcheryView',
      component: CombatArcheryView,
    },{
      path: '/OtherRalliesView',
      name: 'OtherRalliesView',
      component: OtherRalliesView,
    },{
      path: '/WANordicView',
      name: 'WANordicView',
      component: WANordicView,
    },
    
    {
      path: '/OrdinaryMainView',
      name: 'OrdinaryMainView',
      component: OrdinaryMainView,
    },{
      path: '/YouthClubView',
      name: 'YouthClubView',
      component: YouthClubView,
    },{
      path: '/SchoolArcheryView',
      name: 'SchoolArcheryView',
      component: SchoolArcheryView,
    },{
      path: '/DIFSoldierprojectView',
      name: 'DIFSoldierprojectView',
      component: DIFSoldierprojectView,
    },{
      path: '/MemberssystemView',
      name: 'MemberssystemView',
      component: MemberssystemView,
    },{
      path: '/EquipmentView',
      name: 'EquipmentView',
      component: EquipmentView,
    },{
      path: '/WebshopView',
      name: 'WebshopView',
      component: WebshopView,
    },
    
    {
      path: '/EliteMainView',
      name: 'EliteMainView',
      component: EliteMainView,
    },{
      path: '/NationalTeamView',
      name: 'NationalTeamView',
      component: NationalTeamView,
    },{
      path: '/AcherRepresentativeView',
      name: 'AcherRepresentativeView',
      component: AcherRepresentativeView,
    },{
      path: '/TalentCenterView',
      name: 'TalentCenterView',
      component: TalentCenterView,
    },{
      path: '/TalentDevelopmentView',
      name: 'TalentDevelopmentView',
      component: TalentDevelopmentView,
    },{
      path: '/SchoolNEducationView',
      name: 'SchoolNEducationView',
      component: SchoolNEducationView,
    },{
      path: '/AntiDopingView',
      name: 'AntiDopingView',
      component: AntiDopingView,
    },
    
    {
      path: '/TrainingMainView',
      name: 'TrainingMainView',
      component: TrainingMainView,
    },{
      path: '/TechnicalTrainingView',
      name: 'TechnicalTrainingView',
      component: TechnicalTrainingView,
    },{
      path: '/MentalTrainingView',
      name: 'MentalTrainingView',
      component: MentalTrainingView,
    },
    
    {
      path: '/InfoMainView',
      name: 'InfoMainView',
      component: InfoMainView,
    },{
      path: '/ContactView',
      name: 'ContactView',
      component: ContactView,
    },{
      path: '/ClubOverviewView',
      name: 'ClubOverviewView',
      component: ClubOverviewView,
    },{
      path: '/ThreeDTracksView',
      name: 'ThreeDTracksView',
      component: ThreeDTracksView,
    },{
      path: '/CommitteeView',
      name: 'CommitteeView',
      component: CommitteeView,
    },{
      path: '/BoardView',
      name: 'BoardView',
      component: BoardView,
    },{
      path: '/EliteCommitteeView',
      name: 'EliteCommitteeView',
      component: EliteCommitteeView,
    },{
      path: '/OrdinaryCommitteeView',
      name: 'OrdinaryCommitteeView',
      component: OrdinaryCommitteeView,
    },{
      path: '/ArmatureCommitteeView',
      name: 'ArmatureCommitteeView',
      component: ArmatureCommitteeView,
    },{
      path: '/LawsCommitteeView',
      name: 'LawsCommitteeView',
      component: LawsCommitteeView,
    },{
      path: '/JudgeCommitteeView',
      name: 'JudgeCommitteeView',
      component: JudgeCommitteeView,
    },{
      path: '/CoursesPlanView',
      name: 'CoursesPlanView',
      component: CoursesPlanView,
    },{
      path: '/UnionView',
      name: 'UnionView',
      component: UnionView,
    },{
      path: '/UnionMeetingView',
      name: 'UnionMeetingView',
      component: UnionMeetingView,
    },{
      path: '/UnionStrategyView',
      name: 'UnionStrategyView',
      component: UnionStrategyView,
    },{
      path: '/AdminView',
      name: 'AdminView',
      component: AdminView,
    },{
      path: '/LawNRulesView',
      name: 'LawNRulesView',
      component: LawNRulesView,
    },{
      path: '/PrivacyPolicyView',
      name: 'PrivacyPolicyView',
      component: PrivacyPolicyView,
    },{
      path: '/InsuranceView',
      name: 'InsuranceView',
      component: InsuranceView,
    },{
      path: '/ChildCertificatesView',
      name: 'ChildCertificatesView',
      component: ChildCertificatesView,
    },{
      path: '/MonotaryView',
      name: 'MonotaryView',
      component: MonotaryView,
    },{
      path: '/VolunteerView',
      name: 'VolunteerView',
      component: VolunteerView,
    },{
      path: '/NewClubView',
      name: 'NewClubView',
      component: NewClubView,
    },{
      path: '/SponsorView',
      name: 'SponsorView',
      component: SponsorView,
    },
  ],
})

export default router
