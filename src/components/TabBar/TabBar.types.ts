import { ComponentType } from 'react'
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { NavigatorScreenParams } from '@react-navigation/native'

import { HomeStackParamsList } from 'navigation/navigators/HomeNavigator/HomeNavigator.types'
import { ProfileStackParamsList } from 'navigation/navigators/ProfileNavigator/ProfileNavigator.types'
import { ShopStackParamsList } from 'navigation/navigators/ShopNavigator/ShopNavigator.types'

export type BottomTab = {
  name: string
  component: ComponentType<NativeStackNavigatorProps>
  icon: SvgComponent
  iconActive: SvgComponent
  label: TranslationKey | undefined
  testID: string
}

export type BottomTabs = Array<BottomTab>

export type TabsParamsList = {
  Tab1: NavigatorScreenParams<HomeStackParamsList>
  Tab2: NavigatorScreenParams<ShopStackParamsList>
  Tab3: NavigatorScreenParams<{}>
  Tab4: NavigatorScreenParams<{}>
  Tab5: NavigatorScreenParams<ProfileStackParamsList>
}

export type TabBarNames = keyof TabsParamsList
