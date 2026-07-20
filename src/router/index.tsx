import { createBrowserRouter } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import SanityStudioPage from '@/pages/studio/SanityStudioPage'

import HomePage from '@/pages/home/HomePage'

import GolfHubPage from '@/pages/golf/GolfHubPage'
import RgARulesPage from '@/pages/golf/rga/RgARulesPage'
import DonniePage from '@/pages/golf/donnie/DonniePage'

import TripHubPage from '@/pages/golf/trip/TripHubPage'
import TripInfoPage from '@/pages/golf/trip/TripInfoPage'
import TripCurrentPage from '@/pages/golf/trip/TripCurrentPage'
import TripHistoryPage from '@/pages/golf/trip/TripHistoryPage'
import TripFieldPage from '@/pages/golf/trip/TripFieldPage'
import TripPairingsPage from '@/pages/golf/trip/TripPairingsPage'
import TripCondosPage from '@/pages/golf/trip/TripCondosPage'
import TripArchivesHubPage from '@/pages/golf/trip/TripArchivesHubPage'
import TripArchiveYearPage from '@/pages/golf/trip/TripArchiveYearPage'

import LeagueHubPage from '@/pages/golf/league/LeagueHubPage'
import LeagueInfoPage from '@/pages/golf/league/LeagueInfoPage'
import LeagueStatsPage from '@/pages/golf/league/LeagueStatsPage'
import LeagueArchivesPage from '@/pages/golf/league/LeagueArchivesPage'

import GolfMiscPage from '@/pages/golf/misc/GolfMiscPage'
import BonusCardPage from '@/pages/golf/misc/BonusCardPage'
import OldNewsPage from '@/pages/golf/misc/OldNewsPage'

import BowlingHubPage from '@/pages/bowling/BowlingHubPage'
import BowlingCurrentPage from '@/pages/bowling/BowlingCurrentPage'
import BowlingRecordsPage from '@/pages/bowling/BowlingRecordsPage'
import BowlingArchivePage from '@/pages/bowling/BowlingArchivePage'

import PhotosHubPage from '@/pages/photos/PhotosHubPage'
import PhotoGalleryPage from '@/pages/photos/PhotoGalleryPage'

import AlbertGamePage from '@/pages/poker/AlbertGamePage'

export const router = createBrowserRouter([
  {
    path: '/studio/*',
    element: <SanityStudioPage />,
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage />, handle: { title: 'Home', crumbs: [] } },

      { path: 'golf', element: <GolfHubPage />, handle: { title: 'Golf', crumbs: ['Home'] } },
      { path: 'golf/rules', element: <RgARulesPage />, handle: { title: 'RgA Rules', crumbs: ['Home', 'Golf'] } },
      { path: 'golf/donnie', element: <DonniePage />, handle: { title: 'Donnie Coultas Memorial', crumbs: ['Home', 'Golf'] } },

      { path: 'golf/trip', element: <TripHubPage />, handle: { title: 'McKees Rocks MASTERS', crumbs: ['Home', 'Golf'] } },
      { path: 'golf/trip/info', element: <TripInfoPage />, handle: { title: 'Trip Info', crumbs: ['Home', 'Golf', 'Trip'] } },
      { path: 'golf/trip/info/current', element: <TripCurrentPage />, handle: { title: '2026 Trip Info', crumbs: ['Home', 'Golf', 'Trip', 'Info'] } },
      { path: 'golf/trip/info/history', element: <TripHistoryPage />, handle: { title: 'Trip History', crumbs: ['Home', 'Golf', 'Trip', 'Info'] } },
      { path: 'golf/trip/field', element: <TripFieldPage />, handle: { title: 'Trip Field', crumbs: ['Home', 'Golf', 'Trip'] } },
      { path: 'golf/trip/pairings', element: <TripPairingsPage />, handle: { title: 'Trip Pairings', crumbs: ['Home', 'Golf', 'Trip'] } },
      { path: 'golf/trip/condos', element: <TripCondosPage />, handle: { title: 'Condo Info', crumbs: ['Home', 'Golf', 'Trip'] } },
      { path: 'golf/trip/archives', element: <TripArchivesHubPage />, handle: { title: 'Trip Archives', crumbs: ['Home', 'Golf', 'Trip'] } },
      { path: 'golf/trip/archives/:range', element: <TripArchiveYearPage />, handle: { title: 'Trip Archive', crumbs: ['Home', 'Golf', 'Trip', 'Archives'] } },

      { path: 'golf/league', element: <LeagueHubPage />, handle: { title: 'Tuesday Golf League', crumbs: ['Home', 'Golf'] } },
      { path: 'golf/league/info', element: <LeagueInfoPage />, handle: { title: '2026 League Info', crumbs: ['Home', 'Golf', 'League'] } },
      { path: 'golf/league/stats', element: <LeagueStatsPage />, handle: { title: '2026 League Stats', crumbs: ['Home', 'Golf', 'League'] } },
      { path: 'golf/league/archives', element: <LeagueArchivesPage />, handle: { title: 'League Archives', crumbs: ['Home', 'Golf', 'League'] } },

      { path: 'golf/misc', element: <GolfMiscPage />, handle: { title: 'Golf Misc', crumbs: ['Home', 'Golf'] } },
      { path: 'golf/bonus-card', element: <BonusCardPage />, handle: { title: 'Bonus Card', crumbs: ['Home', 'Golf'] } },
      { path: 'golf/old-news', element: <OldNewsPage />, handle: { title: 'Old News', crumbs: ['Home', 'Golf'] } },

      { path: 'bowling', element: <BowlingHubPage />, handle: { title: 'Bowling', crumbs: ['Home'] } },
      { path: 'bowling/current', element: <BowlingCurrentPage />, handle: { title: 'Bowling — Current', crumbs: ['Home', 'Bowling'] } },
      { path: 'bowling/records', element: <BowlingRecordsPage />, handle: { title: 'Bowling — Records', crumbs: ['Home', 'Bowling'] } },
      { path: 'bowling/archives/:range', element: <BowlingArchivePage />, handle: { title: 'Bowling Archives', crumbs: ['Home', 'Bowling'] } },

      { path: 'photos', element: <PhotosHubPage />, handle: { title: 'Photo Gallery', crumbs: ['Home'] } },
      { path: 'photos/:album', element: <PhotoGalleryPage />, handle: { title: 'Photos', crumbs: ['Home', 'Photos'] } },

      { path: 'poker', element: <AlbertGamePage />, handle: { title: "Albert's Game", crumbs: ['Home'] } },
    ],
  },
])
