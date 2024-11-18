import ButtonBack from '@/src/components/atomo/buttonBack'
import Promotion from '@/src/components/atomo/promotion'
import HeaderMarketplace from '@/src/components/molecula/headerMarketplace'
import NavBar from '@/src/components/molecula/navBar'
import SectionItensMarketplace from '@/src/components/molecula/sectionItensMarketplace'
import { color } from '@/src/styles/colors'
import React from 'react'
import {  KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text,  View } from 'react-native'

export default function MarketPLacePage() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.page} >
        <View style={styles.container}>
          <ButtonBack  position_left={20} position_top={16}/>
          <Text style={styles.title}>Torne seu lar mais verde</Text>
          <HeaderMarketplace />
          <SectionItensMarketplace 
            sectionName='Popular'
          />
          <Promotion
            text='30%  OFF na sua primeira compra'
            path='/'
          />
          <SectionItensMarketplace 
            sectionName='Em desconto'
          />
        </View>
      </ScrollView >
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.green.bg,
    gap: 15,
  },

  title: {
    fontSize: 40,
    fontWeight: '800',
    color: color.green[500],
    textAlign: 'left',
    marginTop: 35,
  },
})