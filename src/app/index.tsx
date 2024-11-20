import ButtonBack from '@/src/components/atomo/buttonBack'
import Promotion from '@/src/components/atomo/promotion'
import HeaderMarketplace from '@/src/components/molecula/headerMarketplace'
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
          <Text style={styles.title}>Torne seu lar mais verde</Text>
          <HeaderMarketplace />
          <SectionItensMarketplace 
            sectionName='Popular'
          />
          <Promotion
            porcent='30'
            text='OFF na sua primeira compra'
            path='/shoppingCart'
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
    marginTop: 15,
  },

  title: {
    fontSize: 40,
    fontWeight: '800',
    color: color.green[500],
    textAlign: 'left',
  },
})