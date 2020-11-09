import VerticalLayout from './layouts/Vertical/Vertical';

import NotFound from './pages/errors/NotFound/NotFound';
import HorizontalLayout from './layouts/Horizontal/Horizontal';

import PageDashboard from './pages/dashboards/Dashboard/Dashboard';
import PageTypography from './pages/ui/Typography/Typography';
import PageButtons from './pages/ui/Buttons/Buttons';
import PageDropdowns from './pages/ui/Dropdowns/Dropdowns';
import PageAlerts from './pages/ui/Alerts/Alerts';
import PageAvatars from './pages/ui/Avatars/Avatars';
import PageBadges from './pages/ui/Badges/Badges';
import PageCards from './pages/ui/Cards/Cards';
import PageCheckboxes from './pages/ui/Checkboxes/Checkboxes';
import PageCircleProgresses from './pages/ui/CircleProgresses/CircleProgresses';
import PageInputs from './pages/ui/Inputs/Inputs';
import PageLists from './pages/ui/Lists/Lists';
import PageModals from './pages/ui/Modals/Modals';
import PageProgresses from './pages/ui/Progresses/Progresses';
import PageRadioButtons from './pages/ui/RadioButtons/RadioButtons';
import PageRatings from './pages/ui/Ratings/Ratings';
import PageSelects from './pages/ui/Selects/Selects';
import PageSwitchers from './pages/ui/Switchers/Switchers';
import PageTextareas from './pages/ui/Textareas/Textareas';
import PageTags from './pages/ui/Tags/Tags';
import PageAutocomplete from './pages/ui/Autocompletes/Autocompletes';
import PageSliders from './pages/forms/Sliders/Sliders';
import PageDatePickers from './pages/forms/Datepickers/Datepickers';
import PageTimePickers from './pages/forms/Timepickers/Timepickers';
import PageUploads from './pages/forms/Uploads/Uploads';
import PageCascaders from './pages/ui/Cascaders/Cascaders';
import PageSteps from './pages/forms/Steps/Steps';
import PageTimelines from './pages/ui/Timelines/Timelines';
import PagePaginations from './pages/forms/Paginations/Paginations';
import PageFormElements from './pages/forms/Elements/Elements';
import PageFormValidation from './pages/forms/Validations/Validation';
import PageFormLayouts from './pages/forms/Layouts/Layouts';
import PageTables from './pages/Tables/Tables';
import PageAntIcons from './pages/icons/AntIcons/AntIcons';
import PageIconsOptions from './pages/icons/IconsOptions/IconsOption';
import PageIconsSLI from './pages/icons/IconsSLI/IconsSLI';
import PageGoogleMaps from './pages/maps/GoogleMaps/GoogleMaps';
import PageWorldMap from './pages/maps/WorldMap/WorldMap';
import PageVectorMaps from './pages/maps/VectorMaps/VectorMaps';
import PageRechart from './pages/Charts/Recharts/Rechart';
import PageEcharts from './pages/Charts/Echarts/Echarts';
import PageChartJs from './pages/Charts/ChartJs/ChartJs';
import PageAnalytics from './pages/dashboards/Analytics/Analytics';
import PageECommerce from './pages/dashboards/eCommerce/eCommerce';
import PageWidgets from './pages/dashboards/Widgets/Widgets';
import ErrorLayout from './layouts/Error/Error';
import InternalError from './pages/errors/InternalError/InternalError';
import ServiceUnavailable from './pages/errors/ServiceUnavailable/ServiceUnavailable';
import Forbidden from './pages/errors/Forbidden/Forbidden';
import PublicLayout from './layouts/Public/Public';
import PageSignIn from './pages/authentifications/SignIn/SignIn';
import PageSignUp from './pages/authentifications/SignUp/SignUp';
import PageVerifyAccount from './pages/authentifications/VerifyAccount/VerifyAccount';
import PageResetPassword from './pages/authentifications/ResetPassword/ResetPassword';
import PageViewProfile from './pages/userPages/ViewProfile/ViewProfile';
import PageEditAccount from './pages/userPages/EditAccount/EditAccount';
import PageConnections from './pages/userPages/Connections/Connections';
import PageGroups from './pages/userPages/Groups/Groups';
import PageInvoice from './pages/servicePages/Invoice/Invoice';
import PageInvoices from './pages/servicePages/Invoices/Invoices';
import PagePricing from './pages/servicePages/Pricing/Pricing';
import PageEventsTimeline from './pages/servicePages/EventsTimeline/EventsTimeline';
import PageEventCalendar from './pages/servicePages/EventsCalendar/EventsCalendar';

export interface IRoute {
  path: string;
  component: any;
  exact?: boolean;
  children?: IRoute[];
}

