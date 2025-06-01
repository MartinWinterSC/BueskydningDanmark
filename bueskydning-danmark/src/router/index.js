import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Applicable pages
import CommunityMainView from '../views/community/CommunityMainView.vue'
    import NewsView from '../views/community/NewsView.vue'
    import ArticlesPostView from '../views/community/ArticlesPostView.vue'
    import ForumView from '../views/community/ForumView.vue'

import CalendarMainView from '../views/calendar/CalendarMainView.vue'

import BreddeMain from '../views/bredde/BreddeMainView.vue'
import EquipmentView from '../views/bredde/EquipmentView.vue'

import EliteMainView from '../views/elite/EliteMainView.vue'
  import NationalTeamOverviewView from '../views/elite/NationalTeamsOverviewView.vue'
    import NationalTeamView from '../views/elite/NationalTeamView.vue'

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
    
    //Fællesskab sider
    {
      path: '/communityMainView',
      name: 'Fællesskabet',
      component: CommunityMainView,
    },
    {
      path: '/newsView',
      name: 'Nyheder',
      component: NewsView,
    },
    {
      path: '/articlesPostView',
      name: 'Artikle',
      component: ArticlesPostView,
    },{
      path: '/ForumView',
      name: 'Forum',
      component: ForumView,
    },

    // Kalender side
    {
      path: '/CalendarMainView',
      name: 'Kalender',
      component: CalendarMainView,
    },
    
    // Bredde sider
    {
      path: '/BreddeMainView',
      name:'/Bredde',
      component: BreddeMain,
    },
    {
      path: '/EquipmentView',
      name: 'Udstyr',
      component: EquipmentView,
    },
    
    // Elite sider
    {
      path: '/EliteMainView',
      name: 'Elite',
      component: EliteMainView,
      props:true,
    },
    {
      path: '/NationalTeamOverviewView/:id',
      name: 'Landsholds Oversigt',
      component: NationalTeamOverviewView,
      props: true,
    },
    {
      path: '/NationalTeamView/:id',
      name: 'Landsholdet',
      component: NationalTeamView,
      props: true,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
