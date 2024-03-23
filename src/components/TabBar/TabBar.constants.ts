import { View } from 'react-native'

import { Icon } from 'constants/icons'
import { BottomTabs } from 'modules/components/TabBar/TabBar.types'
import { HomeNavigator } from 'navigation/navigators/HomeNavigator/HomeNavigator'
import { ProfileNavigator } from 'navigation/navigators/ProfileNavigator/ProfileNavigator'
import { ShopNavigator } from 'navigation/navigators/ShopNavigator/ShopNavigator'

export const TABS: BottomTabs = [
  {
    name: 'Tab1',
    component: HomeNavigator,
    icon: Icon.Tab1,
    iconActive: Icon.Tab1Active,
    label: 'bottomTabBar.home.name',
    testID: 'tab-bar.icon-tab-1',
  },
  {
    name: 'Tab2',
    component: ShopNavigator,
    icon: Icon.Tab2,
    iconActive: Icon.Tab2Active,
    label: 'bottomTabBar.shop.name',
    testID: 'tab-bar.icon-tab-2',
  },
  {
    name: 'Tab3',
    component: View,
    icon: Icon.Tab3,
    iconActive: Icon.Tab3Active,
    label: undefined,
    testID: 'tab-bar.icon-tab-3',
  },
  {
    name: 'Tab4',
    component: View,
    icon: Icon.Tab4,
    iconActive: Icon.Tab4Active,
    label: undefined,
    testID: 'tab-bar.icon-tab-4',
  },
  {
    name: 'Tab5',
    component: ProfileNavigator,
    icon: Icon.Tab5,
    iconActive: Icon.Tab5Active,
    label: 'bottomTabBar.profile.name',
    testID: 'tab-bar.icon-tab-5',
  },
]

export const TAB_BAR_HEIGHT = 52