export const defaultRoutes: IRoute[] = [
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/dashboard',
    component: PageDashboard
  },
  {
    path: '/typography',
    component: PageTypography
  },
  {
    path: '/buttons',
    component: PageButtons
  },
  {
    path: '/dropdowns',
    component: PageDropdowns
  },
  {
    path: '/alerts',
    component: PageAlerts
  },
  {
    path: '/avatars',
    component: PageAvatars
  },
  {
    path: '/badges',
    component: PageBadges
  },
  {
    path: '/cards',
    component: PageCards
  },
  {
    path: '/checkboxes',
    component: PageCheckboxes
  },
  {
    path: '/circular-progresses',
    component: PageCircleProgresses
  },
  {
    path: '/inputs',
    component: PageInputs
  },
  {
    path: '/lists',
    component: PageLists
  },
  {
    path: '/modals',
    component: PageModals
  },
  {
    path: '/progresses',
    component: PageProgresses
  },
  {
    path: '/radio-buttons',
    component: PageRadioButtons
  },
  {
    path: '/ratings',
    component: PageRatings
  },
  {
    path: '/selects',
    component: PageSelects
  },
  {
    path: '/sliders',
    component: PageSliders
  },
  {
    path: '/switchers',
    component: PageSwitchers
  },
  {
    path: '/tags',
    component: PageTags
  },
  {
    path: '/textareas',
    component: PageTextareas
  },
  {
    path: '/autocompletes',
    component: PageAutocomplete
  },
  {
    path: '/date-picker',
    component: PageDatePickers
  },
  {
    path: '/time-picker',
    component: PageTimePickers
  },
  {
    path: '/upload',
    component: PageUploads
  },
  {
    path: '/cascaders',
    component: PageCascaders
  },
  {
    path: '/steps',
    component: PageSteps
  },
  {
    path: '/timelines',
    component: PageTimelines
  },
  {
    path: '/paginations',
    component: PagePaginations
  },
  {
    path: '/form-elements',
    component: PageFormElements
  },
  {
    path: '/form-validation',
    component: PageFormValidation
  },
  {
    path: '/form-layouts',
    component: PageFormLayouts
  },
  {
    path: '/tables',
    component: PageTables
  },
  {
    path: '/ant-icons',
    component: PageAntIcons
  },
  {
    path: '/icons-options',
    component: PageIconsOptions
  },
  {
    path: '/icons-sli',
    component: PageIconsSLI
  },
  {
    path: '/google-map',
    component: PageGoogleMaps
  },
  {
    path: '/vector-map',
    component: PageVectorMaps
  },
  {
    path: '/world-map',
    component: PageWorldMap
  },
  {
    path: '/recharts',
    component: PageRechart
  },
  {
    path: '/echarts',
    component: PageEcharts
  },
  {
    path: '/chart-js',
    component: PageChartJs
  },
  {
    path: '/analytics',
    component: PageAnalytics
  },
  {
    path: '/e-commerce',
    component: PageECommerce
  },
  {
    path: '/widgets',
    component: PageWidgets
  },
  {
    path: '/user-profile',
    component: PageViewProfile
  },
  {
    path: '/edit-account',
    component: PageEditAccount
  },
  {
    path: '/connections',
    component: PageConnections
  },
  {
    path: '/groups',
    component: PageGroups
  },
  {
    path: '/invoice',
    component: PageInvoice
  },
  {
    path: '/invoices',
    component: PageInvoices
  },
  {
    path: '/pricing',
    component: PagePricing
  },
  {
    path: '/events-timeline',
    component: PageEventsTimeline
  },
  {
    path: '/events-calendar',
    component: PageEventCalendar
  }
];

export const publicRoutes: IRoute[] = [
  {
    path: '/sign-in',
    component: PageSignIn
  },
  {
    path: '/sign-up',
    component: PageSignUp
  },
  {
    path: '/verify-account',
    component: PageVerifyAccount
  },
  {
    path: '/forgot-password',
    component: PageResetPassword
  }
];

export const errorRoutes: IRoute[] = [
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/500',
    component: InternalError
  },
  {
    path: '/503',
    component: ServiceUnavailable
  },
  {
    path: '/505',
    component: Forbidden
  }
];



export const routes: IRoute[] = [
  {
    path: '/vertical',
    component: VerticalLayout,
    children: defaultRoutes
  },
  {
    path: '/horizontal',
    component: HorizontalLayout,
    children: defaultRoutes
  },
  {
    path: '/error',
    component: ErrorLayout,
    children: errorRoutes
  },
  {
    path: '/public',
    component: PublicLayout,
    children: publicRoutes
  }
];
